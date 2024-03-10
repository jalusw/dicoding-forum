import { FC } from 'react';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {
  return (
    <main id="main">
      <div className="container mx-auto mt-16 max-w-screen-sm rounded-xl py-16 shadow-border">
        <RegisterHeader />
        <section className="mt-8">
          <RegisterForm />
        </section>
        <section className="mt-4">
          <Link to="/login">Have an account already?</Link>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
