# GEMINI.md

## Project Overview

This is a Next.js and TypeScript project for the "WA Waler Horse Project". The purpose of the website is to raise awareness and support for the Waler horse, an iconic Australian breed. The site features information about the horses, a way to donate, and a shop.

The project is built with the following technologies:

*   **Framework:** Next.js (a React framework)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Forms:** React Hook Form and Zod for validation
*   **E-commerce:** Snipcart
*   **UI Components:**
    *   `embla-carousel-react` for carousels
    *   `lucide-react` for icons

The project has a well-defined structure, with pages in `src/app`, reusable components in `src/components`, and shared constants and utilities in `src/lib`.

## Building and Running

To get the project running locally, you'll need Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Run in production mode:**
    ```bash
    npm run start
    ```

5.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** Reusable components are located in the `src/components` directory and are organized by feature (e.g., `home`, `about`, `shop`).
*   **Constants:** Shared constants, such as site name, navigation links, and API keys, are stored in `src/lib/constants.ts`.
*   **Types:** Custom TypeScript types are defined in the `src/types` directory.
*   **Environment Variables:** The project uses environment variables for sensitive information like API keys. A `.env.local` file should be created to store these variables. An example can be inferred from `src/lib/constants.ts` and `src/app/layout.tsx`.
    *   `NEXT_PUBLIC_SITE_URL`: The public URL of the site.
    *   `NEXT_PUBLIC_GOFUNDME_URL`: The URL for the GoFundMe donation page.
    *   `NEXT_PUBLIC_SNIPCART_API_KEY`: The API key for Snipcart.
