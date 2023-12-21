import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LogoComponent() {
  const { resolvedTheme, setTheme } = useTheme();
  const [theme, setLocalTheme] = useState(resolvedTheme);

  useEffect(() => {
    // Verifica se o código está sendo executado do lado do cliente (navegador)
    if (typeof window !== 'undefined') {
      setLocalTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  // Determine qual logo exibir com base no tema
  const logoSrc = theme === 'dark' ? '/svgs/logolight.svg' : '/svgs/logodark.svg';

  return (
    <Image
      src={logoSrc}
      alt={theme === 'dark' ? 'logo (modo escuro)' : 'logo'}
      width={100}
      height={100}
    />
  );
}

export default LogoComponent;