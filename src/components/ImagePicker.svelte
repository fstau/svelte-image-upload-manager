<script lang="ts">
  import { images } from "../store/images";

  let files: FileList;

  $: if (files) {
    console.log("loading files");
    images.load(files);
  }

  const upload = () => {};
</script>

<div class="toolbar">
  <div class="picker">
    <input
      id="file-picker"
      type="file"
      accept="image/png, image/jpeg"
      multiple
      bind:files
      hidden
    />
    <label class="btn" for="file-picker">Choose images</label>
  </div>

  <div>
    {#if $images.length > 0}
      <button class="btn" on:click={upload}
        >Upload {$images.length}
        {$images.length == 1 ? "image" : "images"}</button
      >
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/fonts";
  @import "../styles/spacing";

  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: $default-margin;

    .picker {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .btn {
      background-color: $color-sky-darkest;
      color: $color-slate-light;
      padding: $default-margin;
      font-family: $font-sans;
      font-size: $font-extrasmall;
      cursor: pointer;
      border: none;
      margin-left: $default-margin;
      margin-right: $default-margin;
    }
  }
</style>
