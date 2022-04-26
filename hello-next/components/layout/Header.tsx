import { FunctionComponent } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = function ({ title }) {
  return (
    <div className={ styles.header }>
      <h1 className={ styles.title }>{ title }</h1>
    </div>
  );
};

export { Header };
