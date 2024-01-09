import React from 'react';
import { HeaderStyles } from './HeaderStyle';
import Container from '@components/container';
import { Button } from '@maxst-designsystem/maxst-design-system';
import {
  GridViewLineIcon,
  NotificationOffLineIcon,
  LanguageLineIcon,
} from '@maxst-designsystem/icons';

function Header() {
  return (
    <HeaderStyles>
      <Container>
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <nav className="nav">
          <Button type="ghost" size="l">
            Link1
          </Button>
          <Button type="ghost" size="l">
            Link2
          </Button>
          <Button type="ghost" size="l">
            Link3
          </Button>
          <Button type="ghost" size="l">
            Link4
          </Button>
        </nav>
        <div className="right-box">
          <Button
            type="ghost"
            size="l"
            iconOnly={<GridViewLineIcon />}
            isIconMode={true}
          />

          <Button
            type="ghost"
            size="l"
            iconOnly={<NotificationOffLineIcon />}
            isIconMode={true}
          />
          <Button
            type="ghost"
            size="l"
            iconOnly={<LanguageLineIcon />}
            isIconMode={true}
          />
          <Button type="ghost" size="l">
            로그인
          </Button>
        </div>
      </Container>
    </HeaderStyles>
  );
}

export default Header;
