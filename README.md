# Pokemon Stats

A React-based web app that retrieves and displays Pokémon data using a public API. Users can search for a Pokémon by name and view its stats in a clean, responsive layout.

---

## Live Demo

Coming soon — will be deployed via Azure or AWS.

---

## Overview

This project allows users to enter the name of a Pokémon into a search bar and retrieve detailed stats using a public API.  
I built this project to learn how to integrate APIs into a React application, manage data fetching, and present dynamic content with responsive design.

This is a rebuild of a previous version — my goal this time is to write cleaner, more efficient code, reduce unnecessary API calls, and take what I’ve learned to the next level.

---

## Tech Stack

- React.js  
- TypeScript  
- TailwindCSS  

---

## Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pokemon-stats.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

##📝 Features
🔍 Search bar to query Pokémon by name

📊 Fetches data from a public Pokémon API

💾 Stores results locally for quicker access

📱 Responsive design using TailwindCSS


##📅 Development Log

Date | Progress
2025-04-28 | Rebuilt base project with React + TS + Tailwind scaffold
2025-04-29 | Implemented basic search functionality and API fetching
TBD | Optimize API calls and local storage logic

##🐞 Challenges & Solutions
Problem: API was being called too frequently when typing in the search bar
Solution: Planning to implement debouncing to reduce API calls and improve performance

##✨ Future Improvements
 Add smooth animations and transitions for loading/search results

 Switch to a Pokémon card API and display actual card visuals

 Improve accessibility and keyboard navigation

 Add error handling and loading states

 Build a history/favorites feature for searched Pokémon

##📸 Screenshots


##📜 License
This project is licensed under the MIT License.

##🙌 Acknowledgements
PokéAPI — for providing open access to Pokémon data