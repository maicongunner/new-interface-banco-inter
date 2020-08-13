import React, { ButtonHTMLAttributes } from 'react';

type typesButton = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: typesButton;
  type?: string;
}
