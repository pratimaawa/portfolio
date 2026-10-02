import { ImageResponse } from 'next/og';

import { profile } from '@/content/site';

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// ponytail: default OG font; load Newsreader via readFile if the serif matters in previews.
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background: '#f7f5f0',
        color: '#1c1b19',
      }}
    >
      <div style={{ fontSize: 28, color: '#a63d17' }}>
        {`${profile.name} · ${profile.role}`}
      </div>
      <div style={{ fontSize: 56, lineHeight: 1.15, letterSpacing: -1 }}>
        {profile.headline}
      </div>
    </div>,
    size
  );
}
