'use client'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LogoComponent() {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLogoSrc(resolvedTheme === 'dark' ? '/svgs/logolight.svg' : '/svgs/logodark.svg');
    setLoading(false);
  }, [resolvedTheme]);

  return (
    <div>
      {!loading && (
        <Image
          src={logoSrc}
          alt={resolvedTheme === 'dark' ? 'logo (modo escuro)' : 'logo (modo claro)'}
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

export default LogoComponent;