import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Alert,
  Modal,
} from '@maxst-designsystem/maxst-design-system';
import { PlusLineIcon, WarningLineIcon } from '@maxst-designsystem/icons';
import { useRouter } from 'next/router';

function ButtonGroups() {
  const router = useRouter();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);

  const onClickRouter = (page: string) => {
    if (page) {
      router.push(page);
    }
  };

  const onOpen = (type: string) => {
    if (type === 'snackbar') {
      setIsOpenSnackbar(true);
    }
  };

  const onClose = (type: string) => {
    if (type === 'snackbar') {
      setIsOpenSnackbar(false);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button
          isActionMode
          size="xl"
          type="primary"
          onClick={() => onClickRouter('/forms')}
        >
          forms page로 이동
        </Button>
        <Button size="l" type="secondary">
          Button
        </Button>
        <Button size="m" type="tertiary" iconRight={<PlusLineIcon />}>
          Button
        </Button>
        <Button size="m" type="text" iconRight={<WarningLineIcon />}>
          Button
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button type="error" size="l" onClick={() => onOpen('snackbar')}>
          open Alert
        </Button>
        <Alert
          type="error"
          title="title"
          contents="text"
          closeButton={true}
          open={isOpenSnackbar}
          onClose={() => onClose('snackbar')}
          actionButtonData={{
            label: 'undo',
            onClickAction: () => console.log('action'),
          }}
        />
      </ButtonGroup>
    </>
  );
}

export default ButtonGroups;
