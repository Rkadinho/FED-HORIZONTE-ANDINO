import '../css/global.css'
import '../css/components/card.css'
import { ReactNode } from 'react';

interface cardProps {
  children?: ReactNode;
  background?: string;
}

export default function Card({ children, background }: cardProps) {
  return (
    <div className={`${background} shadow card`}>
      {children}
    </div>
  );
}