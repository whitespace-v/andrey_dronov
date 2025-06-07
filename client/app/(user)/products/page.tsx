'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
const params = useParams()
console.log(params);


  return (
    <div>page</div>
  )
}
