<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/shared/app-sidebar.svelte';
	import AppHeader from '$lib/components/shared/app-header.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar
		firstName={data.principal.given_name}
		lastName={data.principal.family_name}
		email={data.principal.email}
	/>
	<Sidebar.Inset>
		<AppHeader />
		<main class="min-h-full flex flex-col w-full p-4 max-w-7xl mx-auto">
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
