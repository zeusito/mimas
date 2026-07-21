<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import {
		MailIcon,
		InboxIcon,
		PresentationIcon,
		UsersRoundIcon,
		ChartLine,
		House
	} from '@lucide/svelte';
	import AppUser from './app-user.svelte';
	import { page } from '$app/state';

	type Props = {
		firstName: string;
		lastName: string;
		email: string;
	};

	const items = {
		actions: [
			{ title: 'Dashboard', url: '/dashboard', icon: House },
			{ title: 'Action 1', url: '/action-1', icon: MailIcon },
			{ title: 'Action 2', url: '/action-2', icon: InboxIcon },
			{ title: 'Action 3', url: '/action-3', icon: PresentationIcon },
			{ title: 'Action 4', url: '/action-4', icon: UsersRoundIcon },
			{ title: 'Action 5', url: '/action-5', icon: ChartLine }
		]
	};

	let props: Props = $props();
	const initials = $derived(`${props.firstName.charAt(0)}${props.lastName.charAt(0)}`);
</script>

<Sidebar.Root collapsible="offcanvas" variant="inset">
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<img class="size-10! w-auto" src="/colorful-logo.png" alt="My App" />
							<span class="text-2xl font-semibold text-primary">My App</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Your Actions</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items.actions as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={item.url === page.url.pathname}>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<AppUser {initials} userName={props.firstName} email={props.email} />
	</Sidebar.Footer>
</Sidebar.Root>
