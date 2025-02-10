import React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {
  params: { id: string };
}

function page({ params }: PageProps) {
  return (
    <>
      <Header>Companie Page:{params.id} </Header>
    </>
  );
}

export default page;
