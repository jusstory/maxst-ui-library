import React from 'react';
import { Button, ButtonGroup } from '@maxst-designsystem/maxst-design-system';
import { PlusLineIcon, WarningLineIcon } from '@maxst-designsystem/icons';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';

function Buttons() {
  return (
    <>
      <MyContainer>
        <Sidebar selectedId="interaction-touch" />
        <ButtonGroup>
          <Button isActionMode size="xl" type="primary">
            11111
          </Button>
          <Button size="l" type="secondary">
            2222
          </Button>
          <Button size="m" type="tertiary" iconRight={<PlusLineIcon />}>
            3333
          </Button>
          <Button size="m" type="text" iconRight={<WarningLineIcon />}>
            4444
          </Button>
        </ButtonGroup>
      </MyContainer>
    </>
  );
}

export default Buttons;
