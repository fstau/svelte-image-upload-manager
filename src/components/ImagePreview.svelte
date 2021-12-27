<script lang="ts">
  import type { ImageObject } from "../store/images";
  import { selectedImage } from "../store/images";
  import { route } from "../store/navigation";

  export let image: ImageObject;
  export let key: number;

  let highlighted: boolean = false;

  $: if ($selectedImage === key) {
    highlighted = true;
  } else {
    highlighted = false;
  }

  const selectImage = () => {
    if (highlighted) {
      route.toDetail();
      return;
    }
    selectedImage.set(key);
  };
</script>

<div
  class="preview-card {highlighted ? 'highlighted' : ''}"
  on:click={selectImage}
>
  <img src={image.data} alt={image.name} />
  <span>{image.name}</span>
</div>

<style lang="scss">
  .preview-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: solid black;
    margin: 1em;
    aspect-ratio: 2;
  }

  .highlighted {
    border: solid red;
  }

  img {
    max-width: 250px;
  }
</style>
