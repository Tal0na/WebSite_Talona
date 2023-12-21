import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LogoComponent() {
  const { resolvedTheme } = useTheme();
  const [theme, setLocalTheme] = useState(resolvedTheme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocalTheme(resolvedTheme);
    }
  }, [resolvedTheme]);
  


  const logoSrc = theme === 'dark' ? '/svgs/logolight.svg': '/svgs/logodark.svg';

  return (
    <div >
      <Image
        src={logoSrc}
        alt={theme === 'dark' ? 'logo (modo escuro)' : 'logo'}
        width={100}
        height={100}
      />
    </div>
  );
}

export default LogoComponent;