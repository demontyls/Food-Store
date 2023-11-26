import React from 'react';
import {NavigationList} from '@/components/navbar/navigationList';
import Link from 'next/link';
import Image from 'next/image';
import './style.scss';

const PageHome = ({}) => {
    return (
      <div className="bg-white p-4 rounded-3 shadow-sm">
        <div className="navigation-cards">
          {NavigationList.map((item, i) => {
            return (
              <Link key={i} href={item.path} className="navigation-card border-secondary">
                <Image src={item.imgPath} alt={item.imgName} width={200} height={200}/>
              </Link>
            )
          })}
        </div>
      </div>
    );
}

export default PageHome;