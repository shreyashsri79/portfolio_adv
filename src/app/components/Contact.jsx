import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2>Contact me</h2>
          <div className='flex w-full justify-center'>
            <a
              href="/shreyash_neeraj_resume.pdf"
              download
              className={`${text.className} px-4 py-2 text-xl bg-[#111827] text-white rounded hover:scale-110 transition`}
            >
              Get Resume
            </a>
            <a
              href={`mailto:${email}`}
              className={`${text.className} px-4 py-2 text-xl bg-[#111827] text-white rounded hover:scale-110 transition`}
            >
              Say Hello 👋
            </a>
          </div>
    </div>
  )
}

export default Contact