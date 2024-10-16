<template>
  <v-container class="tw-p-8">
    <h1 class="tw-font-bold tw-text-4xl tw-my-10">Posts By  {{ getUserDetails.name }}</h1>
    <v-row>
      <v-virtual-scroll
        class="tw-w-full tw-p-6 tw-max-h-[85vh]"
        height="80vh"
        :items="getUserPosts"
      >
        <template #default="{ item }">
          <PostPreview class="tw-m-4  hover:tw-bg-blue-200" :post="{...item, author:getUserDetails?.name}" @card-clicked="showPost" />
        </template>
      </v-virtual-scroll>
      <!-- <v-col v-for="post in getUserPosts" :key="post.id" cols="12">
        <PostPreview :post="{...post, author:getUserDetails?.name}" />
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/userStore'
  import PostPreview from '@/components/PostPreview.vue'
  import { computed } from 'vue'

  const route = useRoute()
  const router = useRouter()
  console.log(route, 'rourtr=>', router);

  const userStore = useUserStore()
  const userId = route.params.userid

  const userPosts = ref([])
  const getUserPosts = computed(() => userPosts.value)
  const getUserDetails = computed(() => userStore.getSelectedUser)

  onMounted(async () => {
    try {
      if (userId) {
        userPosts.value = await userStore.getPostsByUserId(userId)
      }
    } catch (error) {
      console.error(error)
    }
  })

  const showPost = post => {
    router.push(`/${route.params.userid}/posts/${post.id}`)
  }
</script>

<style scoped>
.v-container {
  padding: 16px;
}
</style>
