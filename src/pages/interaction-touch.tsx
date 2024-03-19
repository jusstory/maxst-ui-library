import React from 'react';
import CheckboxTouch from '@components/interaction/touch/CheckboxTouch';
import ButtonArea from '@components/interaction/Buttons';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { RippleButton } from '@components/button';
import SlideButton from '@components/button/SlideButton';
import LottieLoadingSample01 from '@components/testFile/LottieLoadingSample01';

function InteractionButtons() {
  return (
    <MyContainer>
      <Sidebar selectedId="interaction-touch" />
      <div style={{ width: '100%' }}>
        <CheckboxTouch />
        <br />
        <br />
        <ButtonArea />
        <br /> <br />
        <SlideButton />
        <br />
        <br />
        <LottieLoadingSample01 />
      </div>
    </MyContainer>
  );
}

export default InteractionButtons;
