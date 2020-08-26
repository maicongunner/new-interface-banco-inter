import React, { useState } from 'react';

import {
  Container,
  Card,
  Header,
  LeftData,
  RightData,
  DataValue,
  DataWrapper,
} from './styles';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';
import PlataformaPaiLogo from '../../../assets/images/icons/plataforma-pai.png';
import CreditCardIllustration from '../../../assets/images/illustrations/card-illustration.png';
import Button from '../../Button';

const AccountSummary: React.FC = () => {
  const [displayInvestiments, setDisplayInvestments] = useState(true);
  const [displayStatement, setDisplayStatement] = useState(true);

  return (
    <Container>
      <Card>
        <Header>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Gráfico</LeftData>
          <RightData>
            <span>Título</span>
            <DataValue>{displayStatement ? 'Valor' : '---'}</DataValue>
            <span>Título</span>
            <DataValue>{displayStatement ? 'Valor' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>
        <DataWrapper>
          <LeftData>
            <img
              src={CreditCardIllustration}
              alt="Cartão de Crédito sem auniedade"
            />
          </LeftData>
          <RightData>
            <span>Seu cartão é Mastercard e sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header>
          <img src={PlataformaPaiLogo} alt="Plataforma pai logo" />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            variant="transparent"
          >
            {displayInvestiments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Gráfico</LeftData>
          <RightData>
            <span>Título</span>
            <DataValue income>
              {displayInvestiments ? 'Valor' : '---'}
            </DataValue>
            <span>Título</span>
            <DataValue outcome>
              {displayInvestiments ? 'Valor' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
