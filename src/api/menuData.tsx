import React from 'react';
import { UserLineIcon } from '@maxst-designsystem/icons';

export const breadcrumbMenuData = [
  {
    id: 'breadcrumb-01',
    label: 'breadcrumb-01',
    onMovePage: () => console.log('/breadcrumb-01'),
    onMoveSubPage: (data: any) => console.log(data),
    subMenu: [
      {
        id: 'breadcrumb-01-01',
        label: 'breadcrumb-01-01',
      },
      {
        id: 'breadcrumb-01-02',
        label: 'breadcrumb-01-02',
      },
    ],
  },
  {
    id: 'breadcrumb-02',
    label: 'breadcrumb-02',
    disabled: true,
    icon: <UserLineIcon />,
    onMovePage: () => console.log('/breadcrumb-02'),
  },
  {
    id: 'vps-tracker',
    label: 'vps-tracker',
    onMovePage: () => console.log('/breadcrumb-03'),
  },
  {
    id: 'breadcrumb-04',
    label: 'breadcrumb-04',
  },
];
