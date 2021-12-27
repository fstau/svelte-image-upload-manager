<script lang="ts">
  import IconBack from "../components/icons/IconBack.svelte";
  import IconInfo from "../components/icons/IconInfo.svelte";
  import { route } from "../store/navigation";
  import About from "../views/About.svelte";
  import Default from "../views/Default.svelte";
  import Details from "../views/Details.svelte";

  let routeDisplayName = "";
  $: switch ($route) {
    case "default":
      routeDisplayName = "Upload images";
      break;
    case "detail":
      routeDisplayName = "Image details";
      break;
    case "about":
      routeDisplayName = "About";
      break;
  }
</script>

<div class="container">
  <nav>
    <div class="back-button nav-element">
      {#if $route !== "default"}
        <button class="back-button nav-element" on:click={route.toDefault}>
          <IconBack />
        </button>
      {/if}
    </div>
    <span>{routeDisplayName}</span>
    <div class="link">
      <button on:click={route.toAbout}>
        <IconInfo />
      </button>
    </div>
  </nav>

  {#if $route === "default"}
    <Default />
  {:else if $route === "detail"}
    <Details />
  {:else if $route === "about"}
    <About />
  {/if}
</div>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/fonts";
  $navbar-height: 50px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    nav {
      height: $navbar-height;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: $color-sky-darkest;

      span {
        font-family: $font-sans;
        font-weight: 400;
      }

      .nav-element {
        height: $navbar-height;
        cursor: pointer;
      }

      .back-button {
        width: $navbar-height;
        font-size: $font-medium;
        font-weight: 300;
      }

      button {
        background-color: rgba(1, 1, 1, 0);
        color: $color-slate-light;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
  nav > span {
    color: white;
  }
  nav > .link {
    display: flex;
    flex-direction: row;
  }
</style>
