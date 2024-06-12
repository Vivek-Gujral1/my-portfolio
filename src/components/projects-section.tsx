import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import VideoPlayer from "./VideoComponent"

const projects = [
  {
    name: "Management-App",
    github: "https://github.com/Vivek-Gujral1/updated-management-project",
    link: "https://thankfulthoughts.io/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-28" >
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" w-full">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {/* <h1 className="mb-4 mt-6 text-decoration-line: underline text-purple-300 text-center">My APP Summary In Some Points</h1> */}
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold">1 Companies</span>: Users can create and join Companies within the
          app. This serves as the primary unit for team collaboration and task
          management.
        </p>
        
        <p className="mb-4 mt-3">
          {" "}
         <span className=" text-teal-600 font-bold"> 2 Task Management</span>: Users can assign tasks to team members within
          Company. This feature helps in organizing workflow and tracking
          progress.
        </p>
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold" >3 Chat Section</span>: Each Company includes a chat section where team members
          can communicate in real-time, discuss tasks, share updates, and
          collaborate effectively. You can also chat with friends for one v one chat
        </p>
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold" >Github Link</span>: <Link className=" text-blue-700" href={project.github}>Visit Github</Link>
        </p>
        
                    </p>
                   
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
