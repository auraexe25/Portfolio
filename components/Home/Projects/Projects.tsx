import { projectinfo } from 'Data/Data';
import React from 'react'
import ProjectCard from './Project-Card';

const Projects = () => {
  return (
      <section className="bg-black text-white py-12" id="projects">
          <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className='text-3xl sm:text-xl md:text-6xl font-heading text-white font-medium text-center'>Projects</h1>
              <p className="mt-6 sm:text-sm md:text-xl text-center text-[#a6a6a6] mb-12">
                  Here are some of the projects I’ve built — each one a small step in my learning journey and a reflection of what I enjoy creating.Each project has a link to the hosted website. For more, follow my GitHub.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectinfo.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
          </div>
      </section>
  );
};

export default Projects;
