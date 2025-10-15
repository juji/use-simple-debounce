<script lang="ts">
	import { createDebounce } from 'use-simple-debounce/svelte';

	let input = $state('');
	let result = $state('');
	let loading = $state(false);
	let logs = $state<string[]>([]);

	function addLog(message: string) {
		logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`];
	}

	const debounced = createDebounce();

	function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		input = target.value;
		addLog(`Input changed: "${input}"`);
		debounced(async () => {
			loading = true;
			addLog(`Starting async operation for: "${input}"`);

			// Simulate async operation
			await new Promise((resolve) => setTimeout(resolve, 1000));

			result = input.toUpperCase();
			loading = false;
			addLog(`Async operation completed: "${result}"`);
		}, 500);
	}
</script>

<div class="test-case">
	<h3>⚡ Async Function Test</h3>
	<p>Test debouncing with async functions (simulates API call).</p>

	<div class="test-controls">
		<label>
			Input:
			<input
				type="text"
				bind:value={input}
				oninput={handleInputChange}
				placeholder="Type to trigger async operation..."
			/>
		</label>
	</div>

	<div class="test-output">
		<p><strong>Result:</strong> {result}</p>
		<p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
	</div>

	<div class="test-logs">
		<h4>Logs:</h4>
		<div class="logs-container">
			{#each logs as log}
				<div class="log-entry">{log}</div>
			{/each}
		</div>
	</div>
</div>
