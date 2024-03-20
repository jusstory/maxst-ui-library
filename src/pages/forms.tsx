import React from 'react';
import FormArea from '@/components/FormArea';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { Box } from '@layout/main/MainStyle';
function forms() {
  return (
    <MyContainer>
      <Sidebar selectedId="forms" />
      <Box className="dashboard-contents">
        <FormArea />
      </Box>
    </MyContainer>
  );
}

export default forms;
