<script setup>
  import Alerta from './components/Alert.vue';
  import Clima from './components/Clima.vue';
  import Formulario from './components/Form.vue';
  import Spinner from './components/Spinner.vue';
  import useClima from './composables/useClima';

  const { obtenerClima, clima, mostraClima, cargando, error } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario 
      @obtener-clima="obtenerClima"
    />

    <Spinner v-if="cargando"/>
    <Alerta v-if="error">{{ error }}</Alerta>

    <Clima 
      v-if="mostraClima"
      :clima="clima"
    />
  </div>
</template>

<style scoped>
</style>
