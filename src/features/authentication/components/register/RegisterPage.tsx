import { FC } from 'react';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';

const RegisterPage: FC = () => {
  return (
    <main id="main">
      <div className="container mx-auto mt-16 max-w-screen-sm rounded-xl py-16 shadow-border">
        <RegisterHeader />
        <section className="mt-8">
          <RegisterForm />
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
