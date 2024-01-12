import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HeaderSidebarStyle } from './SiderStyle';

interface sidebarType {
  selectedId?: string;
}

const sidebarData = [
  {
    id: 'dashboard',
    label: 'Dashboard',
  },

  {
    id: 'vps-tracker',
    label: 'VPS Tracker',
  },

  {
    id: 'forms',
    label: 'Form',
  },
];

function MobileSidebar({ selectedId }: sidebarType) {
  const router = useRouter();
  const [thisPage, setThisPage] = useState<string>('/');
  const onClickSidebar = (data: any) => {
    console.log(data);
    // if (data.id === 'vps-tracker') {
    //   router.push('/');
    // } else {
    //   router.push(`/${data.id}`);
    // }
    router.push(`/${data.id}`);
  };

  // useEffect(() => {
  //   selectedId && console.log('selectedId', selectedId);
  //   selectedId && setThisPage(selectedId);
  // }, [selectedId]);

  useEffect(() => {
    const thisRouter = window.location.pathname.split('/');
    const thisLocation = thisRouter[thisRouter.length - 1];
    console.log('thisLocation', thisLocation);
    // if (thisLocation === '') {
    //   setThisPage('vps-tracker');
    // } else {
    //   setThisPage(thisLocation);
    // }
    setThisPage(thisLocation);
  }, [router]);

  return (
    <HeaderSidebarStyle
      id="sidebar-mobile"
      itemData={sidebarData}
      // selectedId={thisPage}
      onClick={onClickSidebar}
    />
  );
}

export default MobileSidebar;

const mobileSidebarMenuData = [
  {
    id: 'depth-01default',
    label: 'depth-01default',
    subItemData: [
      {
        id: 'depth-01-01default',
        label: 'depth-01-01default',
      },
      {
        id: 'depth-01-02default',
        label: 'depth-01-02default',
      },
    ],
  },
  {
    id: 'depth-02default',
    label: 'depth-02default',
    subItemData: [
      {
        id: 'depth-02-01default',
        label: 'depth 02-01default',
        subItemData: [
          {
            id: 'depth-02-01-01default',
            label: 'depth 02-01-01default',
          },
          {
            id: 'depth-02-01-02default',
            label: 'depth 02-01-02default',
          },
        ],
      },
      {
        id: 'depth-02-02default',
        label: 'depth 02-02default',
      },
    ],
  },
  {
    id: 'depth-03default',
    label: 'depth-03default',
  },
  {
    id: 'depth-04default',
    label: 'depth-04default',
  },
  {
    id: 'depth-05default',
    label: 'depth-05default',
  },
  {
    id: 'depth-06default',
    label: 'depth-06default',
  },
];
