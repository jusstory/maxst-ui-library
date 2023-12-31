import React, { useState } from 'react';
import {
  Button,
  Container,
  Dropdown,
  Table,
  Title,
  PositionModal,
  Modal,
  Pagination,
} from '@maxst-designsystem/maxst-design-system';
import {
  MoreVerticalLineIcon,
  CheckLineIcon,
  DesktopLineIcon,
  MobileLineIcon,
} from '@maxst-designsystem/icons';

function tables() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModal2, setIsOpenModal2] = useState<boolean>(false);

  const moreMenuData = [
    {
      id: 'label-0',
      label: 'label 0',
      iconLeft: <CheckLineIcon />,
    },
    {
      id: 'label-1',
      label: 'label 1',
      iconLeft: <DesktopLineIcon />,
    },
    {
      id: 'label-2',
      label: 'label 2',
      iconLeft: <MobileLineIcon />,
    },
  ];

  const dropdownClick = (menu: any) => {
    console.log(menu);
    if (menu.id === 'label-0') {
      setIsOpenModal(true);
    } else if (menu.id === 'label-1') {
      setIsOpenModal2(true);
    }
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
    setIsOpenModal2(false);
  };

  const MoreComponent = () => {
    return (
      <Dropdown
        menuData={moreMenuData}
        align="right"
        id="dropdown-icon-button"
        onClick={dropdownClick}
      >
        <Button
          type="ghost"
          size="s"
          iconOnly={<MoreVerticalLineIcon />}
          isIconMode={true}
        >
          more
        </Button>
      </Dropdown>
    );
  };
  const columns = [
    {
      id: 'column-01',
      title: 'Header Menu 01',
    },
    {
      id: 'column-02',
      title: 'Header Menu 02',
    },
    {
      id: 'column-03',
      title: 'Header Menu 03',
    },
    {
      id: 'column-04',
      title: 'Header Menu 04',
    },
    {
      cellWidth: '60px',
      id: 'more',
      title: ' ',
    },
  ];

  const rows = [
    {
      'column-01': 'List item text 1-1',
      'column-02': 'List item text 1-2',
      'column-03': 'List item text 1-3',
      'column-04': 'List item text 1-4',
      id: '1',
      more: <MoreComponent />,
    },
    {
      'column-01': 'List item text 2-1',
      'column-02': 'List item text 2-2',
      'column-03': 'List item text 2-3',
      'column-04': 'List item text 2-4',
      id: '2',
      more: <MoreComponent />,
    },
    {
      'column-01': 'List item text 3-1',
      'column-02': 'List item text 3-2',
      'column-03': 'List item text 3-3',
      'column-04': 'List item text 3-4',
      id: '3',
      more: <MoreComponent />,
    },
    {
      'column-01': 'List item text 4-1',
      'column-02': 'List item text 4-2',
      'column-03': 'List item text 4-3',
      'column-04': 'List item text 4-4',
      id: '4',
      more: <MoreComponent />,
    },
  ];
  return (
    <Container>
      <Title role={2} type={'title'} size={'s'}>
        Tables
      </Title>
      <br />
      <Table columnData={columns} rowData={rows} checkMode={true} />
      <Pagination
        onClick={() => {}}
        onshowPageSizeChange={() => {}}
        size="l"
        totalPage={9}
      />
      <PositionModal
        title="title"
        mainButton={{
          type: 'primary',
          text: 'ok',
          onClick: () => console.log('main button'),
        }}
        open={isOpenModal}
        onClose={onCloseModal}
        position={{
          top: '30%',
          right: '20%',
        }}
        isArrow={true}
        smallButtonMode={true}
      >
        position modal{' '}
      </PositionModal>
      <Modal
        title="title"
        mainButton={{
          type: 'primary',
          text: 'ok',
          onClick: () => console.log('main button'),
        }}
        open={isOpenModal2}
        onClose={onCloseModal}
      >
        modal
      </Modal>
    </Container>
  );
}

export default tables;
