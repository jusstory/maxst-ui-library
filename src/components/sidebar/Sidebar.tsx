import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SidebarStyle } from './SiderStyle';

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
  {
    id: 'interaction-touch',
    label: 'interaction-touch',
  },
  {
    id: 'icon',
    label: 'icon',
  },
];

function MySidebar({ selectedId }: sidebarType) {
  const router = useRouter();
  const [thisPage, setThisPage] = useState<string>('/');

  const onClickSidebar = (data: any) => {
    // if (data.id === 'vps-tracker') {
    //   router.push('/');
    // } else {
    //   router.push(`/${data.id}`);
    // }
    router.push(`/${data.id}`);
    setThisPage(data.id);
  };

  useEffect(() => {
    selectedId && setThisPage(selectedId);
  }, [selectedId]);

  useEffect(() => {
    const thisRouter = window.location.pathname.split('/');
    const thisLocation = thisRouter[thisRouter.length - 1];
    // if (thisLocation === '') {
    //   setThisPage('vps-tracker');
    // } else {
    //   setThisPage(thisLocation);
    // }
    setThisPage(thisLocation);
  }, [router]);

  return (
    <SidebarStyle
      id="sidebar"
      itemData={sidebarData}
      selectedId={thisPage}
      onClick={onClickSidebar}
    />
  );
}

export default MySidebar;
