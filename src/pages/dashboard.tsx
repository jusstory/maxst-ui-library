import React from 'react';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { Title } from '@maxst-designsystem/maxst-design-system';
import { Box } from '@layout/main/MainStyle';
import ProgressBox from '@components/progress/ProgressBox';

function dashboard() {
  return (
    <MyContainer>
      <Sidebar selectedId="dashboard" />
      <Box className="dashboard-contents">
        <Title size="l" role={2}>
          component test
        </Title>
        <ProgressBox />
      </Box>
    </MyContainer>
  );
}

export default dashboard;
