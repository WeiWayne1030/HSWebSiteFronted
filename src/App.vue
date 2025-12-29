<template>
  <div class="site-root">
    <template v-if="isAdmin">
      <AdminLayoutNav />
      <AdminLayoutHeader />
    </template>
    <template v-else>
      <LayoutNav />
      <LayoutHeader v-if="!hideHeader" />
    </template>
    <main class="site-main">
      <RouterView />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import AdminLayoutNav from '@/views/Admin/adminComponent/LayoutNav.vue'
import AdminLayoutHeader from '@/views/Admin/adminComponent/LayoutHeader.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hideHeader = computed(() => !!(route.meta && route.meta.hideHeader))
const isAdmin = computed(() => !!(route.meta && route.meta.isAdmin) || route.path?.startsWith('/admin'))
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
