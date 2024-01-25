import React from 'react';
import { LottieSampleBox } from '@layout/container/ContainerStyle';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

function LottieLoadingSample01() {
  return (
    <LottieSampleBox>
      <Player
        autoplay
        loop
        src="/images/lottie/lottie_flow.json"
        style={{ height: '100px', width: '100px' }}
      >
        <Controls
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </LottieSampleBox>
  );
}

export default LottieLoadingSample01;
