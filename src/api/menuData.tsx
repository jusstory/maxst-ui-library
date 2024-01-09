import React from 'react';
import {
  UserLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

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

export const phonData = [
  {
    id: 'phon-010',
    label: '010',
  },
  {
    id: 'phon-011',
    label: '011',
  },
  {
    id: 'phon-02',
    label: '02',
  },
  {
    id: 'phon-031',
    label: '031',
  },
  {
    id: 'phon-032',
    label: '032',
  },
  {
    id: 'phon-033',
    label: '033',
  },
];

export const dropdownData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: true,
    // subLabel: 'more',
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <CheckLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    // subLabel: 'more',
  },
];
