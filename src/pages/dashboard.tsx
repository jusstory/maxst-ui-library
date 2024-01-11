import React from 'react';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { RippleButton } from '@components/button';
import { Title } from '@maxst-designsystem/maxst-design-system';
import { Box } from '@layout/main/MainStyle';

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
      </Box>
    </MyContainer>
  );
}

export default dashboard;
