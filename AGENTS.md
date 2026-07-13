# Agent Rules

These rules apply to all tasks and code changes made within the `mimas` repository.

## Tech Stack

This project is built using the following technologies:

- **Framework**: SvelteKit 2 + Svelte 5 (using runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + daisyUI v5
- **Database & ORM**: Drizzle ORM + SQLite (`better-sqlite3`)
- **Authentication**: Better-Auth
- **Validation**: Zod
- **Testing**: Vitest + Vitest Browser Svelte

## Code Quality & Best Practices

1. **State Management (Svelte 5 Runes)**:
   - Use `$state()`, `$derived()`, `$props()`, and `$effect()` runes exclusively for state and reactivity. Avoid legacy store APIs (`writable`, `derived`) unless interacting with external libraries that require them.
   - Use `$derived()` for computed state. Limit `$effect()` usage to synchronization with external systems or side-effects, keeping them minimal and well-documented.

2. **Architecture & Directory Structure**:
   - **Shared Schemas/Models**: Keep validation schemas (Zod) in `$lib/models/` (e.g., `$lib/models/login.ts`) so they can be shared and imported by both server-side action validation and client-side form feedback.
   - **Server-Only Logic**: Keep direct database interaction, authentication instance usage (`auth`), and business-critical operations inside `$lib/server/` or server routes.
   - **Components**: Components should be modular, reusable, and structured with clear TypeScript props. Use daisyUI elements combined with Tailwind classes instead of writing custom CSS.

3. **Error Handling & User Feedback**:
   - SvelteKit Actions should return typed failure structures using `fail(...)` from `@sveltejs/kit` on validation or runtime errors.
   - Implement try/catch blocks in Actions/endpoints and log errors on the server side before returning a sanitized fail state to the client.
   - Never show raw internal exceptions or database error messages directly in the client UI.

4. **TypeScript and Type Safety**:
   - Write fully typed code. Avoid using `any` or loose types (unless absolutely necessary).
   - Ensure SvelteKit endpoints and load functions utilize typing constructs correctly (e.g., `satisfies Actions` to preserve type safety).
   - Use explicit validation schema parsing output types where applicable.

5. **Database & Server-Client Isolation**:
   - All database queries, ORM calls, and direct database connections must run **strictly** on the server side.
   - Do **NOT** import database clients, configuration, or schemas into client-side code (e.g., standard `+page.ts`, `+layout.ts`, or `.svelte` files).
   - Use SvelteKit `+page.server.ts`, `+layout.server.ts`, or API routes (`+server.ts`) to interact with the database.

6. **Data Serialization and Protection**:
   - Ensure only safe, serialized data is returned from the server `load` functions or API endpoints to the client.
   - Never leak database connection strings, credentials, raw database models/records, or sensitive user fields (e.g., password hashes) to the client.

7. **Validation**:
   - Validate and sanitize all user input on the server side before performing database operations.
