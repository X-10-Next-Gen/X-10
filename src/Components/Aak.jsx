import React from 'react'

const Aak = () => {
  return (
    <div>    <div className='bg-cyan-100'>
            <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img className="size-12 shrink-0" src={img} alt="ChitChat Logo" />
      <div>
        <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
        <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
      </div>
    </div>
    <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3  rounded-2xl ">Submit</button>
        </div></div>
  )
}

export default Aak