import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {
  return (
    <div className={styles['navbar']}>
      <div className={styles['content']}>
        <h1>burke.sh</h1>

        <div className={styles['nav-link-wrapper']}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <div>|</div>
            <a href="https://github.com/burkel24" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
        </div>
      </div>
    </div>
  );
}