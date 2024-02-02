import React, { useEffect, useState } from 'react';
import { LottieSampleBox } from '@layout/container/ContainerStyle';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

function LottieLoadingSample01() {
  const [thisLottie, setThisLottie] = useState<any>(null);

  const onClickLottie = (state: any) => {
    console.log(state);
    if (thisLottie) {
      console.log(thisLottie.current);
      // thisLottie.current.pause();
    }
  };

  useEffect(() => {}, [thisLottie]);

  return (
    <LottieSampleBox>
      <Player
        autoplay
        // lottieRef={(instance) => setThisLottie(instance)}
        loop
        src="/images/lottie/lottie_flow.json"
        style={{ height: '100px', width: '100px' }}
      >
        {/* <Controls
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug']}
        /> */}
      </Player>
      <br />
      <br />
      <br />
      <Player
        ref={thisLottie}
        lottieRef={(instance) => setThisLottie(instance)}
        // loop
        hover
        // autoplay
        src="/images/lottie/lottie_hamster.json"
        style={{ height: '200px', width: '200px' }}
        className="hamster"
        onEvent={onClickLottie}
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
