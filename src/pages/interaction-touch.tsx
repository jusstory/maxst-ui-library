import React from 'react';
import CheckboxInteraction from '@components/interaction/touch/CheckboxInteraction';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';

function InteractionButtons() {
  return (
    <MyContainer>
      <Sidebar selectedId="interaction-buttons" />
      <CheckboxInteraction />
    </MyContainer>
  );
}

export default InteractionButtons;
