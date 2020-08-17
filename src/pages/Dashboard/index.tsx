import React from 'react';
import Header from '../../components/Header';

import { Container, Wrapper } from './styles';
import Sidebar from './Sidebar';

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
