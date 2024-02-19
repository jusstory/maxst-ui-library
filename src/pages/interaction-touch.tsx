import React from 'react';
import CheckboxTouch from '@components/interaction/touch/CheckboxTouch';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';

function InteractionButtons() {
  return (
    <MyContainer>
      <Sidebar selectedId="interaction-touch" />
      <CheckboxTouch />
    </MyContainer>
  );
}

export default InteractionButtons;
