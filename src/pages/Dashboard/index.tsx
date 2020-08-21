import React from 'react';

import Header from '../../components/Header';
import Sidebar from './Sidebar';

import { Container, Wrapper } from './styles';
import MainContent from '../../components/MainContent';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
