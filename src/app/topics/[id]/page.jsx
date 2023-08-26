
import React from 'react'
import EditTopic from '@/app/components/editTopic/page';

const getTopicById = async (id) =>{
try {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    cache: 'no-store'
  });

  if(!res.ok){
    throw new Error('Failed to update topic')
  }
  return res.json();
} catch (err) {
 console.log(err) 
}
}

const FilteredTopic = async ({params}) => {  
  const {id} = params;
  const {topic} = await getTopicById(id);
  const {title, description} = topic;

  return (
    <>
   <EditTopic id={id} title={title} description={description}/>
    </>
  )
}

export default FilteredTopic