import React from 'react';
import { MoreVerticalLineIcon } from '@maxst-designsystem/icons';
import { Dropdown, Button } from '@maxst-designsystem/maxst-design-system';

export const trackerColumnData = [
  {
    id: 'type',
    title: '종류',
  },
  {
    id: 'name',
    title: '이름',
  },
  {
    id: 'count',
    title: '공간맵 수',
  },
  {
    id: 'inOut',
    title: '실내외 구분',
  },
  {
    id: 'creatType',
    title: '생성 방식',
  },
  {
    id: 'progress',
    title: '진행 현황',
  },
  {
    id: 'update',
    title: '수정일',
  },
  {
    id: 'byte',
    title: '용량',
  },
  {
    id: 'more',
    title: '',
  },
];

const tableRowMoreData = [
  {
    id: 'row-01-01',
    label: 'row-01-01',
  },
  {
    id: 'row-01-02',
    label: 'row-01-02',
  },
];

const onClickMoreButton = (data: any) => {
  console.log(data);
};

export const trackerRowData = [
  {
    id: '1',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-1"
          menuData={tableRowMoreData}
          align="right"
          onClick={onClickMoreButton}
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
  {
    id: '2',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-2"
          menuData={tableRowMoreData}
          align="right"
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
  {
    id: '3',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-3"
          menuData={tableRowMoreData}
          align="right"
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
  {
    id: '4',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-4"
          menuData={tableRowMoreData}
          align="right"
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
  {
    id: '5',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-5"
          menuData={tableRowMoreData}
          align="right"
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
  {
    id: '6',
    type: 'file',
    name: '맥스트01',
    count: '20개의 공간',
    inOut: '실내',
    creatType: '360카메라 이미지',
    progress: 'finished',
    update: '2023.11.11',
    byte: '100MB',
    more: (
      <span className="more-button">
        <Dropdown
          id="more-dropdown-6"
          menuData={tableRowMoreData}
          align="right"
        >
          <Button
            type="ghost"
            size="l"
            isIconMode={true}
            iconOnly={<MoreVerticalLineIcon />}
          />
        </Dropdown>
      </span>
    ),
  },
];
