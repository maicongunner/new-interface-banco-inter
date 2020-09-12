import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

import { sidebarNavigation } from '../../../resources';
import Dropdown from './Dropdown';
import AccountBalance from './AccountBalance';
import HelpDesk from './HelpDesk';

import { Container, AmountInvested, Wrapper } from './styles';
import { DEFAULT_TRANSITION } from '../../../constants';

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transtion: { delay: 0.5, ...DEFAULT_TRANSITION },
  },
};

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <Container variants={animation}>
        <AccountBalance />
        <AmountInvested>
          Ver total investido <FiBarChart2 size="1.6rem" />
        </AmountInvested>
        {Object.entries(sidebarNavigation).map(([key, value]) => (
          <Dropdown key={key} icon={value.icon} sectionName={key} />
        ))}
      </Container>
      <HelpDesk />
    </Wrapper>
  );
};

export default Sidebar;
