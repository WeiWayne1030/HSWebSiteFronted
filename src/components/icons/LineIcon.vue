<template>
  <a
    href="https://www.facebook.com/" 
    target="_blank"
    @click="handleClick"
    class="btn btn-fb nav-item footer-link"
  >
    <n-icon size="40" scolor="#ffffff" class="btn btn-fb nav-item footer-link"  >
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="LINE" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#00B900"></rect><path d="m443 231c-2 45-21 76-51 103-53 47-137 105-148 96-11-14 21-47-20-52-88-12-155-74-155-147 0-82 85-150 188-150s189 68 186 150z" fill="#ffffff"></path><path d="m371 232h-34m34-36h-36v72h36m-123 0v-72l54 72v-72m-89 72v-72m-66 0v72h37" fill="none" stroke="#00B900" stroke-linecap="round" stroke-linejoin="round" stroke-width="21"></path></g></svg>
    </n-icon>
  </a>
</template>

<script setup>
import { NIcon } from 'naive-ui'
</script>
