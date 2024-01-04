import React from 'react';
import {
  Breadcrumb,
  Title,
  Text,
  Container,
} from '@maxst-designsystem/maxst-design-system';
import { Box } from '@/layout/main/MainStyle';

function BodyHeader() {
  return (
    <Container>
      <Box>
        <Title type="title" size="xl" role={1}>
          Maxst design system Test
        </Title>
        <Title type="title" size="l" role={2}>
          Maxst design system Test
        </Title>
        <Text type="body" size="l">
          맥스트 디자인 시스템 <b>v1.0.1</b> 컴포넌트 테스트
        </Text>
        <br />
      </Box>
    </Container>
  );
}

export default BodyHeader;
