import React from 'react';
import css from './NotActiveLabel.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
