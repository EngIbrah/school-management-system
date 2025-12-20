# School Management System — UI Dashboard (Frontend)

![Dashboard screenshot](/schoolmate.png)

A modern, role-based dashboard UI for a School Management System (SMS) built with Next.js and Tailwind CSS. This frontend contains reusable components and pages for admins, teachers, students, and parents.

## Status

- UI-ready: components and layouts implemented. Backend integration required to make data dynamic.

## Key Features

- Role-based dashboards: Admin, Teacher, Student, Parent
- Core components: Announcements, Event Calendar, Tables, Forms, Charts, Pagination, Navbar
- Reusable forms: `StudentForm` and `TeacherForm` in `src/components/forms`
- Responsive design using Tailwind CSS

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Repository Structure (frontend)

- `src/app` — App routes and layouts
- `src/components` — UI components (Announcements, Navbar, Table, etc.)
- `src/components/forms` — `StudentForm.tsx`, `TeacherForm.tsx`
- `src/lib` — helper utilities (`calendar.ts`, `data.ts`)
- `public` — static assets

## Quick Start (Development)

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open the app at `http://localhost:3000`.

## Build & Production

- Build:

```bash
npm run build
```

- Start production server:

```bash
npm run start
```

## Configuration & Environment

- Tailwind config: [tailwind.config.ts](tailwind.config.ts)
- Next config: [next.config.mjs](next.config.mjs)
- TypeScript config: [tsconfig.json](tsconfig.json)
- Use `.env.local` for environment variables (e.g. `NEXT_PUBLIC_API_URL`).

## Integrating Backend

The frontend expects REST or GraphQL endpoints for authentication, users, classes, announcements, events, assignments, and results. Update API calls to point to your backend base URL (prefer using `NEXT_PUBLIC_API_URL`).

## Testing & Linting

- Add unit/component tests with Jest and React Testing Library as needed.
- Lint with ESLint:

```bash
npm run lint
```

## Contributing

- Fork → feature branch → Pull Request.
- Keep UI changes focused and update component docs when adding new pieces.

## Accessibility & UX

- Prefer semantic HTML and ARIA attributes for interactive components.
- Verify color contrast and keyboard navigation.

## Credits

- Built with Next.js, React, and Tailwind CSS.

## License

Add your preferred license (e.g., MIT) and include a `LICENSE` file in the repository root.

---

If you'd like, I can also commit this change and open a branch for you.
