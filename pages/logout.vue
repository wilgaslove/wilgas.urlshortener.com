<template>
  <div>
    Deconnexion ...
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

  definePageMeta({
    layout: 'simple',
  })

  onMounted(async () => {
    await axios.post('/logout');
    useRouter().replace('/login');
  })

</script>

<style>

</style>