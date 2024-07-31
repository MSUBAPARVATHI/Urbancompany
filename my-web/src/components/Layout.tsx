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
    <a className="btn btn-ghost mr-5 text-xl">daisyUI</a>
  </div>

  <ul className="menu menu-horizontal bg-base-200 rounded-box">
  <li>
    <a>
      <h1
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        home
      </h1>
    </a>
  </li>
  <li>
    <a>
      <h1       
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        native
      </h1>
    </a>
  </li>
  <li>
    <a>
      <h1
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        beauty
      </h1>
    </a>
  </li>
</ul>


  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
            <footer>&copy; 2024 Urban Company. All rights reserved.</footer>
        </div>
    );
};

export default Layout;