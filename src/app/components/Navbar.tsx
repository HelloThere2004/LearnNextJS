'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
         <nav className="nav-bar">
            <Link className={pathname === '/' ? 'nav-active' : ''} href={"/"}>Trang chủ</Link>
            <Link className={pathname === '/case' ? 'nav-active' : ''} href={"/case"}>Vụ án</Link>
            <Link className={pathname === '/gadget' ? 'nav-active' : ''} href={"/gadget"}>Trang bị</Link>
          </nav>
    )
   
}

export default Navbar;