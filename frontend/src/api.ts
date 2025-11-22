import axios from 'axios';
import type { Project } from './types';

const API_URL = 'http://localhost:3001/api';

export const getProjects = async (): Promise<Project[]> => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const getProjectById = async (id: string): Promise<Project> => {
    const response = await axios.get(`${API_URL}/projects/${id}`);
    return response.data;
};
