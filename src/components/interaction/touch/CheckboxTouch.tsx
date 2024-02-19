import React, { useState } from 'react';
import {
  Container,
  Checkbox,
  Radio,
  RadioGroup,
} from '@maxst-designsystem/maxst-design-system';
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

  const radioOption = [
    {
      id: 'radio_01',
      label: 'label 01',
      name: 'radio',
      size: 'l',
    },
    {
      id: 'radio_02',
      label: 'label 02',
      name: 'radio',
      size: 'l',
    },
    {
      id: 'radio_03',
      label: 'label 03',
      name: 'radio',
      size: 'l',
    },
    {
      id: 'radio_04',
      label: 'label 04',
      name: 'radio',
      size: 'l',
    },
  ];

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
        <br />
        <br />
        <RadioGroup
          id={'radio-touch'}
          name={'radio'}
          size={'l'}
          options={radioOption}
          onClick={onClickCheckbox}
        ></RadioGroup>
      </CheckboxTouchBox>
    </Container>
  );
}

export default CheckboxTouch;
