// import React from "react"




// const Contact = () => {
//   return (
//     <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
//       <div className="my-16 pb-12 md:pt-16 md:pb-48 ">
//         <h1 className="text-center font-bold text-4xl ">
//           Contact-Me
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>
     
//         <h1>P.NO = <span className=" text-2xl text-teal-500">7719703140</span> </h1>


//       </div>
      
//     </section>
//   )
// }

// export default Contact
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-700 mb-6">Feel free to reach out to me through any of the following channels:</p>
        <ul className="space-y-2">
          <li>
            <span className="block text-gray-700">Phone:</span>
            <span className="block text-blue-500">7986509671</span>
          </li>
          <Link className='"block text-blue-500 hover:underline' href={`https://mail.google.com/mail/?view=cm&fs=1&to=vivekgujral2345@gmail.com`}>
            <span className="block text-gray-700">Email:</span>
          vivekgujral2345@gmail.com
          </Link>
          <li>
            <span className="block text-gray-700">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/vivek-gujral1/" className="block text-blue-500 hover:underline"> LinkedIn Profile</a>
          </li>
          <li >
            <span className="block text-gray-700">GitHub:</span>
            <a href="https://github.com/Vivek-Gujral1" className="block text-blue-500 hover:underline"> GitHub Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

