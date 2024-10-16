<template>
  <v-card class="mx-auto" max-width="tw-w-full tw-h-full tw-max-h-[300px]" @click="$emit('cardClicked', post)">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text>{{ post.body }}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <span v-if="post.author" class="p-4">Author: <b>{{ post.author }} </b></span>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue'
  import { Post } from '@/typedef/storeType'

  const props = defineProps<{
    post: Post
  }>()

  const emit = defineEmits<{(e: 'cardClicked', post: Post): void;
  }>()

</script>

<style scoped>
.v-card {
  margin: 20px;
}
</style>
