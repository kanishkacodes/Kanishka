import styles from './style.module.scss';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.footer}>
        <Link href="https://github.com/kanishkacodes/" ><div>GitHub</div></Link>
        <Link href="https://www.linkedin.com/in/kumarkanishka/"><div>Linkedin</div></Link>
        <Link href="https://leetcode.com/kanishkacodes/"><div>Leetcode</div></Link>
        <Link href="https://twitter.com/knishkakumar/"><div>Twitter</div></Link>
    </div>
  )
}