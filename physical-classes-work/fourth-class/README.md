
---

# My Class 4: Building a One-Page Website with Next.js and Tailwind CSS

## Overview
In this class, we explored how to build a one-page website using Next.js integrated with Tailwind CSS. We covered important concepts, configurations, and best practices to enhance our development workflow.

## Key Concepts Covered

### 1. **ESLint Rules**
- ESLint helps identify unused imports and enforces best practices.
- If you don't use `src` folder, the project will still run, but having it improves folder structure and management.

### 2. **Tailwind CSS**
- A utility-first CSS framework that allows us to use predefined classes to style elements directly in our HTML.
- Unlike Bootstrap, which offers predefined components that can be challenging to customize, Tailwind CSS simplifies CSS writing by providing built-in classes.
- Tailwind enables easy responsive design using classes without the need for media queries.

### 3. **Using App Router**
- Opting for the App Router is crucial for utilizing the latest features of Next.js, including `page.tsx`, `layout.tsx`, and enhanced rendering capabilities.
- If you choose "no," your project will not utilize the latest features.

### 4. **Project Setup**
- Run the command: 
  ```bash
  npx create-next-app@latest
  ```
- Open Visual Studio Code.
- Configure Tailwind CSS by creating the `tailwind.config.ts`, `postcss.config.mjs`, and ensure the following lines are present in `globals.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 5. **HTML Structure for SEO**
- Use semantic HTML tags like `<main>` for better SEO. 
- Best practice is to have a single `<h1>` tag per page.

### 6. **Tailwind CSS Utility Classes**
- Tailwind CSS overrides default HTML styling to create a consistent design.
- Example of using utility classes:
  ```html
  <main>
      <h1 className="text-red-500">Hello World</h1>
  </main>
  ```

### 7. **Component Creation**
- Create reusable components for better code management.
- Example of a simple header component:
  ```tsx
  // header.tsx
  export default function Header() {
      return (
          <header className="flex justify-between">
              <div>
                  <h1 className="text-2xl font-semibold">My Logo</h1>
              </div>
              <nav>
                  <ul className="flex gap-x-5">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/">About</Link></li>
                      <li><Link href="/">Contact</Link></li>
                  </ul>
              </nav>
          </header>
      )
  }
  ```

### 8. **Development Commands**
- To run the project efficiently, use:
  ```bash
  npm run dev --turbo
  ```

## Assignment
Create a one-page website using Next.js and Tailwind CSS, implementing the lessons learned during this class.
