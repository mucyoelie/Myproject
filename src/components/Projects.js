import React from 'react';

const projects = [
  {
    title: 'Mathematics & Science',
    description: 'Description of project 1.',
  },
  {
    title: 'History',
    description: 'Description of project 2.',
  },
  {
    title: 'Technology',
    description: 'Description of project 3.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center">Quizzes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;