import React from 'react'

const Footer = (props) => {
  return (
    <div className=' bg-blue-500 p-4 mt-12 text-center text-lg text-white' >
      <h1>  &copy; Copyrite 2025 {props.CpName}</h1>
    </div>
  )
}

export default Footer;