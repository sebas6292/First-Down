import React from 'react'

const Display = () => {
  return (
    <div className='vh-100 bg-dark d-flex'>
        <div className='w-50 d-flex flex-column justify-content-center ps-5 text-white'>  {/* Left Side of Front Page */}
            <h1>Welcome to Sports</h1>
            <h2>Enjoy the sport you love and have fun with your community</h2>
            <p>By Joining into one of our programs you will be able to help keep your health in top shape</p>
            <p>Be able to make new friends who are interested in the same sport</p>
            <p>Create lasting memories while learning a new skill or improving your skill</p>
            <div>
                <button className='btn btn-outline-primary me-4'>CTA</button>
                <button className='btn btn-outline-success me-4'>Learn More</button>
            </div>
            <p className='mt-3'>Works With</p>
            <div className='d-flex mt-2'>
                <div className='me-5 p-3 rounded-5 border border-white'>Icons</div>
                <div className='me-5 p-3 rounded-5 border border-white'>Icons</div>
                <div className='me-5 p-3 rounded-5 border border-white'>Icons</div>
            </div>
        </div>
        <div className='w-50'>{/* Right Side of Front Page */}
            <div className='border border-white h-75 d-flex justify-content-center align-items-center'><p className='text-white'>Image Placeholder</p></div>
        </div>
    </div>
  )
}

export default Display