import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { logout } from '@/features/authentication/slices/authenticationSlice';
import AuthenticatedWrapper from '../authentication/AuthenticatedWrapper';
import GuestWrapper from '../authentication/GuestWrapper';

const Navbar: FC = () => {
  return (
    <nav className="py-4 shadow-border">
      <div className="container  mx-auto flex justify-between">
        <NavbarBrand />
        <NavbarMenu />
      </div>
    </nav>
  );
};

const NavbarBrand: FC = () => (
  <Link className="text-xl font-bold" to="/">
    Dicoding Forum
  </Link>
);

const NavbarMenu: FC = () => {
  return (
    <ul className='flex items-center space-x-4'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <AuthenticatedWrapper>
        <li>
          <LogoutButton />
        </li>
      </AuthenticatedWrapper>
      <GuestWrapper>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </GuestWrapper>
    </ul>
  );
};

const LogoutButton: FC = () => {
  const dispatch = useAppDispatch();
  const onClick = () => dispatch(logout());
  return (
    <Button className="m-0" onClick={onClick} variant="link">
      Logout
    </Button>
  );
};

export default Navbar;
