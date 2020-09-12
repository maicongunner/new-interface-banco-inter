import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

interface DropdownProps {
  icon: React.ReactNode;
  sectionName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ icon, sectionName }) => {
  return (
    <Container revision="transparent">
      <div>{icon}</div>
      {sectionName}
      <FiChevronDown />
    </Container>
  );
};

export default Dropdown;
