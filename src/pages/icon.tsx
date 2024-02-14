import React from 'react';
import IconArea from '@/components/IconArea';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { Box } from '@layout/main/MainStyle';
function forms() {
  return (
    <MyContainer>
      <Sidebar selectedId="icon" />
      {/* <Box>weqwe</Box> */}
      {/* <ButtonGroups /> */}
      <Box className="dashboard-contents">
        <IconArea />
      </Box>
    </MyContainer>
  );
}

export default forms;
