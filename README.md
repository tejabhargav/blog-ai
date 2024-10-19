# BlogAI

BlogAI is a sophisticated blog management and content curation platform with AI-powered features. This README provides an in-depth look at the project's structure, components, and functionality.

## Quick Setup Guide

1. Clone the repository:
   ```
   git clone https://github.com/your-username/blogai.git
   cd blogai
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in the required values

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

For more detailed instructions, see the [Setup and Running](#setup-and-running) section below.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Component Breakdown](#component-breakdown)
- [State Management](#state-management)
- [Filtering Logic](#filtering-logic)
- [Theme Management](#theme-management)
- [Setup and Running](#setup-and-running)
- [Documentation Links](#documentation-links)

## Features

- Dynamic blog filtering system
- AI-generated content integration
- Responsive design with dark mode support
- User authentication and profile management
- Content creation and management tools

## Project Structure

The project is organized into several key components:

- `AppPage`: The main container component [↗](#apppage)
- `Sidebar`: Navigation and filtering interface [↗](#sidebar)
- `TopNavigation`: User controls and theme toggle [↗](#topnavigation)
- `FilterBlogs`: Blog filtering component [↗](#filterblogs)
- `BlogCard`: Individual blog post display [↗](#blogcard)
- `DashboardContent`: Main content area for the dashboard [↗](#dashboardcontent)
- `MyBlogsContent`: User's personal blog management [↗](#myblogscontent)
- `ResourcesContent`: Resource management component [↗](#resourcescontent)
- `PreferencesContent`: User preferences management [↗](#preferencescontent)
- `BlogDetailView`: Detailed view of a single blog post [↗](#blogdetailview)
- `FilterDropdown`: Dropdown component for filtering options [↗](#filterdropdown)

## Component Breakdown

### AppPage

The `AppPage` component serves as the main container for the application. It manages the global state and renders the primary layout.

Key features:
- State management for user authentication, active tab, and blog filtering
- Conditional rendering of main content based on the active tab
- Integration of sidebar and top navigation components

### Sidebar

The `Sidebar` component provides navigation and houses the blog filtering interface.

Key features:
- Tab-based navigation (Dashboard, My Blogs, Resources, Preferences)
- Integration of the `FilterBlogs` component for advanced filtering

### TopNavigation

The `TopNavigation` component handles user-related actions and theme toggling.

Key features:
- User authentication controls (login/signup)
- Theme toggle (light/dark mode)
- Preferred content toggle

### FilterBlogs

The `FilterBlogs` component manages the blog filtering interface.

Key features:
- Multiple filter categories (Content Type, Resource Type, Keywords, etc.)
- Dynamic filter options based on selected resource types
- Clear all filters functionality

### BlogCard

The `BlogCard` component displays individual blog posts with a consistent layout.

Key features:
- Display of blog title, summary, tags, and resource type
- AI-generated content indicator
- Social sharing buttons and preview functionality

### DashboardContent

The `DashboardContent` component renders the main dashboard view.

Key features:
- Tabbed interface for different blog categories (Recent, Most Shared, AI Generated)
- Grid layout for blog cards

### MyBlogsContent

The `MyBlogsContent` component manages the user's personal blog section.

Key features:
- Tabbed interface for different blog types (All, AI Generated, Human Written)
- Blog creation forms (manual and AI-assisted)

### ResourcesContent

The `ResourcesContent` component manages and displays various resources.

Key features:
- List or grid view of available resources
- Resource categorization and filtering options

### PreferencesContent

The `PreferencesContent` component allows users to manage their account preferences.

Key features:
- User profile settings
- Notification preferences
- Content filtering preferences

### BlogDetailView

The `BlogDetailView` component provides a detailed view of a single blog post.

Key features:
- Full blog content display
- Author information
- Related posts or recommendations

### FilterDropdown

The `FilterDropdown` component is a reusable dropdown for various filtering options.

Key features:
- Customizable options list
- Multi-select functionality
- Integration with the main filtering system

## State Management

The application uses React's `useState` and `useEffect` hooks for state management. Key state variables include:

- `isLoggedIn`: Tracks user authentication status
- `activeTab`: Manages the currently active main tab
- `filteredBlogs`: Stores the current set of filtered blog posts
- Various filter states (e.g., `contentTypeFilter`, `resourceTypeFilter`)

## Filtering Logic

The blog filtering system is implemented in the `AppPage` component:

1. Filter states are updated via the `handleFilterChange` function
2. The `useEffect` hook watches for changes in filter states
3. When filters change, the `blogs` array is filtered based on the current filter criteria
4. The filtered results are stored in the `filteredBlogs` state

## Theme Management

The application supports a light and dark theme:

- Theme toggling is handled in the `TopNavigation` component
- The `useTheme` hook from `next-themes` manages theme state
- CSS variables in `globals.css` define theme-specific colors

## Setup and Running

To set up and run the project:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the project:
   ```
   npm run build
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

For production deployment, run `npm run build` before deploying and refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for further instructions.

## Documentation Links

- [@Web](https://developer.mozilla.org/en-US/docs/Web)
- [@TypeScript](https://www.typescriptlang.org/docs/)
- [@Shadcn](https://ui.shadcn.com/docs)
- [@NextJS](https://nextjs.org/docs)
- [@TailwindCSS](https://tailwindcss.com/docs)
- [@Definitions](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [@Vercel](https://vercel.com/docs)
- [@v0.dev](https://v0.dev/docs)

## Using v0.dev Generated Code

To integrate v0.dev generated components into your Next.js project:

1. Generate the desired UI component on v0.dev
2. Copy the generated code or CLI command
3. For new projects:
   ```bash
   npx create-next-app@latest --typescript --tailwind --eslint
   cd your-project-name
   npx v0@latest init
   ```
4. For existing projects:
   ```bash
   npx v0@latest init
   ```
5. Add the component using either:
   - Copy/paste the code into your project
   - Run the CLI command: `npx v0@latest add [component-id]`

6. Use the component in your Next.js pages/components

Remember to test thoroughly for accessibility and security before deploying to production. Refer to the v0.dev documentation for more details on usage, billing, and best practices.

For more information on TypeScript types, refer to the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html) which covers everyday types, creating types from types, functions, objects, narrowing, and more.
