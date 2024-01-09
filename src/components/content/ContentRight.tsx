/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import {
  BoxGroup,
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Pagination,
  SearchBar,
  Table,
  Text,
  Title,
  Modal,
} from '@maxst-designsystem/maxst-design-system';
import {
  ContentRightBoxStyle,
  ContentHeaderStyle,
  TableBoxStyle,
} from './ContentStyle';
import Container from '@components/container';
import { ButtonBox } from '@components/content/ContentStyle';
import {
  PlusLineIcon,
  GridViewFillIcon,
  TableViewFillIcon,
  DocumentLineIcon,
  CheckCircleFillIcon,
  UserLineIcon,
} from '@maxst-designsystem/icons';
import { trackerColumnData, trackerRowData } from '@api/tableData';
import { breadcrumbMenuData } from '@api/menuData';

type tabelColumnDataType = {
  [id: string]: any;
}[];

type tableRowDataType = {
  id: string;
  type: string;
  name: string;
  count: string;
  inOut: string;
  creatType: string;
  progress: string;
  update: string;
  byte: string;
  more: React.JSX.Element;
}[];

function ContentRight() {
  const [rowData, setRowData] = useState<any>();
  const [openModalGroup, setOpenModalGroup] = useState<boolean>(false);
  const [openModalSpace, setOpenModalSpace] = useState<boolean>(false);

  const onClickTableRow = (data: any) => {
    console.log('click table row', data);
  };

  const onCloseModalSpace = () => {
    setOpenModalSpace(false);
  };

  const onCloseModalGroup = () => {
    setOpenModalGroup(false);
  };

  const onButtonClick = (button: string) => {
    if (button === 'space') {
      setOpenModalSpace(true);
    } else if (button === 'group') {
      setOpenModalGroup(true);
    }
  };

  useEffect(() => {
    if (trackerRowData) {
      const rowDataFilter = trackerRowData
        .map((item) => {
          return (
            item.type === 'file' && { ...item, type: <DocumentLineIcon /> }
          );
        })
        .map((item: any) => {
          return (
            item.progress == 'finished' && {
              ...item,
              progress: (
                <div className="progress-box">
                  <span className="icon-finished">
                    <CheckCircleFillIcon />
                  </span>

                  <p className="font-body font-body-m">생성 완료</p>
                </div>
              ),
            }
          );
        });
      setRowData(rowDataFilter);
    }
  }, [trackerRowData]);

  return (
    <ContentRightBoxStyle>
      <Container>
        <ContentHeaderStyle>
          <div className="breadcrumb-box">
            <Breadcrumb
              homeButton={{
                id: 'home',
                onMoveHome: () => console.log('home click'),
              }}
              menuData={breadcrumbMenuData}
              thisPage="vps-tracker"
            />
          </div>
          <Title size="l" role={2} type={'title'}>
            VPS Tracker
          </Title>
          <Text size="l" type="body" role="sub">
            증강현실이 가능한 공간맵을 생성하고 관리할 수 있습니다.
          </Text>
          <SearchBar id="searchBar" placeholder="search" resetButton />
        </ContentHeaderStyle>
        <Divider direction="horizontal" type="default" />
        <TableBoxStyle>
          <BoxGroup>
            <ButtonBox>
              <Checkbox id={'checkbox'} size={'s'}></Checkbox>
              <Button
                type="secondary"
                size="l"
                iconLeft={<PlusLineIcon />}
                onClick={() => onButtonClick('space')}
              >
                공간 생성
              </Button>
              <Button
                type="secondary"
                size="l"
                iconLeft={<PlusLineIcon />}
                onClick={() => onButtonClick('group')}
              >
                그룹 생성
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button
                type="ghost"
                size="l"
                iconOnly={<GridViewFillIcon />}
                isIconMode={true}
              >
                공간 생성
              </Button>
              <Button
                type="ghost"
                size="l"
                iconOnly={<TableViewFillIcon />}
                isIconMode={true}
              >
                그룹 생성
              </Button>
            </ButtonBox>
          </BoxGroup>
          <Table
            columnData={trackerColumnData}
            rowData={rowData ? rowData : []}
            checkMode={true}
            onClick={onClickTableRow}
          />
          <Pagination
            size={'s'}
            totalPage={4}
            showFirstButton
            showLastButton
            showPageSizeChanger
          />
        </TableBoxStyle>
        <Modal
          id="modal-group"
          mainButton={{
            type: 'secondary',
            text: '생성',
            onClick: () => console.log(123),
          }}
          subButton={{
            text: '취소',
            onClick: () => console.log(123),
          }}
          title="그룹 생성"
          open={openModalGroup}
          onClose={onCloseModalGroup}
        >
          <Text size="l">그룹을 생성하시겠습니까?</Text>
        </Modal>
        <Modal
          id="modal-space"
          mainButton={{
            type: 'secondary',
            text: '생성',
            onClick: () => console.log(123),
          }}
          subButton={{
            text: '취소',
            onClick: () => console.log(123),
          }}
          open={openModalSpace}
          onClose={onCloseModalSpace}
          title="공간 생성"
        >
          <Text size="l">공간을 생성하시겠습니까?</Text>
        </Modal>
      </Container>
    </ContentRightBoxStyle>
  );
}

export { ContentRight };
