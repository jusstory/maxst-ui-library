import React from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '@maxst-designsystem/maxst-design-system';

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
    id: 'form',
    label: 'Form',
  },
];

function MySidebar() {
  const router = useRouter();
  const onClickSidebar = (data: any) => {
    if (data.id === 'form') {
      router.push('/forms');
    }
  };
  return (
    <Sidebar
      id="sidebar"
      itemData={sidebarData}
      selectedId="vps-tracker"
      onClick={onClickSidebar}
    />
  );
}

export default MySidebar;
