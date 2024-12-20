import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'


function Editbook() {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [publishYear,setPublishYear]=useState('')
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate()
  const{id}=useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://book-store-bacend.onrender.com/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
      alert('check console')
    })
  },[])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
  
    setLoading(true); // Show loading state (e.g., spinner or disable form)
  
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        setLoading(false); // Hide loading state after the request completes
  
        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          navigate('/'); // Navigate to the homepage or another route after successful update
          alert('Book updated successfully');
        } else {
          // Handle any other unexpected response
          alert('Something went wrong! Please try again.');
        }
      })
      .catch((err) => {
        setLoading(false); // Hide loading state in case of an error
        console.log(err); // Log error details for debugging
  
        // Display a more detailed error message if available
        if (err.response) {
          alert(`Error: ${err.response.data.message || 'An error occurred while updating the book'}`);
        } else {
          alert('Error: Unable to update the book. Please try again later.');
        }
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">
        Edit Book
      </h1>
      {loading?<Spinner/>:""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Title</label>
          <input type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)} 
          className='border-2 border-grey-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Author</label>
          <input type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)} 
          className='border-2 border-grey-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Publish Year</label>
          <input type="text"
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)} 
          className='border-2 border-grey-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-500 m-8 ' onClick={handleEditBook}>
          Save Book
        </button>
      </div>
    </div>
  )
}

export default Editbook
