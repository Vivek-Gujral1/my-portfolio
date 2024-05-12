import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import VideoPlayer from "./VideoComponent"

const projects = [
  {
    name: "Management-App",
    github: "https://github.com/hqasmei/thankful-thoughts",
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
                  <div className=" md:w-1/2">
                    <VideoPlayer url="https://res.cloudinary.com/vivekgujral/video/upload/v1715500755/y7tp2nuavsyiviupvaqa.3gp" />
                  </div>
                  <div className=" md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {/* <h1 className="mb-4 mt-6 text-decoration-line: underline text-purple-300 text-center">My APP Summary In Some Points</h1> */}
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold">1 Organizations</span>: Users can create and join organizations within the
          app. This serves as the primary unit for team collaboration and task
          management.
        </p>
        <p className="mb-4 mt-3">
         <span className=" text-teal-600 font-bold" > 2 Stories (Rooms)</span>: Within each organization, users can create Stories,
          which are dedicated spaces for specific projects or tasks. Managers
          oversee these Stories and assign tasks to team members.
        </p>
        <p className="mb-4 mt-3">
          {" "}
         <span className=" text-teal-600 font-bold"> 3 Task Management</span>: Managers can assign tasks to team members within
          Stories. This feature helps in organizing workflow and tracking
          progress.
        </p>
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold" >4 Chat Section</span>: Each Story includes a chat section where team members
          can communicate in real-time, discuss tasks, share updates, and
          collaborate effectively.
        </p>
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold" >5 Social Media Integration</span>: My app includes social media features
          where organizations can create posts. These posts can be about company
          updates, achievements, events, or any other relevant content. Users
          can like and comment on these posts, fostering engagement and
          interaction within the organization.
        </p>
        <p className="mb-4 mt-3">
          <span className=" text-teal-600 font-bold">6 Owner Controls</span>: Owners of organizations have administrative
          privileges, allowing them to manage members, create posts, and oversee
          the overall functioning of the organization within the app.
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
