import React from 'react';
import { Checkbox, Container } from '@maxst-designsystem/maxst-design-system';

function CheckboxInteraction() {
  return (
    <Container>
      <Checkbox
        checked
        id="checkbox-1"
        label="touch area test"
        size="l"
        type="selected"
      />
    </Container>
  );
}

export default CheckboxInteraction;
