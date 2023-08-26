'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';


const addTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description) alert('Title and description are required')
    
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, description})
      });

      if(res.ok){
        router.push('/topics');
      } else{
        throw new Error('Failed to create Topic')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
 <form onSubmit={handleSubmit} className={styles.info}>
    <div>
      <h2>Title</h2>
    <input onChange={(e) => setTitle(e.target.value)} value={title} className={styles.input} type="text" />
    </div>    
  
  <div>
    <h2>Description</h2>
  <textarea onChange={(e) => setDescription(e.target.value)} value={description} className={styles.input}  type="text" />
  </div>
  <button type='submit' className={styles.btn}>Create</button>
 </form>
    </div>
  )
}

export default addTopic