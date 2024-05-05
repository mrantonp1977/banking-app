import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Antonis', lastName: 'Papaioannou', email: 'mrantonp@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
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
