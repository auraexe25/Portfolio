import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
    image: string;
    title: string;
    description: string;
    purl: string;
    durl: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [expanded, setExpanded] = useState(false);
    const shortDescription = project.description.slice(0, 150) + '...';

    return (
        <div 
            className="bg-[#0d1f5d] p-3 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col w-full h-full">
            <Image 
                src={project.image} 
                alt={project.title} 
                width={500} 
                height={300} 
                className="rounded-xl w-100 h-60 object-cover"
            />
            <h3 className="text-2xl text-left font-semibold mt-4">{project.title}</h3>
            <p className="text-left text-white text-sm mt-2">
                {expanded ? project.description : shortDescription}
            </p>
            {!expanded && (
                <button onClick={() => setExpanded(true)} className="text-purple-400 mt-2">..Read More</button>
            )}
            <div className="mt-auto flex gap-2 pt-4">
                <Link href={project.purl} target="_blank" className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-[#0d1f5d] hover:border hover:border-yellow-500 hover:text-yellow-500">View Project</Link>
                <Link href={project.durl} target="_blank" className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-[#0d1f5d] hover:border hover:border-yellow-500 hover:text-yellow-500">View Deployment</Link>
            </div>
        </div>
    );
};

export default ProjectCard;
