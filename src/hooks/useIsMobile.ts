import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < breakpoint;
      console.log('Window width:', window.innerWidth, 'Breakpoint:', breakpoint, 'Is mobile:', mobile);
      setIsMobile(mobile);
    };

    // Initial check with a small delay to ensure proper calculation
    const timer = setTimeout(checkIfMobile, 100);

    // Add event listener for window resize with debounce
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkIfMobile, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
