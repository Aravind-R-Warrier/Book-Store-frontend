import React, { useState } from 'react'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle,BiShow} from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BookModal from './BookModal'

function SingleBookCard({books}) {
    const[modal,setModal]=useState(false)

  return (
    <div>
      <div id={books._id}
            className='border-2 border-grey-500 rounded-lg px-4 py-2 m-4 realative hover:shadow-lg relative'>
                <h2 className="my-2 text-black-500 absolute top-1 right-1 bg-red-400 rounded">
                    {books.publishYear}
                </h2>
                <h4 className='my-2 text-grey-500'>{books._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-red-400 text-2xl'/>
                    <h2 className='my-1 '>{books.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className='text-red-400 text-2xl'/>
                    <h2 className='my-1 '>{books.author}</h2>
                </div>
                <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                    <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'onClick={()=>setModal(true)}/>
                  <Link to={`books/details/${books._id}`}>
                  <BsInfoCircle className='text-2xl bg-green-600 hover:text-black'/>
                  </Link>

                  <Link to={`books/edit/${books._id}`}>
                  <AiOutlineEdit className='text-2xl bg-yellow-600 hover:text-black'/>
                  </Link>

                  <Link to={`books/delete/${books._id}`}>
                  <MdOutlineDelete className='text-2xl bg-red-600 hover:text-black'/>
                  </Link>
                </div>
                {
                    modal&&(<BookModal books={books} onclose={()=>setModal(false)}/>)
                }
            </div>
    </div>
  )
}

export default SingleBookCard
