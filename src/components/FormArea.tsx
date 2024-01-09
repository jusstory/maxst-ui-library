import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  TextField,
  Checkbox,
  CheckboxGroup,
  Modal,
  Divider,
  Dropdown,
  Title,
} from '@maxst-designsystem/maxst-design-system';
import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';
import { MyContainer, MyForm } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';

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
  };

  const onChangeMenu = (data: any) => {
    console.log('change data', data);
  };

  const onSubmit = () => {
    console.log('onSubmit', formData);
    setIdError(!formData.id ? true : false);
    setPasswordError(!formData.password ? true : false);
  };

  return (
    <MyContainer>
      <Sidebar selectedId="vps-tracker" />
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
            id="default-textfield-03"
            placeholder="placeholder"
            password={true}
            onChange={onChangePassword}
          />
        </InputGroup>
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
            id="default-textfield-03"
            placeholder="placeholder"
            password={true}
            onChange={onChangePassword}
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="phone"
          helperText="helper text"
          required={true}
        >
          <Dropdown
            menuData={menuData}
            onChange={onChangeMenu}
            onClick={onClickMenu}
            id="phone-01"
            className="dropdown-example"
          >
            <TextField
              id=""
              required={true}
              placeholder="placeholder"
              iconRight={<ArrowDownLineIcon />}
            />
          </Dropdown>
          <TextField
            id="phone-02"
            placeholder="placeholder"
            password={true}
            onChange={onChangePassword}
          />
          <TextField
            id="phone-03"
            placeholder="placeholder"
            password={true}
            onChange={onChangePassword}
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

const menuData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: true,
    // subLabel: 'more',
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <CheckLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    // subLabel: 'more',
  },
];
// const FormBox = styled.div`
//   width: 500px;
// `;

export default FormArea;
