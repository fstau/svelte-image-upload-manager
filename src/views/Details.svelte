<script lang="ts">
  import type { ImageObject } from "../store/images";
  import { images, selectedImage } from "../store/images";
  import { downloadImage, rotateImage90Deg } from "../util/images";

  let image: ImageObject;
  $: image = $images[$selectedImage];

  const download = () => {
    downloadImage(image.data);
  };

  const rotate = () => {
    images.update((current) => {
      current[$selectedImage].data = rotateImage90Deg(image.data);
      return current;
    });
  };
</script>

<div class="container">
  {#if $selectedImage != null}
    <div class="image-container">
      <img src={image.data} alt="" />
    </div>
    <div class="toolbar">
      <button class="btn" on:click={download}>Download</button>
      <p>{image.name}</p>
      <button class="btn" on:click={rotate}>Rotate</button>
    </div>
  {:else}
    <p>No image selected...</p>
  {/if}
</div>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/fonts";
  @import "../styles/spacing";
  @import "../styles/global";

  .container {
    height: 100%;
    margin: 0.5em;
    display: flex;
    flex-direction: column;
  }
  .image-container {
    height: 100%;
    flex-grow: 1;
    position: relative;
    background-color: $color-slate-light;
    border: 1px solid $color-slate-medium;
  }
  img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: $default-margin;

    p {
      font-size: $font-extrasmall;
      margin: 0 $default-margin;
    }
  }
</style>
