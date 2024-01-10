import React, { useEffect, useState } from 'react';
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
    id: 'forms',
    label: 'Form',
  },
];

function MySidebar({ selectedId }: sidebarType) {
  const router = useRouter();
  const [thisPage, setThisPage] = useState<string>('/');
  const onClickSidebar = (data: any) => {
    if (data.id === 'forms') {
      router.push('/forms');
    } else if (data.id === 'vps-tracker') {
      router.push('/');
    }
  };

  useEffect(() => {
    selectedId && setThisPage(selectedId);
  }, [selectedId]);

  useEffect(() => {
    const thisRouter = window.location.pathname.split('/');
    const thisLocation = thisRouter[thisRouter.length - 1];
    if (thisLocation === '') {
      setThisPage('vps-tracker');
    } else {
      setThisPage(thisLocation);
    }
  }, [router]);

  return (
    <Sidebar
      id="sidebar"
      itemData={sidebarData}
      selectedId={thisPage}
      onClick={onClickSidebar}
    />
  );
}

export default MySidebar;
