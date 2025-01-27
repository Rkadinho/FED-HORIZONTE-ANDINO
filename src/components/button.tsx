import '../css/global.css'
import '../css/components/button.css'
import { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
  background?: string;
}

export default function Button({ children, background }: DividerProps) {
  return (
    <button className={`${background} shadow button`}>
      {children}
    </button>
  );
}