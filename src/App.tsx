import React from 'react';
import { Camera, BedDouble, Bath, Maximize, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-bold mb-2">$849,000</h1>
          <p className="text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            123 Luxury Lane, Beverly Hills, CA 90210
          </p>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2">
                <BedDouble className="w-6 h-6 text-gray-600" />
                <span className="text-lg">4 Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-6 h-6 text-gray-600" />
                <span className="text-lg">3 Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-6 h-6 text-gray-600" />
                <span className="text-lg">3,200 sqft</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
            <p className="text-gray-600 mb-8">
              Welcome to this stunning modern residence nestled in the heart of Beverly Hills. This meticulously maintained home offers the perfect blend of luxury and comfort. Featuring an open concept living area, gourmet kitchen with high-end appliances, and a spacious primary suite with a spa-like bathroom.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-${1600046778 + i}?auto=format&fit=crop&q=80`}
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

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
              <a href="mailto:agent@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
                agent@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;