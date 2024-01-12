import { ContentRight } from '@components/content';
import { MyContainer } from '@layout/container/ContainerStyle';
import Sidebar from '@components/sidebar';

export default function Home() {
  return (
    <>
      <MyContainer>
        <Sidebar selectedId="vps-tracker" />
        <ContentRight />
      </MyContainer>
    </>
  );
}
