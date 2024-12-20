import React from 'react'
import SingleBookCard from './SingleBookCard'



function BookCard({books}) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        books.map((item)=>(
            <SingleBookCard key={item._id} books={item}/>
        ))
      }
    </div>
  )
}

export default BookCard
