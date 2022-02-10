const documentUseSvelte = (document) =>
  document.querySelectorAll('[class^="svelte-"]')?.length > 0;

export { documentUseSvelte };
