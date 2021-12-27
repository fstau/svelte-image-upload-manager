<script lang="ts">
  import { images } from "../store/images";
  import ImagePreview from "./ImagePreview.svelte";
</script>

<div class="container">
  {#if $images.length > 0}
    <div class="preview-grid">
      {#each $images as image, i}
        <ImagePreview {image} key={i} />
      {/each}
    </div>
  {:else}
    <p>Select images to enable preview...</p>
  {/if}
</div>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/fonts";
  @import "../styles/spacing";

  .container {
    height: 100%;
    margin: $default-margin;
    background-color: $color-slate-light;
    border: 1px solid $color-slate-medium;
    overflow-y: scroll;

    p {
      font-size: $font-extrasmall;
    }
  }

  .preview-grid {
    margin: auto;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
  }
</style>
