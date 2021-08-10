import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])

  return (
    <div className={styles.content}>
      <h2>Ooops... Page can't be found :(</h2>
      <p>Going back to the <Link href="/"><a>Homepage</a></Link> is 3 seconds...</p>
    </div>
  );
}
 
export default NotFound;