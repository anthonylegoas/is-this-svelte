import { derived, writable } from "svelte/store";

// Stacks all visited routes.
const history = writable([]);

// Returns the latest visited route from the history.
const currentRoute = derived(history, ($history) => $history.slice(-1)[0]);

export { currentRoute };
