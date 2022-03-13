import { writable } from "svelte/store";

const currentWebsiteUsesSvelte = writable(false);

chrome.storage?.sync.get("websiteUsesSvelte", ({ websiteUsesSvelte }) => {
  currentWebsiteUsesSvelte.set(websiteUsesSvelte);
});

export { currentWebsiteUsesSvelte };
