import React from 'react';
import css from './ActiveLabel.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
