# Tedooo Feed frontend

## Overview
Tedooo Feed Frontend is a modern web application designed to manage and display feeds effectively.
The application features an intuitive interface for users to interact with various feed items

## Installation
 1. Clone the repository -
```git clone https://github.com/Carmel-Amarilio/Tedooo-Feed-frontend.git```


2. install dependencies -
```npm install```

3. Run the development server -
```npm run dev```

4. Open your browser and navigate to -
http://localhost:3000

## Architecture

The Tedooo Feed Frontend project is organized to ensure a clean separation of concerns, making the codebase more scalable and maintainable. Below is an overview of the folder structure and how to navigate through the project.

### Key Folders and Files

- **`/src`**: The main source directory for the project, which includes all the application logic, components, assets, and services.
  
  - **`/assets`**: Contains static assets such as fonts and images.
    - **`/fonts`**: Stores font files used in the project.
    - **`/img`**: Contains image assets like logos or icons.
    - **`/styles`**: SCSS style files that are reused across the project.
  
  - **`/cmps`**: Short for "components," this folder holds reusable and independent UI components.
    - **`/feed`**: Components related to the feed feature.
      - **`FeedList.tsx`**: Manages and renders the list of feed items.
      - **`FeedPreview.tsx`**: Displays a preview of a single feed item.
      - **`FeedSkeleton.tsx`**: Placeholder component used when feed data is being loaded.
    - **`MainHeader.tsx`**: The main header component for navigating the feed section.
  
  - **`/models`**: Contains TypeScript models and interfaces for defining data structures.
    - **`models.ts`**: Defines the types and interfaces used throughout the application for data consistency.
  
  - **`/services`**: Contains service files that handle business logic and API interactions.
    - **`feed.service.ts`**: Handles API calls and data fetching related to feed items.
    - **`util.service.ts`**: Utility service for helper functions used across various parts of the app.
  
  - **`/stories`**: Contains Storybook configurations and stories used to test UI components in isolation.
  
  - **`/views`**: Contains the main page components that represent different views of the application.
    - **`FeedIndex.tsx`**: The main view component for displaying the feed interface, combining multiple feed-related components.
  
  - **`App.tsx`**: The root component that sets up the main structure of the application, including routes and global state providers.
  
  - **`main.tsx`**: The entry point for the application where the React app is initialized and rendered to the DOM.

  - **`/storybook-static`**: The generated static files from Storybook, used to serve the Storybook UI for component documentation and testing.
## Assumptions / Limitations

In this exercise, certain features and best practices that are typically expected in a production-level application were either simplified or not fully implemented, given the scope of the project. Below are some assumptions and limitations:

1. **Accessibility Features**:
 - While the application uses a basic responsive design, accessibility features such as support for screen readers, alternative text for images, or high-contrast modes for users with visual impairments have not been fully implemented.
 - No advanced adjustments were made for text size scaling for users with disabilities (e.g., WCAG-compliant font scaling).

2. **Language Localization**:
 - The application currently supports only English and does not include internationalization (i18n) for changing languages ​​or adapting content for users from different regions.
 - Multilingual support, including right-to-left (RTL) text layout or locale-based formatting, was not a focus for this exercise.

3. **Error Handling**:
 - Basic error handling is in place, but comprehensive error messages, user-friendly fallback UIs, or retry mechanisms for failed API calls were not deeply implemented.
 - Graceful degradation and progressive enhancement to ensure the app functions on older browsers were not prioritized.

4. **Testing**:
 - While Storybook has been configured for testing UI components in isolation, end-to-end (E2E) tests or unit tests with testing frameworks like Jest or Cypress have not been fully integrated.


These limitations reflect a deliberate focus on core functionality for the purposes of this project. In a production environment, addressing these aspects would be essential for creating a robust, secure, and accessible application.

## Links
- You can view the live demo at [GitHub Pages](https://carmel-amarilio.github.io/Tedooo-Feed-frontend/).
- For detailed component documentation, visit [Storybook](https://66dd5b914f23f6cb96d7b54e-kofxdwyyit.chromatic.com/?path=/story/feed-preview--base).

