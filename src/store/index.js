import { writable } from "svelte/store";

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

export { currentWebsiteUsesSvelte, nbSvelteSnowflakes };
