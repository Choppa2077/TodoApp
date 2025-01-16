# TodoApp

A simple and functional Todo application built with modern technologies such as Next.js, TypeScript, Zustand, TailwindCSS, ShadCN, Zod, and TanStack Query.

## Features

- **Task Management**: Add, update, delete, and filter tasks.
- **Responsive Design**: Fully responsive layout for desktop and mobile.
- **State Management**: State managed using Zustand.
- **Data Validation**: Input forms validated with Zod.
- **Server-Side Rendering (SSR)**: Built with Next.js for optimal performance.
- **UI Components**: Styled with TailwindCSS and ShadCN for reusable components.
- **Data Fetching**: Uses TanStack Query for efficient server-state management.

---

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production-grade applications.
- [TypeScript](https://www.typescriptlang.org/) - Static type checking.
- [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management library.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [ShadCN](https://shadcn.dev/) - Accessible and reusable UI components.
- [Zod](https://zod.dev/) - Type-safe schema validation.
- [TanStack Query](https://tanstack.com/query/v4) - Server-state management.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- Package manager ([npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/))

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
2. Install dependencies 
    npm install
    # or
    yarn install
    # or
    pnpm install
3. Start the development server
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
4. Open http://localhost:3000 in your   browser to see the app.
    # npm run dev
    or
    # yarn dev
    or
    # pnpm dev

Folder structure
📂 src
├── 📂 app         # Next.js app directory
├── 📂 components  # Reusable components
├── 📂 hooks       # Custom React hooks
├── 📂 store       # Zustand store
├── 📂 types       # TypeScript types and interfaces
├── 📂 utils       # Helper functions
