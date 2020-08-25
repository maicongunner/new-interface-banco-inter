import React, { useReducer } from 'react';

import {
  Container,
  Card,
  Header,
  LeftData,
  RightData,
  DataValue,
} from './styles';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';
import PlataformaPaiLogo from '../../../assets/images/icons/plataforma-pai.png';
import Button from '../../Button';

const INITIAL_STATE = {
  displayStatement: false,
  displayInvestiments: false,
};

const AccountSummary: React.FC = () => {
  // const [{ displayInvestiments, displayStatement }, dispatch] = useReducer(
  //   reducer,
  //   INITIAL_STATE,
  // );

  return (
    <Container>
      <Card>
        <Header>
          <FiFileText />
          <h3>Extrato</h3>
          <Button></Button>
        </Header>
        <LeftData>Gráfico</LeftData>
        <RightData>
          <span>Título</span>
          <DataValue>Valor</DataValue>
        </RightData>
      </Card>

      <Card>
        <Header>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>
        <LeftData>Gráfico</LeftData>
        <RightData>
          <span>Título</span>
          <DataValue>Valor</DataValue>
        </RightData>
      </Card>

      <Card>
        <Header>
          <img src={PlataformaPaiLogo} alt="Plataforma pai logo" />
          <h3>Plataforma Aberta Inter</h3>
        </Header>
        <LeftData>Gráfico</LeftData>
        <RightData>
          <span>Título</span>
          {/* <DataValue>{displayInvestiments ? 'Valor' : '---'}</DataValue>
          <DataValue>{displayInvestiments ? 'Valor' : '---'}</DataValue> */}
        </RightData>
      </Card>
    </Container>
  );
};

export default AccountSummary;
