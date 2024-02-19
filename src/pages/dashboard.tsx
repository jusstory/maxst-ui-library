import React from 'react';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { RippleButton } from '@components/button';
import { Title } from '@maxst-designsystem/maxst-design-system';
import { Box } from '@layout/main/MainStyle';
import SlideButton from '@components/button/SlideButton';
import LottieLoadingSample01 from '@components/testFile/LottieLoadingSample01';

function dashboard() {
  return (
    <MyContainer>
      <Sidebar selectedId="dashboard" />
      {/* <Box>weqwe</Box> */}
      {/* <ButtonGroups /> */}
      <p>interaction test</p>
      <Box className="dashboard-contents">
        <Title size="l" role={2}>
          interaction test
        </Title>
        <RippleButton />
        <br />
        <SlideButton />
        <br />
        <br />
        <button>button</button>
        <br />
        <br />
        <LottieLoadingSample01 />
      </Box>
    </MyContainer>
  );
}

export default dashboard;
