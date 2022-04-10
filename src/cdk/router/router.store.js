import { derived, writable } from "svelte/store";

// Stacks all visited routes.
const history = writable([]);

// Returns the latest visited route from the history.
const currentRoute = derived(history, ($history) => $history.slice(-1)[0]);

/**
 * Allow to navigate to a specific route.
 * @param path The route path.
 * @param comesFrom The direction from where comes form the route.
 */
const goTo = (path, comesFrom = "right") =>
  history.update((value) => {
    return [...value, { path, comesFrom }];
  });

/**
 * Allow to navigate to the route before current one.
 */
const goBack = () =>
  history.update((value) => {
    const currentRoute = value[value.length - 1];
    let lastRoute;
    routePath.forEach((value, key) => {
      if (value === currentRoute.path)
        lastRoute =
          key === 1 || routePath[key - 1].includes("/")
            ? routePath[key - 1]
            : routePath[key - 2];
    });

    return lastRoute
      ? [
          ...value,
          {
            path: lastRoute,
            comesFrom: "left",
          },
        ]
      : value;
  });

export { currentRoute, goTo, goBack };
