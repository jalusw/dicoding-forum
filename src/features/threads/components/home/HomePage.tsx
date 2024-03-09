import { FC } from 'react';
import ThreadListSection from './ThreadListSection';
import Navbar from '@/common/components/ui/navbar';

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <section>
          <div className="container mx-auto py-8">
            <ThreadListSection />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
