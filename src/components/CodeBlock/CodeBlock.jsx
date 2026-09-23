import { highlight } from './highlight';
import styles from './CodeBlock.module.css';

const TRAFFIC = ['#ff5f57', '#febc2e', '#28c840'];

export default function CodeBlock({ lang = 'js', code }) {
  const html = highlight(code, lang);

  return (
    <div className={styles.window}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          {TRAFFIC.map((c) => (
            <span key={c} className={styles.dot} style={{ background: c }} />
          ))}
        </div>
        <span className={styles.title}>{lang}</span>
        <span className={styles.grip} aria-hidden="true" />
      </div>
      <pre className={styles.body}>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
