# Circuit Builder 3D (MVP)

A web application for electronics students and hobbyists to explore simple circuits with 3D visualizations.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, React Three Fiber
- **Backend**: Node.js, Express
- **Data**: Local JSON file (`backend/data/projects.json`)

## Prerequisites
- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository (if applicable) or navigate to the project root.
2. Install dependencies for both frontend and backend:
   ```bash
   npm run install-all
   ```
   (Or manually: `npm install` in root, `cd backend && npm install`, `cd frontend && npm install`)

## Running the App

To start both the backend API and the frontend development server concurrently:

```bash
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## Adding New Projects

To add a new circuit project, edit `backend/data/projects.json`.
Add a new object to the array with the following structure:

```json
{
  "id": "unique-id",
  "name": "Project Name",
  "shortDescription": "One line description",
  "theory": "Explanation of how it works",
  "components": [
    { "name": "Component Name", "quantity": 1, "priceInINR": 10 }
  ],
  "steps": [
    "Step 1",
    "Step 2"
  ],
  "layout3d": {
    "components": [
      { "type": "ic", "position": [0, 0, 0], "color": "black", "size": [1, 1, 1], "label": "Label" }
    ],
    "wires": [
      { "start": [0, 0, 0], "end": [1, 1, 1], "color": "red" }
    ]
  }
}
```

## Future Improvements
- [ ] User Authentication
- [ ] Realistic 3D models (GLTF/GLB)
- [ ] Drag-and-drop circuit builder
- [ ] Database integration (MongoDB/PostgreSQL)
