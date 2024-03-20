import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  InputGroup,
  TextField,
  Checkbox,
  CheckboxGroup,
  Modal,
  Divider,
  Dropdown,
  Title,
  AutoComplete,
} from '@maxst-designsystem/maxst-design-system';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';
import { MyContainer, MyForm } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';
import { phonData } from '@api/menuData';

type formDataType = {
  id: string | null;
  password: string | null;
  isSavePassword: boolean;
};

function FormArea() {
  const [formData, setFormData] = useState<formDataType>({
    id: null,
    password: null,
    isSavePassword: false,
  });
  const [idError, setIdError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [labelValue, setLabelValue] = useState<string>('');
  const [idValue, setIdValue] = useState<string>('');

  const onChangeId = (value: any) => {
    setFormData({ ...formData, id: value });
  };

  const onChangePassword = (value: any) => {
    setFormData({ ...formData, password: value });
  };

  const onOpen = (type: string) => {
    if (type === 'modal') {
      setIsOpenModal(true);
    }
  };

  const onClose = (type: string) => {
    if (type === 'modal') {
      setIsOpenModal(false);
    }
  };

  const onClickCheckbox = (v: any) => {
    console.log('checkbox click', v);
  };

  const onChangeCheckbox = (v: any) => {
    console.log('checkbox change', v);
  };

  const onClickMenu = (data: any) => {
    console.log('click data', data);
    setIdValue(data.id);
    setLabelValue(data.label);
  };

  const onChangeMenu = (data: any) => {
    // console.log('change data', data);
  };

  const onSubmit = () => {
    console.log('onSubmit', formData);
    setIdError(!formData.id ? true : false);
    setPasswordError(!formData.password ? true : false);
  };

  return (
    <MyContainer>
      {/* <Sidebar selectedId="forms" /> */}
      <MyForm id="form-login">
        <Title role={2} type={'title'} size={'s'}>
          Form
        </Title>
        <InputGroup
          fullWidth={true}
          label="Id"
          helperText="helper text"
          required={true}
          state={idError ? 'error' : 'default'}
        >
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            resetButton={true}
            onChange={onChangeId}
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="Password"
          helperText="helper text"
          required={true}
          state={passwordError ? 'error' : 'default'}
        >
          <TextField
            id="default-textfield-02"
            placeholder="placeholder"
            password
            onChange={onChangePassword}
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="소속"
          helperText="helper text"
          state={passwordError ? 'error' : 'default'}
        >
          <AutoComplete
            className="auto-complete__searchbar"
            id="auto-complete_searchbar"
            menuData={autoCompleteData}
          >
            <TextField
              id="default-textfield-04"
              placeholder="placeholder"
              onChange={onChangePassword}
            />
          </AutoComplete>
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="phone"
          helperText="helper text"
          required={true}
        >
          <Dropdown
            menuData={phonData}
            onChange={onChangeMenu}
            onClick={onClickMenu}
            id="phone-01"
            className="dropdown__phon-num"
          >
            <TextField
              id={idValue}
              value={labelValue}
              required={true}
              placeholder="placeholder"
              iconRight={<ArrowDownLineIcon />}
              readOnly
            />
          </Dropdown>
          <TextField
            id="phone-02"
            placeholder="placeholder"
            onChange={onChangePassword}
            type="number"
          />
          <TextField
            id="phone-03"
            placeholder="placeholder"
            onChange={onChangePassword}
            type="number"
          />
        </InputGroup>
        <Checkbox id="login-checkbox" size="l" label="Save Password" />
        <CheckboxGroup
          controlMode
          id="checkbox-all"
          label="전체선택"
          onChange={onChangeCheckbox}
          onClick={onClickCheckbox}
          options={[
            {
              checked: true,
              id: 'checkbox_01',
              label: 'label 01',
              size: 'l',
            },
            {
              checked: false,
              id: 'checkbox_02',
              label: 'label 02',
              size: 'l',
            },
            {
              checked: true,
              id: 'checkbox_03',
              label: 'label 03',
              size: 'l',
            },
            {
              checked: false,
              id: 'checkbox_04',
              label: 'label 04',
              size: 'l',
            },
          ]}
          size="l"
          type="selected"
        />
        <InputGroup
          fullWidth={true}
          label="default-textfield-02"
          required={true}
        >
          <TextField
            id="default-textfield-02"
            helperText="helper text"
            placeholder="placeholder"
            multiLine={true}
            minLength={2}
            maxLength={22}
          />
        </InputGroup>
        <br />
        <Divider direction="horizontal" type="default" />
        <ButtonGroup align="right" buttonWidth="180px">
          <Button type="ghost" size="xl">
            Button
          </Button>
          <Button
            type="primary"
            size="xl"
            isActionMode={true}
            onClick={() => onOpen('modal')}
          >
            Button
          </Button>
        </ButtonGroup>
        <Modal
          title="Modal"
          open={isOpenModal}
          onClose={() => onClose('modal')}
          isCloseButton={true}
          mainButton={{ type: 'primary', text: '확인', onClick: onSubmit }}
          subButton={{ text: '취소', onClick: () => onClose('modal') }}
          subtlestButton={{
            text: '',
            onClick: function (): void {
              throw new Error('Function not implemented.');
            },
          }}
        >
          Modal 입니다.
        </Modal>
      </MyForm>
    </MyContainer>
  );
}

const autoCompleteData = [
  {
    disabled: false,
    id: 'menu-0',
    label: 'menu 0',
    subLabel: 'more',
  },
  {
    disabled: false,
    id: 'menu-00',
    label: 'menu 00',
    subLabel: 'more',
  },
  {
    id: 'menu-1',
    label: 'menu 1',
  },
  {
    disabled: false,
    id: 'menu-2',
    label: 'menu 2',
  },
  {
    disabled: false,
    id: 'menu-3',
    label: 'menu 3',
    subLabel: 'more',
  },
  {
    disabled: false,
    id: 'menu-4',
    label: 'menu 4',
  },
  {
    disabled: true,
    id: 'menu-5',
    label: 'menu 5',
  },
  {
    id: 'menu-6',
    label: 'menu 6',
  },
  {
    id: 'menu-7',
    label: 'menu 7',
  },
];
// const FormBox = styled.div`
//   width: 500px;
// `;

export default FormArea;
