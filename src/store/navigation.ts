import { writable } from "svelte/store";

export type Route = "default" | "detail" | "about";
const defaultRoute: Route = "default";

const createNavigationStore = () => {
  const { subscribe, set, update } = writable<Route>(defaultRoute);
  return {
    subscribe,
    navigate: (nextRoute: Route) => {
      set(nextRoute);
    },
    toDefault: () => {
      set("default");
    },
    toDetail: () => {
      set("detail");
    },
    toAbout: () => {
      set("about");
    },
  };
};

export const route = createNavigationStore();
