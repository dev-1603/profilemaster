<template>
  <v-container class="tw-mx-auto tw-p-4">
    <v-row>
      <v-col v-if="getPostDetails && getPostDetails.id" cols="12">
        <div class="tw-mb-4">
          <h1 class="tw-text-3xl tw-font-bold tw-mb-2">{{ getPostDetails.title }}</h1>
          <p v-if="getAuthor" class="tw-text-right tw-text-gray-500 tw-text-sm">Author: {{ store.getSelectedUser && store.getSelectedUser.name }}</p>
        </div>
        <div class="tw-mb-4" v-html="getPostDetails.body" />
      </v-col>
      <v-col v-else cols="12">
        <v-skeleton-loader
          class="mx-auto border tw-mb-6"
          max-width="full"
          type="article"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { useUserStore } from '@/stores/userStore'
  const route = useRoute()
  const store = useUserStore()
  const postdetails = ref({})
  const getPostDetails = computed(() => postdetails.value)
  const getAuthor = computed(() => store.getSelectedUser?.name)
  const postId = route.params.id
  const userId = route.params.userid

  onMounted(async () => {
    const post = await store.fetchSinglePost(postId, userId)
    postdetails.value = post
  })
</script>
