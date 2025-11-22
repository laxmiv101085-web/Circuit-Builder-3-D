import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';
import type { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="text-center py-10">Loading projects...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Circuit Builder 3D</h1>
                <p className="text-gray-600 text-lg mb-6">Explore simple electronics projects and learn how to build them.</p>
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center text-gray-500 mt-8">No projects found matching "{searchTerm}"</div>
            )}
        </div>
    );
};

export default Home;
