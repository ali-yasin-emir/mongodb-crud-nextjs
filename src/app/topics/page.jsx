
import styles from './page.module.css';
import Topic from '../components/topic/page';

const Topics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}><h1>Topics</h1></div>
      <div className={styles.topicList}>
        <Topic/>
      </div>
    </div>
  )
}

export default Topics