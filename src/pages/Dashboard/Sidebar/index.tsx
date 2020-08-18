import React from 'react';

import navigation from './navigation';
import Dropdown from './Dropdown';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      {Object.entries(navigation).map(([key, value]) => (
        <Dropdown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default Sidebar;
