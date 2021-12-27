<script lang="ts">
  import Router from "./router/Router.svelte";
</script>

<div class="modal">
  <Router />
</div>

<style lang="scss">
  @import "./styles/fonts";
  .modal {
    font-family: $font-sans;

    background-color: white;
    box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);
    text-align: center;
    max-width: 80vw;
    height: 80vh;
    margin-top: 8vh;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
  }
</style>
