<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { page } from '$app/state';

	const inferTitle = (path: string) => {
		return path.charAt(0).toUpperCase() + path.slice(1);
	};
</script>

<header class="flex h-16 shrink-0 items-center gap-2 border-b">
	<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
		<Sidebar.Trigger class="-ms-1" />
		<Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
		<h1 class="text-base font-medium">{inferTitle(page.url.pathname)}</h1>
	</div>
</header>
