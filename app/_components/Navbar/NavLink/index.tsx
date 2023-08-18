'use client';

import Link from 'next/link';
import React from 'react';

interface INavLink {
  href: string;
  children?: React.ReactNode;
}

function NavLink(props: INavLink) {
  const { href, children } = props;
  return (
    <Link href={href} className="text-lg font-bold hover:text-gray-300">
      {children}
    </Link>
  );
}

export default NavLink;
