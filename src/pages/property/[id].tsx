// pages/property/[id].tsx
import { GetServerSideProps } from 'next';
import { supabase } from './../../lib/supabase.ts';
import { Camera, BedDouble, Bath, Maximize, MapPin, Phone, Mail } from 'lucide-react';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const { data: property, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !property) {
    return { notFound: true };
  }

  return { props: { property } };
};

export default function PropertyPage({ property }: { property: any }) {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${property.images?.[0] || ''})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-bold mb-2">${property.price}</h1>
          <p className="text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            {property.title}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2">
                <BedDouble className="w-6 h-6 text-gray-600" />
                <span className="text-lg">{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-6 h-6 text-gray-600" />
                <span className="text-lg">{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-6 h-6 text-gray-600" />
                <span className="text-lg">{property.size} sqft</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
            <ul className="text-gray-600 mb-8 list-disc pl-6">
              {property.unique_points?.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {property.images?.map((img: string, i: number) => (
                <div
                  key={i}
                  className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Property photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${property.agent_phone}`}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Phone className="w-5 h-5" />
                {property.agent_phone}
              </a>
              <a
                href={`mailto:${property.agent_email}`}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-5 h-5" />
                {property.agent_email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
