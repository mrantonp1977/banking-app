import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { get } from 'http';
import React from 'react';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12547.23}
          />
        </header>
        recent transactions
      </div>
      <RightSidebar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{ currentBalance: 1235.30 }, { currentBalance: 535.30 }]} 
      />
    </section>
  );
};

export default Home;
