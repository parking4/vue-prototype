<template>
  <div :class="['main-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']" style="box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;">
    <d-navbar toggleable="md" type="light">
      <d-navbar-nav>
        <d-nav-item href="/"><h6 style="margin-top:10px">Park4</h6></d-nav-item>
      </d-navbar-nav>
      <navbar-search/>
      <navbar-nav/>
      <navbar-toggle/>
    </d-navbar>
  </div>
</template>

<script>
import NavbarSearch from "./NavbarSearch.vue";
import NavbarNav from "./NavbarNav.vue";
import NavbarToggle from "./NavbarToggle.vue";

export default {
  components: {
    NavbarSearch,
    NavbarNav,
    NavbarToggle
  },
  props: {
    /**
     * Whether the main navbar should be sticky, or not.
     */
    stickyTop: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.main-navbar {
  .dropdown-menu {
    display: block;
  }
}
</style>
