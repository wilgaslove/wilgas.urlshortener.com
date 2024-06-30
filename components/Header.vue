<template>
  <div class="shadow-md shadow-gray900 w-full bg-silver bg-gray-900">
    <div 
    class="justify-center container mx-auto items-center flex text-white top-0 py-3 flex-wrap justify-between">
      <NuxtLink to="/" class="text-3xl font-semibold">URLShortify</NuxtLink>

      <div class="flex justify-center items-center gap-5">
        <ul class="flex justify-center items-center gap-[40px] text-m" >
          <NuxtLink to="/profiles">Profils</NuxtLink>
          <NuxtLink to="/links">Lien</NuxtLink>
        </ul>
        <NuxtLink to="/auth/logout" class="flex gap-[40px] text-m">
          <Icon nema="ri:logout-circle-r-line"></Icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>