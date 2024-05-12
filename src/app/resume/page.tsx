import React from 'react'
import Link from 'next/link'
function ResumePage() {
  return (
    <section className='  w-full mt-20'>
      <div className=' flex flex-row gap-6 mb-6 justify-center '>
    
        <Link className=' text-blue-500' href={"https://www.linkedin.com/in/nitin-gujral-76627b2a5/"} >LinkedIn</Link>
        <Link href={"https://github.com/nitin31822"} className=' text-blue-500'>Github</Link>

              <Link
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=gujralnitin898@gmail.com`}
                className=" text-blue-500"
              >
                Gmail
              </Link>
        
      </div>
          <img src="https://res.cloudinary.com/vivekgujral/image/upload/v1715506242/euaimudotbfz7eykabud.jpg" alt='Resume Image'  className=' h-full'/>
    </section>
  )
}

export default ResumePage