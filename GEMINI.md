# react-mhc9-calendar

A React-based Weekly Calendar application designed for tracking events and schedules. It features a responsive grid layout, theme support (Dark/Light modes), and integration with an external API for event data.

## Project Overview

-   **Frontend Framework**: React 19
-   **Styling**: Tailwind CSS (with PostCSS)
-   **Date Management**: Moment.js
-   **Icons**: Lucide React
-   **API Client**: Axios
-   **State Management**: React Hooks (Context API for theming)

## Architecture

The application is structured around a central `WeeklyCalendar` component that manages state and data fetching.

-   **`src/api/index.js`**: Configures Axios with base URL and API key from environment variables.
-   **`src/contexts/ThemeContext.js`**: Manages application-wide theme state (Dark/Light) and provides theme-specific CSS classes.
-   **`src/components/WeeklyCalendar`**: The main container component. Handles date navigation, event fetching, and processing.
-   **`src/components/Calendar`**: Renders the weekly grid and event cards.
-   **`src/components/Modal`**: Displays detailed information when an event is selected.

## Building and Running

### Development
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## Configuration

The application requires several environment variables to be set in a `.env.local` file:

-   `REACT_APP_API_URL`: The base URL for the backend API.
-   `REACT_APP_API_KEY`: The API key for authentication.

### Deployment Notes
-   Set `"homepage": "./"` or a specific path (e.g., `"/calendar/"`) in `package.json`.
-   If using a sub-path, ensure the Router (if added) has the correct `basename`.

## Development Conventions

-   **Functional Components**: All components are written as functional components using hooks.
-   **Theming**: Use the `useTheme` hook to access theme-specific classes (`t`) instead of hardcoding colors where possible.
-   **Date Handling**: Use `moment` for date calculations and comparisons.
-   **API Calls**: Use the pre-configured `api` instance from `src/api/index.js` for all network requests.
-   **Styling**: Prefer Tailwind CSS utility classes. Custom animations or complex styles should be defined in `src/index.css`.

## Key Files

-   `src/App.js`: Entry point rendering the `WeeklyCalendar`.
-   `src/components/WeeklyCalendar/index.js`: Core logic for fetching and processing events.
-   `src/api/index.js`: Axios interceptor setup for API authentication and error handling.
-   `src/contexts/ThemeContext.js`: Theme definitions and logic.
