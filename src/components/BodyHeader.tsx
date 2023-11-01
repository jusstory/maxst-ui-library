import React from 'react';
import {
  Breadcrumb,
  Title,
  Text,
} from '@maxst-designsystem/maxst-design-system';
import {
  UserLineIcon,
  SortLineBoldIcon,
  SortLineIcon,
  SortLineLightIcon,
  ArrowForwardLineBoldIcon,
  ArrowForwardLineIcon,
  ArrowForwardLineLightIcon,
} from '@maxst-designsystem/icons';

function BodyHeader() {
  return (
    <div>
      <SortLineBoldIcon />
      <SortLineIcon />
      <SortLineLightIcon />
      <ArrowForwardLineBoldIcon />
      <ArrowForwardLineIcon />
      <ArrowForwardLineLightIcon />
      <Title type="title" size="xl" role={1}>
        Maxst design system Test
      </Title>
      <Title role={3} type="title" size="m">
        {'새로운 Space를 먼저 생성해 주세요.'}
      </Title>
      <Title role={3} type="title" size="xs" className="">
        123
      </Title>
      <Title type="title" size="l" role={2}>
        Maxst design system Test
      </Title>
      <Text type="body" size="l">
        맥스트 디자인 시스템 <b>v0.5.0</b> 컴포넌트 테스트
      </Text>
      <div className="breadcrumb-box">
        <Breadcrumb
          menuData={[
            {
              id: 'breadcrumb-01',
              label: 'breadcrumb-01',
              onMovePage: () => console.log('move  page'),
              onMoveSubPage: () => console.log('move sub page'),
              subMenu: [
                {
                  id: 'breadcrumb-01-01',
                  label: 'breadcrumb-01-01',
                },
                {
                  id: 'breadcrumb-01-02',
                  label: 'breadcrumb-01-02',
                },
              ],
            },
            {
              icon: <UserLineIcon />,
              id: 'breadcrumb-02',
              label: 'breadcrumb-02',
            },
            {
              disabled: true,
              id: 'breadcrumb-03',
              label: 'breadcrumb-03',
            },
            {
              id: 'breadcrumb-04',
              label: 'breadcrumb-04',
            },
          ]}
          thisPage="breadcrumb-04"
        />
      </div>
    </div>
  );
}

export default BodyHeader;
