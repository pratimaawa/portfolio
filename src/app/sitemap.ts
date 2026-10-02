import type { MetadataRoute } from 'next';

import { profile } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/work/onta-trips'].map((path) => ({
    url: `${profile.url}${path}`,
  }));
}
