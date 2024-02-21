import React from 'react';
import CheckboxTouch from '@components/interaction/touch/CheckboxTouch';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { RippleButton } from '@components/button';

function InteractionButtons() {
  return (
    <MyContainer>
      <Sidebar selectedId="interaction-touch" />
      <div>
        <CheckboxTouch />
        <br />
        <br />
        <RippleButton />
      </div>
    </MyContainer>
  );
}

export default InteractionButtons;
