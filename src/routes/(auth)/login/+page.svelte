<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let isWorking = $state(false);
	let showError = $state(false);
	let props: PageProps = $props();

	$effect(() => {
		if (!props.form?.failure) {
			showError = false;
			return;
		}

		showError = true;
		const timeout = setTimeout(() => {
			showError = false;
		}, 2000);

		return () => clearTimeout(timeout);
	});
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
			class="mx-auto h-10 w-auto"
		/>
		<h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
			Sign in to your account
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		{#if showError}
			<div role="alert" class="alert alert-error alert-soft">
				<span>Invalid email or password.</span>
			</div>
		{/if}
		<form
			method="POST"
			class="space-y-6"
			use:enhance={() => {
				isWorking = true;

				return async ({ update }) => {
					await update();
					isWorking = false;
				};
			}}
		>
			<fieldset class="fieldset">
				<legend class="fieldset-legend">Email</legend>
				<input
					type="email"
					class="input input-bordered w-full"
					placeholder="Email"
					name="email"
					maxlength="255"
					required
				/>
			</fieldset>
			<fieldset class="fieldset">
				<legend class="fieldset-legend">Password</legend>
				<input
					type="password"
					class="input input-bordered w-full"
					placeholder="Password"
					name="password"
					minlength="8"
					maxlength="30"
					required
				/>
			</fieldset>
			<div>
				<button type="submit" class="btn btn-primary w-full" disabled={isWorking}>
					{isWorking ? 'Signing in...' : 'Sign in'}
				</button>
			</div>
		</form>

		<p class="mt-10 text-center text-sm/6 text-gray-500">
			Not a member?
			<a href="/register" class="font-semibold text-secondary"> Start a 14 day free trial </a>
		</p>
	</div>
</div>
