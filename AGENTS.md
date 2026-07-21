# Agent Rules

These rules apply to all tasks and code changes made within the `mimas` repository.

## Tech Stack

This project is built using the following technologies:

- **Framework**: SvelteKit 2 + Svelte 5 (using runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [shadcn-svelte](https://www.shadcn-svelte.com/)
- **Database & ORM**: Drizzle ORM + PostgreSQL (`pg`)
- **Authentication**: [Kinde Auth](https://www.kinde.com/)
- **Validation**: Zod
- **Testing**: Vitest + Vitest Browser Svelte

## Skills

This project uses skills installed from [skills.sh](https://skills.sh).
In order to install skills, use the following command:

```bash
pnpm dlx skills add <skill-name>
```

## Component library rules

This project uses shadcn-svelte for UI components. There is a skill installed for this. In order to add a new component, use the following command:

```bash
pnpm dlx shadcn-svelte@latest add <component-name>
```

Adhere to the following guidelines when working with components:

- Before adding a new component, make sure it's not already installed. Use the skill command to check for existing components.
- Always try to use shadcn-svelte components when possible, if you can't find a component that suits your needs, then it's ok to implement it yourself, but make sure it is well documented and reusable.
- Never modify the appearance of a component in a way that breaks its intended purpose or accessibility.

## Code Quality & Best Practices

1. **State Management (Svelte 5 Runes)**:
   - Use `$state()`, `$derived()`, `$props()`, and `$effect()` runes exclusively for state and reactivity. Avoid legacy store APIs (`writable`, `derived`) unless interacting with external libraries that require them.
   - Use `$derived()` for computed state. Limit `$effect()` usage to synchronization with external systems or side-effects, keeping them minimal and well-documented.

2. **Architecture & Directory Structure**:
   - **Shared Schemas/Models**: Keep validation schemas (Zod) in `$lib/models/` so they can be shared and imported by both server-side action validation and client-side form feedback.

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

8. **Linting, Formatting, Checking & Tests**:
   - Always run `pnpm format` before committing.
   - Always run `pnpm lint` before committing.
   - Always run `pnpm check` before committing.
   - Always run `pnpm test` before committing.
