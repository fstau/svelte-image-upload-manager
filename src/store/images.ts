import { derived, writable } from "svelte/store";
import { readFileAsync } from "../util/files";

export type ImageObject = {
  name: string;
  data: string;
};

const createImageStore = () => {
  const { subscribe, set, update } = writable<ImageObject[]>([]);
  return {
    subscribe,
    set,
    update,
    load: async (files: FileList) => {
      let updated: ImageObject[] = [];
      for (const file of files) {
        const data = await readFileAsync(file);
        updated.push({
          name: file.name,
          data: data,
        });
      }
      set(updated);
      selectedImage.reset();
    },
  };
};

export const images = createImageStore();

const createSelectedImageStore = () => {
  const { subscribe, set, update } = writable<number>(null);
  return {
    subscribe,
    set,
    update,
    reset: () => {
      set(null);
    },
  };
};

export const selectedImage = createSelectedImageStore();
