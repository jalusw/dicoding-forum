import { useAppSelector } from '@/common/hooks';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="py-4 shadow-border">
      <div className="container  mx-auto flex justify-between">
        <NavbarBrand />
        <NavbarLinks />
      </div>
    </nav>
  );
};

const NavbarBrand: FC = () => (
  <Link className="text-xl font-bold" to="/">
    Dicoding Forum
  </Link>
);

const NavbarLinks: FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default Navbar;
