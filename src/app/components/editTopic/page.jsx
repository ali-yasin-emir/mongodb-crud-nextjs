'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const EditTopic = ({id, title, description}) => {
  
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();
try {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newTitle, newDescription})
  })

  if(!res.ok){
    throw new Error('Failed to update topic')
  }

  router.push('/topics')
  router.refresh()
} catch (err) {
  console.log(err)
}
}


  return (
    <form onSubmit={handleSubmit} className={styles.container}>
    <div className={styles.info}>
       <div>
         <h2>Title</h2>
       <input onChange={(e) => setNewTitle(e.target.value)} className={styles.input} value={newTitle} placeholder='Topic Title' type="text" />
       </div>
     <div>
       <h2>Description</h2>
     <textarea onChange={(e) => setNewDescription(e.target.value)} className={styles.input} value={newDescription} placeholder='Topic Description' type="text"  />
     </div>
    </div>
    <button type='submit' className={styles.btn}>Update Topic</button>
       </form>
    )
}

export default EditTopic