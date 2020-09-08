import React, { useState, useMemo } from 'react';

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

import { useTheme } from 'styled-components';

import {
  Container,
  Card,
  Header,
  LeftData,
  RightData,
  DataValue,
  DataWrapper,
  CustomToolTip,
} from './styles';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';
import PlataformaPaiLogo from '../../../assets/images/icons/plataforma-pai.png';
import CreditCardIllustration from '../../../assets/images/illustrations/card-illustration.png';
import Button from '../../Button';
import { lineChartData, barChartData } from '../../../resources';

type ChartValue = number | React.ReactText | undefined;

const formatChartValue = (value: ChartValue): string => `${value || 0}%`;

const AccountSummary: React.FC = () => {
  const [displayInvestiments, setDisplayInvestments] = useState(true);
  const [displayStatement, setDisplayStatement] = useState(true);
  const investimentGrowth = useMemo(() => {
    const [investments] = lineChartData;
    const { y } = investments.data[investments.data.length - 1];
    return formatChartValue(y);
  }, []);

  const { colors } = useTheme();

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
          <LeftData>
            {displayStatement ? (
              <ResponsiveBar
                data={barChartData}
                keys={['income', 'outcome']}
                indexBy="month"
                colors={({ id, data }) => data[`${id}Color`]}
                margin={{ top: 0, right: -8, bottom: 20, left: -8 }}
                padding={0.7}
                reverse={true}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 8,
                  tickRotation: 0,
                }}
                tooltip={chart => {
                  const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                  const value = chart.data[chart.id];
                  return (
                    <CustomToolTip rightArrow>
                      {`${label}: R$ ${value}`}
                    </CustomToolTip>
                  );
                }}
                theme={{
                  tooltip: {
                    container: {
                      background: 'transparent',
                      boxShadow: 'none',
                      padding: 0,
                      borderRadius: 0,
                    },
                    tableCell: {
                      padding: 0,
                    },
                  },
                }}
                axisLeft={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={'transparent'}
                animate={true}
                enableLabel={false}
                motionStiffness={90}
                motionDamping={15}
                enableGridY={false}
              />
            ) : null}
          </LeftData>
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
            {displayInvestiments ? (
              <ResponsiveLine
                data={lineChartData}
                enableArea
                useMesh
                enableCrosshair={false}
                curve={'cardinal'}
                margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
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
                  tickSize: 0,
                  tickPadding: 8,
                  tickRotation: 0,
                }}
                tooltip={({ point }) => {
                  return (
                    <CustomToolTip>
                      {formatChartValue(point.data.yFormatted)}
                    </CustomToolTip>
                  );
                }}
                axisLeft={null}
                colors={colors.success}
                lineWidth={1.5}
                pointSize={8}
                pointColor={colors.success}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableGridY={false}
              />
            ) : null}
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestiments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>Evolução no mês</span>
            <DataValue>
              {displayInvestiments ? investimentGrowth : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
