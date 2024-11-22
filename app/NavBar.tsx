'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GrBug } from 'react-icons/gr'
import classnames from 'classnames'

function NavBar() { 
    const currentPath = usePathname();
    // console.log(currentPath) 
    const navLinks =[
        {label:"Dashboard", href:"/dashboard"},
        {label:"Issues", href:"/issues"},
    ]

  return (
    <nav className='flex space-x-6 mb-5 h-14 px-5 border-b items-center'>
        <div><Link href="/"><GrBug /></Link></div>
        <ul className='flex space-x-3'>
            {
                navLinks.map(link =>
                    <li key={link.href} className={classnames({
                        'text-zinc-800':link.href === currentPath,
                        'text-zinc-500':link.href !== currentPath,
                        'hover:text-zinc-700 transition-colors': true
                        })}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                )
            }
        </ul>
    </nav>
  )
}

export default NavBar