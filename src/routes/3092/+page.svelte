<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Dashboard</h1>

<h3>{data.cto3092.name}</h3>
<p>{data.cto3092.cto}</p>
