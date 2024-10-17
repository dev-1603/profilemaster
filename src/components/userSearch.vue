<template>
  <div class="tw-flex  tw-justify-between tw-mb-5">

    <v-card
      class="mx-auto tw-w-full"
      color="surface-light"
      max-width="900"
    >
      <v-card-text>
        <v-text-field
          v-model="searchQuery"
          append-inner-icon="mdi-magnify"
          clearable
          density="compact"
          hide-details
          label="Search Users"
          :loading="loading"
          single-line
          variant="solo"
          @click:clear="handleSearch"
          @update:modelValue="handleSearch"
        />
        <!-- @click:append-inner="onClick" -->
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['search'])

  const searchQuery = ref('')
  const loading = ref(false)
  const debounce = (func: Function, wait: number) => {
    let timeout: number | undefined
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = window.setTimeout(() => func(...args), wait)
    }
  }

  const handleSearch = debounce((modelvalue) => {
    // Implement your search logic here
    // console.log('Search query:', modelvalue, searchQuery.value)
    emits('search', searchQuery.value ?? '')
  }, 300)

</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  /* border: 1px solid #ccc; */
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
