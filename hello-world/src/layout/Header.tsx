import { FunctionComponent } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = function ({ title }) {
  return (
    <div className='Header'>
      <h1>{ title }</h1>
    </div>
  );
};

export { Header };
