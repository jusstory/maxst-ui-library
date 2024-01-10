import { Sidebar } from '@maxst-designsystem/maxst-design-system';
import React from 'react';
import { HeaderSidebarStyle } from './SiderStyle';

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

function MobileSidebar() {
  return <HeaderSidebarStyle id="sidebar" itemData={mobileSidebarMenuData} />;
}

export default MobileSidebar;
