import React from 'react';

import { Container } from './styles';

interface DropdownProps {
  icon: React.ReactNode;
  sectionName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ icon, sectionName }) => {
  return (
    <Container>
      <div>{icon}</div>
      {sectionName}
      <div>Arrow</div>
    </Container>
  );
};

export default Dropdown;
