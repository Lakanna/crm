import React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

function page({ params }: PageProps) {
  return (
    <>
      <Header>Companie Page:{params.then()} </Header>
    </>
  );
}

export default page;
