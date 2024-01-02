import React from 'react';
import { ContainerStyles } from './ContainerStyle';

type containerProps = {
  children: React.ReactNode;
};
function Container({ children }: containerProps) {
  return <ContainerStyles>{children}</ContainerStyles>;
}

export default Container;
