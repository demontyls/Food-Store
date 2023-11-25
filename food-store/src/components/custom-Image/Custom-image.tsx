'use client'
import React from 'react';
import Image from "next/image";

interface ICustomImage {
  alt: string
  src: string
  width: number
}
const CustomImage: React.FC<ICustomImage> = ({alt, src, width}) => {
  return (
    <Image src={src} alt={alt} width={width} height={width}/>
  );
};

export default CustomImage;