import React from 'react';
import {
  Breadcrumb,
  Title,
  Text,
  Container,
} from '@maxst-designsystem/maxst-design-system';
import { UserLineIcon } from '@maxst-designsystem/icons';

function BodyHeader() {
  return (
    <Container>
      <Title type="title" size="xl" role={1}>
        Maxst design system Test
      </Title>
      <Title type="title" size="l" role={2}>
        Maxst design system Test
      </Title>
      <Text type="body" size="l">
        맥스트 디자인 시스템 <b>v0.5</b> 컴포넌트 테스트
      </Text>
      <div className="breadcrumb-box">
        <Breadcrumb
          homeButton={{
            id: 'home',
            onMoveHome: () => console.log('home click'),
          }}
          menuData={[
            {
              id: 'breadcrumb-01',
              label: 'breadcrumb-01',
              onMovePage: () => console.log('/breadcrumb-01'),
              onMoveSubPage: (data) => console.log(data),
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
              id: 'breadcrumb-02',
              label: 'breadcrumb-02',
              icon: <UserLineIcon />,
              onMovePage: () => console.log('/breadcrumb-02'),
            },
            {
              id: 'breadcrumb-03',
              label: 'breadcrumb-03',
              disabled: true,
              onMovePage: () => console.log('/breadcrumb-03'),
            },
            {
              id: 'breadcrumb-04',
              label: 'breadcrumb-04',
            },
          ]}
          thisPage="breadcrumb-04"
        />
      </div>
      <br />
    </Container>
  );
}

export default BodyHeader;
