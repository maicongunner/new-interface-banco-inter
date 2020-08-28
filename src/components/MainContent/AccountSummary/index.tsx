import React, { useState } from 'react';

import { ResponsiveLine } from '@nivo/line';
import { useTheme } from 'styled-components';

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
import { lineChartData } from '../../../resources';

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
            <span>Receita</span>
            <DataValue income>
              {displayStatement ? 'R$ 8.522,00' : '---'}
            </DataValue>
            <span>Despesas</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 7.948,00' : '---'}
            </DataValue>
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
          <LeftData>
            <ResponsiveLine
              data={lineChartData}
              margin={{ top: 8, right: -8, bottom: 24, left: -8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
              }}
              colors={{ scheme: 'nivo' }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabel="y"
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestiments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>Evolução no mês</span>
            <DataValue>{displayInvestiments ? '20%' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
