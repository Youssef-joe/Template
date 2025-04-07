import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from './../../lib/supabase.ts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location, budget, bedrooms } = req.body;

  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .ilike('title', `%${location}%`)
    .lte('price', budget)
    .eq('bedrooms', bedrooms);

  if (error) return res.status(500).json({ error });

  return res.status(200).json(data);
}
