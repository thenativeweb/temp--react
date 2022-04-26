import { FunctionComponent } from 'react';
import styles from './VerticalStack.module.css';

interface VerticalStackProps {
  children: React.ReactNode;
}

const VerticalStack: FunctionComponent<VerticalStackProps> = function ({ children }) {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  );
};

export { VerticalStack };
