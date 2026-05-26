import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2b2726',
          color: '#f2eee8',
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        QM
      </div>
    ),
    size,
  );
}
