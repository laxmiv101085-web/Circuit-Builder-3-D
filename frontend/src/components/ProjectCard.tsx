import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="block group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Circuit Preview</span>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{project.name}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{project.shortDescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
