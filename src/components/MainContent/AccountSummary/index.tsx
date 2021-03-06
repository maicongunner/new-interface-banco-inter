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
import { DEFAULT_TRANSITION } from '../../../constants';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -25, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

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
    <Container variants={containerAnimation}>
      <Card
        key="extract"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            revision="transparent"
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
                    <CustomToolTip
                      rightArrow={chart.index >= 3}
                      leftArrow={chart.index < 3}
                    >
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

      <Card
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
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

      <Card
        key="investiments"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <img src={PlataformaPaiLogo} alt="Plataforma pai logo" />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            revision="transparent"
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
                margin={{ top: 8, right: 8, bottom: 24, left: 12 }}
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
