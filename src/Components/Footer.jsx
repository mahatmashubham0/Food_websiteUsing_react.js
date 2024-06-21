import React from 'react'

const Footer = () => {
  return (
    <div className="footer text-center space-x-4 my-4">
    Created By
    <i className="fa-solid fa-heart"></i>
    <a
      href="https://www.linkedin.com/in/mahatmashubham0"
      target="_blank"
      title="Chetan Nada's Linkedin Profile"
      className='font-bold'
    >
      Shubham Mahatma
    </a>
    <i className="fa-solid fa-copyright"></i>
    {2024}
    <a
      href="https://github.com/mahatmashubham0"
      target="_blank"
      title="Food Fire Github Repository"
      className='bg-[#ff5c0d] p-1 px-4 rounded-md'
    >
      <strong>
        Food<span>Fire</span>
      </strong>
    </a>
  </div>
  )
}

export default Footer