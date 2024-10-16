<template>
  <div>
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps<{
    items: Array<{ title: string, disabled?: boolean, href?: string }>
  }>()
</script>
