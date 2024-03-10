import { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

const LoginPage: FC = () => {
  return (
    <main id="main">
      <div className="container mx-auto mt-16 max-w-screen-sm rounded-xl py-16 shadow-border">
        <LoginHeader />
        <section className="mt-4">
          <LoginForm />
        </section>
        <section className='mt-8'>
          <Link to="/register">Don't have any account ?</Link>
        </section>
      </div>
    </main>
  );
};
export default LoginPage;
