<script lang="ts">
    import type { LayoutData } from './$types';
    import type { Snippet } from 'svelte';
    import Navbar from '$lib/components/shared/navbar.svelte';

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Navbar />
<main class="min-h-full flex flex-col w-full p-4 max-w-5xl mx-auto">
    {@render children?.()}
</main>