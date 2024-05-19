import { ReactNode } from "react";
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode
}


export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className={styles['container']}>
      {props.children}
    </div>
  );
}