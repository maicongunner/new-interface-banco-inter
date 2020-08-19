import React from 'react';

import Header from '../../components/Header';
import Sidebar from './Sidebar';

import { Container, Wrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <Header />
      <Container>
        <Wrapper>
          <Sidebar />
        </Wrapper>
      </Container>
    </>
  );
}

export default Dashboard;
