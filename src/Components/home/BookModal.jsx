import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'


function BookModal({ books, onclose }) {

    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onclose}>

            <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onclose} />
                <h2 className="my-2 text-black-500 w-fit bg-red-400 rounded">
                    {books.publishYear}
                </h2>
                <h4 className='my-2 text-grey-500'>{books._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-red-400 text-2xl' />
                    <h2 className='my-1 '>{books.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className='text-red-400 text-2xl' />
                    <h2 className='my-1 '>{books.author}</h2>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, praesentium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita quibusdam adipisci tempora, voluptas laborum velit
                    reiciendis est unde architecto accusantium? Ratione laboriosam
                    facere blanditiis?</p>
            </div>
        </div>
    )
}

export default BookModal
