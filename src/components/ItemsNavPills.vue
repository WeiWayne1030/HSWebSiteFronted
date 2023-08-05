<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link
        class="nav-link"
        to="/items"
      >
        全部
      </router-link>
    </li>

    <li
      v-for="category in categories"
      :key="category.id"
      class="nav-item"
    >
      <router-link
        class="nav-link"
        :to="{ name:'Items', query: { categoryId: category.id } }"
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

