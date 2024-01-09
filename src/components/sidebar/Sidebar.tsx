import React from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '@maxst-designsystem/maxst-design-system';

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
    id: 'form',
    label: 'Form',
  },
];

function MySidebar({ selectedId }: sidebarType) {
  const router = useRouter();
  const onClickSidebar = (data: any) => {
    if (data.id === 'form') {
      router.push('/forms');
    } else if (data.id === 'vps-tracker') {
      router.push('/');
    }
  };

  return (
    <Sidebar
      id="sidebar"
      itemData={sidebarData}
      selectedId={selectedId ? selectedId : '/'}
      onClick={onClickSidebar}
    />
  );
}

export default MySidebar;
