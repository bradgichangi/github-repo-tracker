# LAP 3 Debugging Assignment

## Installation & Usage

### Installation

- Clone or download the repo.
- Open terminal and navigate to ``github-repo-tracker`` folder.
- Run ``npm install`` to install dependencies.

### Usage

- Run ``npm run dev`` to launch react app.

## Changelog

### Components Folder

- Created components for list of repos, user information and username form
- Created index file for easy referencing of components

### Pages Folder

- Created pages for Sign in, Repo and Dashboard
- Created Unknown page for 404 errors
- Created index file for easy referencing of components

### Layout/Navbar

- Created navbar for easy traversal of pages

### customHooks/useFetch

- Created a custom hook for dynamic fetching of data from APIs

### App.css

- Styling for the website

### App.jsx

- Included routing for all pages

### package.json

- Installed react dependencies
- Installed package for icons from font-awesome

### Components/RepoList

- Took data as parameter and maps divs for each repo

### Components/UserInfo

- Took user data as parameter
- Displayed name and image of user

### Components/UsernameForm

- Created form for user input
- Added user input as username and used it as an endpoint

### Pages/Dashboard

- Used useFetch to fetch data from API
- Displayed called user info and repo list components

## Wins & Challenges

### Wins

- Username input page
- 404 errors handled
- Page navigation
- useFetch custom hook
- Similar colour scheme and design as GitHub original page

### Challenges

- useEffect data handling 
(Trouble with outputting the data as return runs before the fetch. Fixed by implementing a check for the data variable.)

