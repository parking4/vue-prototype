<template>
  <d-container fluid>
    <d-row>
      <d-col lg="12" md="12" sm="12">
        <main-navbar/>
      </d-col>
      <d-col class="main-content" tag="main" lg="12" md="12" sm="12">
        <!-- Content -->
        <slot/>
      </d-col>
      <d-col lg="12" md="12" sm="12">
        <main-footer/>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from "@/data/nav-items";

// Main layout components
import MainNavbar from "@/components/layout/MainNavbar/MainNavbar.vue";
import MainFooter from "@/components/layout/MainFooter/MainFooter.vue";

export default {
  name: "app",
  components: {
    MainNavbar,
    MainFooter
  },
  data() {
    return {
      sidebarItems: getSidebarItems()
    };
  }
};
</script>

