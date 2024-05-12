import React from 'react'
import Link from 'next/link'
function ResumePage() {
  return (
    <section className='  w-full mt-20'>
      <div className=' flex flex-row gap-6 mb-6 justify-center '>
    
        <Link className=' text-blue-500' href={"https://www.linkedin.com/in/vivek-gujral1/"} >LinkedIn</Link>
        <Link href={"https://github.com/Vivek-Gujral1"} className=' text-blue-500'>Github</Link>

              <Link
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=vivekgujral2345@gmail.com.com`}
                className=" text-blue-500"
              >
                Gmail
              </Link>
        
      </div>
          <img src="https://res.cloudinary.com/vivekgujral/image/upload/v1715508477/halvpgb9nw4g5thvnraw.jpg" alt='Resume Image'  className=' h-full'/>
    </section>
  )
}

export default ResumePage