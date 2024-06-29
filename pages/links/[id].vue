<template>

  <AppHeader />
  <div class="mx-auto max-w-md prose">

    <h1>Modifiez un lien</h1>

    <GoBack />
  
    <form>
      <label>
        <div>Lien Court</div>
        <input type="text">
      </label>
      <label>
        <div>Lien Complet</div>
        <input type="text">
      </label>
      <NuxtLink to="/links/edit" class="btn">Modifier le lien</NuxtLink>
    

    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>