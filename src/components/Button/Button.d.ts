import { ButtonHTMLAttributes } from 'react';

export type Buttonrevisions = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  revision?: Buttonrevisions;
  background?: string;
  color?: string;
};
