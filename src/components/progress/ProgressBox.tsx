import {
  CircularProgress,
  LinearProgress,
  BoxGroup,
} from '@maxst-designsystem/maxst-design-system';
import React, { useEffect, useState } from 'react';

function ProgressBox() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <BoxGroup align="center" direction="vertical" gap={10}>
      <LinearProgress isShowPercent size="l" type="secondary" />
      <LinearProgress
        isShowPercent
        label="progress"
        percent={progress}
        size="l"
        type="primary"
      />
      <LinearProgress
        isShowPercent
        label="progress"
        percent={80}
        size="l"
        type="secondary"
      />
      <LinearProgress
        isShowPercent
        label="progress"
        percent={100}
        size="l"
        status="success"
      />
      <LinearProgress
        isShowPercent
        label="progress"
        percent={30}
        size="l"
        status="error"
      />
      <BoxGroup align="center" gap={10}>
        <CircularProgress size="l" percent={progress} />
        <CircularProgress size="m" />
        <CircularProgress size="s" />
      </BoxGroup>
      <BoxGroup align="center" gap={10}>
        <CircularProgress isShowPercent percent={90} size="l" type="primary" />
        <CircularProgress
          isShowPercent
          percent={60}
          size="l"
          type="secondary"
        />
        <CircularProgress
          isShowPercent
          percent={100}
          size="l"
          status="success"
        />
        <CircularProgress isShowPercent percent={70} size="l" status="error" />
        <CircularProgress isShowIcon percent={100} size="l" status="success" />
        <CircularProgress isShowIcon percent={100} size="l" status="error" />
      </BoxGroup>
    </BoxGroup>
  );
}

export default ProgressBox;
