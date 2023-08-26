
import React from 'react'
import styles from './page.module.css'
import DeleteBtn from '../deleteButton/DeleteBtn'
import EditButton from '../editButton/page'
import Link from 'next/link'

const getTopics = async () => {
try {
  const res = await fetch('http://localhost:3000/api/topics', {
    cache: 'no-store'}
    );

  if(!res.ok){
    throw new Error('Failed to fetch topics')
  }

  return res.json();

} catch (err) {
  console.log(err)
}  
}


const Topic = async () => {

const {topics} = await getTopics();

  return (
<>
{topics.map((topic) => (
  <div className={styles.container} key={topic._id}>
      <div className={styles.info}>
        <div><h2>{topic.title}</h2></div>
        <div><p>{topic.description}</p></div>
        <Link href={`/topics/${topic._id}`}><EditButton id={topic._id}/></Link>
      <DeleteBtn id={topic._id}/>
      </div>
  </div>
))}
</>
  )
}

export default Topic;