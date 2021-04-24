<h1 class="text-2xl text-center">Login</h1>
<div class="p-5">
	<form class="flex flex-col">
		<input type="text" placeholder="First name" required />
		<input type="text" placeholder="Last name" required />
		<input type="text" placeholder="Phone number" required />
		<input type="submit" value="Log In" class="rounded p-1" />
	</form>
</div>

<style lang="postcss">
	input[type='text'] {
		@apply border-2 border-gray-200 mb-1 rounded p-1;
	}
</style>
