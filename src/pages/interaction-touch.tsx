import React from 'react';
import CheckboxTouch from '@components/interaction/touch/CheckboxTouch';
import ButtonArea from '@components/interaction/Buttons';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { Container } from '@maxst-designsystem/maxst-design-system';

function InteractionButtons() {
  return (
    <MyContainer>
      <Sidebar selectedId="interaction-touch" />
      <div style={{ width: '100%' }}>
        <CheckboxTouch />
        <br />
        <br />
        <ButtonArea />
      </div>
    </MyContainer>
  );
}

export default InteractionButtons;
