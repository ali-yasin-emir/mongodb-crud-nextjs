'use client'

import React from 'react'
import styles from './DeleteBtn.module.css'
import { useRouter } from 'next/navigation'
const DeleteBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?')
    if(confirmed){
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE'
      })
      if(res.ok){
        router.refresh()
      }
    }

  }

  return (
    <div className={styles.container}>
    <button onClick={removeTopic} className={styles.btn}>
    <svg className={styles.deleteIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </button>
    </div>
  )
}

export default DeleteBtn

