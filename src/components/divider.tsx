import '../css/global.css'
import '../css/components/divider.css'
import { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
}

export default function Divider({ children }: DividerProps) {
  return (
    <div className='bg width-100 d-flex space-e align-i-c text-primary divider'>
      {children}
    </div>
  );
}