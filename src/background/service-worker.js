import {
  defaultNbSvelteSnowflakes,
  getSvelteSnowflakeContent,
  getSvelteSnowflakeStyle,
  snowflakesIndicatorName,
} from "./indicators/snowflakes";
import { documentUseSvelte } from "./svelte-detection";

chrome.runtime.onInstalled.addListener(() =>
  chrome.storage.sync.set({
    selectedIndicator: snowflakesIndicatorName,
    nbSvelteSnowflakes: defaultNbSvelteSnowflakes,
  })
);
chrome.webNavigation.onCompleted.addListener(() =>
  webNavigationCompletedHandler()
);

const webNavigationCompletedHandler = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: detectSvelteUsage,
  });
};

const detectSvelteUsage = () => {
  // Detect if svelte is used in the loaded document.
  if (documentUseSvelte(document)) {
    // Get the selected indicator to inform of the svelte usage.
    chrome.storage.sync.get("selectedIndicator", ({ selectedIndicator }) => {
      // Check if the snowflakes indicator is selected.
      // @todo find why it doesn't with "selectedIndicator === snowflakesIndicatorName" :thinking:
      if (selectedIndicator === "snowflakes") {
        // Display it.
        chrome.storage.sync.get(
          "nbSvelteSnowflakes",
          ({ nbSvelteSnowflakes }) => {
            console.warn("dlkfrdlgk");
            for (let i = 0; i < nbSvelteSnowflakes; i++) {
              const snowflake = document.createElement("div");
              const inner = getSvelteSnowflakeContent();
              const style = getSvelteSnowflakeStyle();
              snowflake.innerHTML = inner;
              snowflake.style = style;
              document.body.appendChild(snowflake);
              setTimeout(() => snowflake.remove(), 1300);
            }
          }
        );
      }
    });
  }
};
