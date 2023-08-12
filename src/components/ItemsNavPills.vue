<template>
  <div>
    <ul class="nav nav-pills mb-4">
      <li class="nav-item">
        <router-link class="nav-link" to="/items">
          全部
        </router-link>
      </li>

      <li v-for="category in categories" :key="category.id" class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Items', query: { categoryId: category.id } }"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array, // Change the type to Array
      required: true,
    },
  },
};
</script>

<style>
/* Your existing styles here */
</style>
