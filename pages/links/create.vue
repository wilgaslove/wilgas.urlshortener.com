<template>
  <AppHeader />
  <div class="prose">
    <h1 >Créer un nouveau lien</h1>
    <GoBack />
  </div>
  <div class="">
    <form >
      <label >
        <div >Lien Complet</div>
        <input type="text">
      </label>
      <NuxtLink to="/links/edit" class="btn">Créer le lien</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
form {
  width: 30%;
}

form label {
  margin-inline: 1%;
  margin-block: 4%;
}
</style>