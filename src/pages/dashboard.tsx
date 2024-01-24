import React from 'react';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { RippleButton } from '@components/button';
import { Title } from '@maxst-designsystem/maxst-design-system';
import { Box } from '@layout/main/MainStyle';
import SlideButton from '@components/button/SlideButton';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

function dashboard() {
  return (
    <MyContainer>
      <Sidebar selectedId="dashboard" />
      {/* <Box>weqwe</Box> */}
      {/* <ButtonGroups /> */}
      <Box className="dashboard-contents">
        <Title size="l" role={2}>
          interaction test
        </Title>
        <RippleButton />
        <br />
        <SlideButton />
        <Player
          autoplay
          loop
          src="/images/lottie/lottie_flow.json"
          style={{ height: '300px', width: '300px' }}
        >
          {/* <Controls
            visible={true}
            buttons={['play', 'repeat', 'frame', 'debug']}
          /> */}
        </Player>
      </Box>
    </MyContainer>
  );
}

export default dashboard;
