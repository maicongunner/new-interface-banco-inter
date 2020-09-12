import React from 'react';

import Header from '../../components/Header';
import Sidebar from './Sidebar';

import { Container, Wrapper } from './styles';
import MainContent from '../../components/MainContent';
import Footer from '../../components/Footer';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // },
  },
};

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          variants={animation}
          initial="unMounted"
          animate="mounted"
          transition={{ duration: 1.5 }}
        >
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
