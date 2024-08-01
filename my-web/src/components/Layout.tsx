import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>Urban Company</title>
                <meta name="description" content="Your one-stop solution for all urban services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    
  </div>
{/* nav bar */}

<div className='justify-left m-3 gap-5'>
  <div className="navbar bg-neutral text-neutral-content">
  <button className="btn btn-ghost text-xl">HOME</button>
</div>
<div className="navbar bg-base-300">
  <button className="btn btn-ghost text-xl">BEAUTY</button>
</div>
<div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">NATIVE</button>
</div>

</div>

{/* input search */}
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="search" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-500px rounded-full">
          <img
            alt="logo"
            src="./logo.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


  </header>
            <main>{children}</main>

            
            <footer className='bg-black mw-5 mh-5 p-10 text-white text-center '>&copy; 2024 Urban Company. All rights reserved.</footer>
          
        </div>
    );
};

export default Layout;