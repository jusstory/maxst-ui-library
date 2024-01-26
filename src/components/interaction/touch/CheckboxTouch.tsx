import React, { useState } from 'react';
import { Container, Checkbox } from '@maxst-designsystem/maxst-design-system';
import { CheckboxTouchBox } from './CheckboxTouchStyle';

function CheckboxTouch() {
  const [className, setClassName] = useState<string>('');
  const onClickCheckbox = (e: any) => {
    console.log('check click', e.parentNode);

    const thisCheck = e.parentNode.parentNode;
    thisCheck.classList.add('on');
    setClassName('on');

    setTimeout(() => {
      thisCheck.classList.remove('on');
    }, 700);
  };

  return (
    <Container>
      <CheckboxTouchBox>
        <Checkbox
          id="checkbox-1"
          label="touch area test"
          size="l"
          type="selected"
          onClick={onClickCheckbox}
        />
      </CheckboxTouchBox>
    </Container>
  );
}

export default CheckboxTouch;
