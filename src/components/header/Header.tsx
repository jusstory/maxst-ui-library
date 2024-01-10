import React, { useState } from 'react';
import { HeaderStyles } from './HeaderStyle';
import Container from '@components/container';
import {
  Button,
  Drawer,
  Sidebar,
} from '@maxst-designsystem/maxst-design-system';
import {
  GridViewLineIcon,
  NotificationOffLineIcon,
  LanguageLineIcon,
  MenuLineIcon,
} from '@maxst-designsystem/icons';
import MobileSidebar from '@components/sidebar/MobileSidebar';

function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const onOpenMobileDrawer = () => {
    setMobileDrawerOpen(true);
  };
  const onCloseMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  const RightBox = () => {
    return (
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
    );
  };
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

        <Button
          className="mobile__menu-button"
          type="tertiary"
          size="l"
          iconOnly={<MenuLineIcon />}
          isIconMode
          onClick={onOpenMobileDrawer}
        />
        <Drawer
          open={mobileDrawerOpen}
          onClose={onCloseMobileDrawer}
          width="400px"
          footer={<RightBox />}
        >
          <MobileSidebar />
        </Drawer>
      </Container>
    </HeaderStyles>
  );
}

export default Header;
