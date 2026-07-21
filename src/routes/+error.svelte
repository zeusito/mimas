<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

{#if page.status === 404}
	<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
		<div class="text-center">
			<p class="text-base font-semibold text-orange-700">404</p>
			<h1 class="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900">
				Page not found
			</h1>
			<p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button href="/dashboard" variant="default">Go back home</Button>
			</div>
		</div>
	</main>
{:else}
	<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
		<div class="text-center">
			<p class="text-base font-semibold text-orange-700">500</p>
			<h1 class="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900">
				Oops! Something went wrong
			</h1>
			<p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
				Sorry, we couldn’t process your request at this time.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button href="/dashboard" variant="default">Go back home</Button>
			</div>
		</div>
	</main>
{/if}
