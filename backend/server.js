const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data', 'projects.json');

// Helper to read data
const getProjects = () => {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
};

// GET all projects (summary)
app.get('/api/projects', (req, res) => {
  try {
    const projects = getProjects();
    const summary = projects.map(p => ({
      id: p.id,
      name: p.name,
      shortDescription: p.shortDescription
    }));
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// GET single project details
app.get('/api/projects/:id', (req, res) => {
  try {
    const projects = getProjects();
    const project = projects.find(p => p.id === req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
