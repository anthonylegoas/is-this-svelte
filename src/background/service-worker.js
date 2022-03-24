import { documentUseSvelte } from "./detection/svelte-detection";
import {
  defaultNbSvelteSnowflakes,
  getSvelteSnowflakeContent,
  getSvelteSnowflakeStyle,
  snowflakesIndicatorName,
} from "./indicators/snowflakes";

chrome.runtime.onInstalled.addListener(() =>
  chrome.storage.sync.set({
    websiteUsesSvelte: false,
    selectedIndicator: snowflakesIndicatorName,
    nbSvelteSnowflakes: defaultNbSvelteSnowflakes,
  })
);

chrome.webNavigation.onCompleted.addListener(() =>
  webNavigationCompletedHandler()
);

chrome.tabs.onActivated.addListener(() => tabsActivatedHandler());

const webNavigationCompletedHandler = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: detectSvelteUsage,
  });
};

const tabsActivatedHandler = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: detectSvelteUsage,
    // function: detectSvelteUsageWithoutAnimation,
  });
};

const detectSvelteUsageWithoutAnimation = () => {
  if (documentUseSvelte(document)) {
    chrome.storage.sync.set({ websiteUsesSvelte: true });
  } else {
    chrome.storage.sync.set({ websiteUsesSvelte: false });
  }
};

const detectSvelteUsage = () => {
  // Detect if svelte is used in the loaded document.
  if (documentUseSvelte(document)) {
    // Indicate that Svelte is used.
    chrome.storage.sync.set({ websiteUsesSvelte: true });
    // Get the selected indicator to inform of the svelte usage.
    chrome.storage.sync.get("selectedIndicator", ({ selectedIndicator }) => {
      // Check if the snowflakes indicator is selected.
      // @todo find why it doesn't work with "selectedIndicator === snowflakesIndicatorName" :thinking:
      if (selectedIndicator === "snowflakes") {
        // Display it.
        chrome.storage.sync.get(
          "nbSvelteSnowflakes",
          ({ nbSvelteSnowflakes }) => {
            for (let i = 0; i < nbSvelteSnowflakes; i++) {
              const snowflake = document.createElement("div");
              const inner = getSvelteSnowflakeContent();
              const { animationDuration, css } = getSvelteSnowflakeStyle();
              snowflake.innerHTML = inner;
              snowflake.style = css;
              document.body.appendChild(snowflake);
              setTimeout(() => snowflake.remove(), animationDuration);
            }
          }
        );
      }
    });
  } else {
    chrome.storage.sync.set({ websiteUsesSvelte: false });
  }
};
