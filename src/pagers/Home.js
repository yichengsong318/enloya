import React, { Fragment } from 'react';
import TopMenu from '../layout/TopMenu';
import Header from '../layout/Header';
import ConnectLawyers from '../ConnectLawyers';
import HowItWorks from '../HowItWorks';
import HowWeCanHelp from '../HowWeCanHelp';
import StayUpdated from '../StayUpdated';
import { Footer } from '../layout/Footer';

const Home = () => (
  <Fragment>
    <TopMenu />
    <Header />
    <ConnectLawyers />
    <HowItWorks />
    <HowWeCanHelp />
    <StayUpdated />
    <Footer />
  </Fragment>
);

export default Home;
