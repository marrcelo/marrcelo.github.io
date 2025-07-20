# AstroPaper Blog Instructions

This document provides instructions for working with the AstroPaper blog codebase.

## Project Overview

This is a static blog website built with the [Astro](https://astro.build/) framework and based on the [AstroPaper](https://github.com/satnaing/astro-paper) theme. Content is written in Markdown, and the site is styled with Tailwind CSS.

Key files and directories:

- `astro.config.ts`: Main Astro configuration file.
- `src/config.ts`: Site-wide configuration (author, title, etc.).
- `src/content/blog/`: Location of Markdown blog posts.
- `src/components/`: Reusable Astro components.
- `src/layouts/`: Page layouts.
- `src/styles/`: Global styles and typography.
- `src/utils/`: Helper functions for posts, tags, and OG images.

## Developer Workflows

### Running the Project

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

The `build` command is crucial. It performs three steps:

1. `astro check`: Type-checks the project.
2. `astro build`: Builds the static site to the `dist/` directory.
3. `pagefind --site dist && cp -r dist/pagefind public/`: Generates a client-side search index with Pagefind and copies it to the `public` directory so it's available in development and production.

### Content Management

Blog posts are Markdown files located in `src/content/blog/`. Each post has frontmatter for metadata like `title`, `pubDatetime`, and `tags`.

To create a new post, add a new `.md` file to this directory.

### Dynamic Open Graph (OG) Images

The site generates dynamic OG images for posts using Satori.

- The generation logic is in `src/pages/og.png.ts`.
- HTML/JSX templates for the images are in `src/utils/og-templates/`.

When creating or modifying OG images, refer to these files.

## Key Conventions

- **Configuration**: All site-level settings (like title, author, posts per page) are managed in `src/config.ts`. Do not hardcode these values in components or pages.
- **Styling**: Use Tailwind CSS utility classes for styling. Custom styles are defined in `src/styles/global.css` and `src/styles/typography.css`.
- **Post Queries**: Use the helper functions in `src/utils/` to fetch and process blog posts. For example, `getSortedPosts()` retrieves all posts, and `getPostsByTag()` filters them by a specific tag.
- **Search**: The search functionality is powered by Pagefind. After any content change, the `npm run build` command must be run to update the search index.
