import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../api';
import type { Project } from '../types';
import Circuit3D from '../components/Circuit3D';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getProjectById(id)
                .then(setProject)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <div className="p-8 text-center">Loading...</div>;
    if (!project) return <div className="p-8 text-center">Project not found</div>;

    const totalCost = project.components?.reduce((sum, item) => sum + (item.priceInINR * item.quantity), 0) || 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h1>
            <p className="text-gray-600 text-lg mb-8">{project.shortDescription}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">How it works</h2>
                        <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            {project.theory}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Components Required</h2>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-3 font-medium text-gray-600">Component</th>
                                        <th className="p-3 font-medium text-gray-600">Qty</th>
                                        <th className="p-3 font-medium text-gray-600">Price (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.components?.map((comp, idx) => (
                                        <tr key={idx} className="border-t border-gray-100">
                                            <td className="p-3">{comp.name}</td>
                                            <td className="p-3">{comp.quantity}</td>
                                            <td className="p-3">₹{comp.priceInINR}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50 font-bold">
                                        <td className="p-3" colSpan={2}>Total Estimated Cost</td>
                                        <td className="p-3">₹{totalCost}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Build Instructions</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {project.steps?.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3D Visualization</h2>
                        {project.layout3d ? (
                            <Circuit3D layout={project.layout3d} />
                        ) : (
                            <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                                No 3D layout available
                            </div>
                        )}
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Click and drag to rotate. Scroll to zoom.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Circuit Diagram</h2>
                        <div className="h-64 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                            Circuit Diagram Placeholder
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
