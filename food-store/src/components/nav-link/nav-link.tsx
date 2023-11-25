'use client'
import React from 'react';
import Link from 'next/link'
import { usePathname} from 'next/navigation';
interface ILink {
  path: string;
  name: string;
}
const Navlink:React.FC<ILink> = ({path, name}) => {
  const isActive = (path: string) : string => {
    const pathname = usePathname();
    return path === pathname ? 'active' : '';
  }
  return (
    <Link className={`mr-2 ${isActive(path)}`} href={path}>{name}</Link>
  );
};

export default Navlink;