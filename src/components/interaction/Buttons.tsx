import React from 'react';
import { Button, ButtonGroup } from '@maxst-designsystem/maxst-design-system';
import { PlusLineIcon, WarningLineIcon } from '@maxst-designsystem/icons';
import { RippleButton } from '@components/button';
import { Container } from '@maxst-designsystem/maxst-design-system';

function Buttons() {
  return (
    <Container>
      <RippleButton />
      <br />
      <ButtonGroup>
        <Button isActionMode size="xl" type="primary">
          11111
        </Button>
        <Button size="xl" type="primary" iconLeft={<WarningLineIcon />}>
          새로운 공간
        </Button>
        <Button size="xl" type="tertiary" iconRight={<PlusLineIcon />}>
          새로운 공간
        </Button>
        <Button size="xl" type="text" iconRight={<WarningLineIcon />}>
          4444
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default Buttons;
