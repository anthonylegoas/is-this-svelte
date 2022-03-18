import { writable } from "svelte/store";

const currentTabId = writable(null);
const currentWebsiteUsesSvelte = writable(false);
const nbSvelteSnowflakes = writable(20);

chrome.storage?.sync.get(
  "websiteUsesSvelte",
  ({ websiteUsesSvelte: value }) => {
    currentWebsiteUsesSvelte.set(value);
  }
);

chrome.storage?.sync.get(
  "nbSvelteSnowflakes",
  ({ nbSvelteSnowflakes: value }) => {
    nbSvelteSnowflakes.set(value);
  }
);

chrome.storage?.sync.get("nbSvelteSnowflakes", ({ currentTabId: value }) => {
  currentTabId.set(value);
});

nbSvelteSnowflakes.subscribe((nb) => {
  chrome.storage?.sync.set({ nbSvelteSnowflakes: nb });
});

export { currentTabId, currentWebsiteUsesSvelte, nbSvelteSnowflakes };
