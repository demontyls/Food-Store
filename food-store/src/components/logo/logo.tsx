import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
      <Link href={'/'}>
        <h2 className="h4 mb-0">FOODSTORE</h2>
      </Link>
    );
}

export default Logo;