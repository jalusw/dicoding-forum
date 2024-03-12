import { FC } from 'react';
import ThreadCreateSection from './ThreadCreateSection';
import ThreadListSection from './ThreadListSection';
import Navbar from '@/common/components/ui/navbar';
import AuthenticatedWrapper from '@/common/components/authentication/AuthenticatedWrapper';

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <section>
          <div className="container mx-auto max-w-screen-lg py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <ThreadListSection />
              </div>
              <div className="col-span-4">
                <AuthenticatedWrapper>
                  <ThreadCreateSection />
                </AuthenticatedWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
