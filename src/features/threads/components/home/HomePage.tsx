import { FC } from 'react';
import ThreadCreateSection from './ThreadCreateSection';
import ThreadListSection from './ThreadListSection';
import Navbar from '@/common/components/ui/navbar';
import AuthenticatedWrapper from '@/common/components/authentication/AuthenticatedWrapper';
import ThreadsFilter from './ThreadsFilter';
import LeaderboardList from '../leaderboard-list/LeaderboardList';
import { Separator } from '@radix-ui/react-separator';

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <section>
          <div className="container mx-auto max-w-screen-xl py-8">
            <div className="grid grid-cols-12 gap-y-8 md:gap-16">
              <div className="col-span-12  lg:col-span-3">
                <AuthenticatedWrapper>
                  <ThreadCreateSection />
                  <Separator className="my-4" />
                </AuthenticatedWrapper>
                <ThreadsFilter />
                <Separator className="my-8" />
                <LeaderboardList />
              </div>
              <div className="col-span-12 lg:col-span-9">
                <ThreadListSection />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
