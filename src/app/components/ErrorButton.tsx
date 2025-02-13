'use client';

import React, { useEffect, useState } from 'react';
import Button, { ButtonProps } from '@/app/components/Button';

type ErrorButtonProps = {};

const ErrorButton = (props: ErrorButtonProps) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Errors button
    </Button>
  );
};

export default ErrorButton;
