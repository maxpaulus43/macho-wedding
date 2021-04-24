<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = '/api/v1/homepage';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: await res.json()
			};
		}
	}
</script>

<script lang="ts">
	export let title: string;
	export let venue: string;
	export let desc: string;
	export let date: string;
	export let imageUrl: string;
</script>

<div>
	<div>{title}</div>
	<div>{venue}</div>
	<div>{desc}</div>
	<div>{date}</div>
	<img src={imageUrl} alt="max and echo looking good" />
</div>
