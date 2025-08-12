import { useEffect, useState } from 'react';
import type { ReactNode } from 'react'; 
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { text, curve, translate } from './anim.ts';
import './style.scss';

const routes: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
  '/services': 'Services',
};

const anim = (variants: any) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

interface CurveProps {
  children: ReactNode;
  backgroundColor: string;
}

interface Dimensions {
  width: number | null;
  height: number | null;
}

export default function PageTransition({ children, backgroundColor }: CurveProps) {
  const location = useLocation();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
        {routes[location.pathname as keyof typeof routes]}
      </motion.p>
      {dimensions.width != null && dimensions.height != null && (
        <SVG height={dimensions.height} width={dimensions.width} />
      )}
      {children}
    </div>
  );
}

interface SVGProps {
  height: number;
  width: number;
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};