import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

import { default as Logo } from 'src/assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {
  return (
    <div className={styles['navbar']}>
      <div className={styles['content']}>
        <div className={styles['title-section']}>
          <div className={styles['logo-wrapper']}>
            <Logo />
          </div>

          <h1>burke.sh</h1>
        </div>

        <div className={styles['nav-link-wrapper']}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <a href="https://github.com/burkel24" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/burketlivingston" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}