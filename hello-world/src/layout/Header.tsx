import { FunctionComponent } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = function ({ title }) {
  return (
    <div>
      <h1>{ title }</h1>
    </div>
  );
};

export { Header };
