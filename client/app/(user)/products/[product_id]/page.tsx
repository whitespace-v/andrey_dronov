'use client';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const req = await Axios.$get('/products', { params: { id: params.id } });
  };

  return <div>zdes budet product</div>;
}
