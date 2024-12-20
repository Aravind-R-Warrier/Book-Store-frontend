import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'


function Deletebook() {
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const{id}=useParams()

  const handleDelete=()=>{
    setLoading(true)
    axios.delete(`https://book-store-bacend.onrender.com/books/${id}`).then(()=>{
      setLoading(true)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">
        Delete Book
      </h1>
      {loading?<Spinner/>:""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto w-[600px]">
        <h2 className='text-2xl'>Are you sure you want to delete?</h2>
        <button className='text-white bg-red-600 p-4 m-8 w-full' onClick={handleDelete}>
          Yes,delete it
        </button>
      </div>
    </div>
  )
}

export default Deletebook
