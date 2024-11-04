import Link from 'next/link'
import React from 'react'
import { GrBug } from 'react-icons/gr'

function NavBar() {    
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
                    <li className='text-zinc-400 hover:text-zinc-300 transition-colors'><Link href={link.href}>{link.label}</Link></li>
                )
            }
        </ul>
    </nav>
  )
}

export default NavBar