# Tedooo Feed frontend

## Brief Overview
Tedooo Feed Frontend is a modern web application designed to manage and display feeds effectively.
The application features an intuitive interface for users to interact with various feed items, 

## Installation Instruction 
 1. Clone the repository
    git clone https://github.com/yourusername/TedoooFeed-frontend.git

2. nstall dependencies
    npm install

3. Run the development server
    npm run dev

4. Open your browser and navigate to 
    http://localhost:3000

## Architecture
The architecture of Tedooo Feed Frontend is designed to be scalable and maintainable:

Frontend Framework: Built with React, which provides a component-based architecture for better reusability and manageability of UI elements.
Styling: Employs SCSS-in-ts for styling, which allows for scoped and dynamic styling directly within components.
Infinite Scrolling: Implemented to improve user experience by loading feed items dynamically as the user scrolls, minimizing initial load time and improving performance.
Component Library: Integrated Storybook for developing and testing UI components in isolation, which aids in building robust and consistent components.

## Assumptions / Limitations
Server Availability: Assumes that the backend server is reliably available and accessible. The frontend may not handle cases where the server is down or unreachable.
Browser Compatibility: Focuses primarily on modern browsers. Older browsers may not be fully supported.
Data Integrity: Assumes that the data provided by the backend is correctly formatted and does not include extensive validation or error handling for malformed data.
Scalability: Designed to handle a reasonable amount of data efficiently. For very large datasets, additional optimization may be required.

## Links
- You can view the live demo at [GitHub Pages URL](https://carmel-amarilio.github.io/Tedooo-Feed-frontend/).
- For detailed component documentation, visit [Storybook](https://66dd5b914f23f6cb96d7b54e-kofxdwyyit.chromatic.com/?path=/story/feed-preview--base).
- [GitHub Repository](https://github.com/Carmel-Amarilio/Tedooo-Feed-frontend).
