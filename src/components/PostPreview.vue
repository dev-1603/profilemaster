<template>
  <v-card class="mx-auto" max-width="tw-w-full tw-h-full tw-max-h-[300px]" @click="$emit('cardClicked', post)">
    <v-card-title>
      <slot name="title">{{ post.title }}</slot>
    </v-card-title>
    <v-card-text> <slot name="body">{{ post.body }}</slot></v-card-text>
    <v-card-actions>
      <v-spacer />
      <slot name="actions">
        <span v-if="post.author" class="p-4">Author: <b>{{ post.author }} </b></span>

      </slot>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue'
  import { Post } from '@/typedef/storeType'

  const props = defineProps<{
    post: Post
  }>()

  /**
   * Emits an event when the card is clicked.
   *
   * @event cardClicked - The event emitted when the card is clicked.
   * @param {Post} post - The post associated with the clicked card.
   */
  const emit = defineEmits<{(e: 'cardClicked', post: Post): void;
  }>()

</script>

<style scoped>
.v-card {
  margin: 20px;
}
</style>
