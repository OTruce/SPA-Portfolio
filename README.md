Personal Project Showcase App

Overview

The Personal Project Showcase App is a Single Page Application (SPA) built with React that allows users to manage and showcase projects. Users can add new projects, search through existing projects and remove projects dynamically without reloading the page.
The application demonstrates core React concepts including component-based architecture, state management, event handling, props and responsive design.



Features

1. Project Display
* View a list of projects on the landing page.
* Each project displays a title and description.

2. Add New Projects
* Add projects using a form.
* New projects appear immediately in the project list.

3. Search Projects
* Search projects dynamically by title.
* Results update instantly as the user types.

4. Delete Projects
* Remove projects from the list with a single click.

5. Data Persistence
* Projects are saved in the browser using Local Storage.
* Data remains available even after refreshing the page.

6. Responsive Design
* Layout adapts to different screen sizes for improved usability.



Technologies Used

* React
* Vite
* CSS
* Local Storage API



Project Structure

src/
│
├── components/
│   ├── Header.jsx
│   ├── ProjectForm.jsx
│   ├── SearchBar.jsx
│   ├── ProjectList.jsx
│   └── ProjectCard.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx



Component Hierarchy

App
│
├── Header
├── ProjectForm
├── SearchBar
└── ProjectList
      │
      └── ProjectCard


Installation and Setup

1. Fork and Clone the Repository
git clone https://github.com/yourusername/SPA-Portfolio.git

2. Navigate to the Project Folder
cd SPA-Portfolio

3. Launch and run Vite from the terminal using:
npm create vite@latest Project-portfolio -- --template react

4. Open in Browser
Vite will provide a local development URL similar to:

http://localhost:5173

Open the URL in your browser.



Usage

Adding a Project:
1. Enter a project title.
2. Enter a project description.
3. Click the **Save Project** button.

Searching for a Project:
1. Type into the search box.
2. Matching projects are displayed automatically.

Deleting a Project:
1. Click the delete button next to a project, the project is immediately removed from the list.



Author
Stephen Njenga
