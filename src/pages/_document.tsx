import { Html, Head, Main, NextScript } from 'next/document';
import BodyHeader from '@/components/BodyHeader';
import { Container } from '@maxst-designsystem/maxst-design-system';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container>
          <BodyHeader />
          <Main />
        </Container>
        <NextScript />
      </body>
    </Html>
  );
}
