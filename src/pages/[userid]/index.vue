<!-- UserDetail.vue -->
<template>
  <v-container>
    <UserDetail v-if="userDetails?.id" :user="userDetails" />

    <h2 class="tw-ml-4 tw-text-2xl tw-font-bold">Posts</h2>
    <v-col v-for="post in userDetails.posts" :key="post.id" cols="12">
      <PostPreview class="hover:tw-bg-blue-200" :post="{...post, author: userDetails.name}" @card-clicked="showPost" />

    </v-col>
    <router-link v-if="userDetails.posts && userDetails.posts?.length > 5" :to="`/${userDetails.id}/posts`">
      <v-btn class="tw-w-full boer tw-p-4 hover:tw-bg-blue-200" variant="outlined">
        Show all Posts
        <v-icon :icon="`mdiSvg:${mdiArrowRight}`" />
      </v-btn>
    </router-link>
  </v-container>
</template>

<script setup>
  import { mdiArrowRight } from '@mdi/js'
  import profileImage from '@/assets/Person.svg'
  import { useUserStore } from '@/stores'
  import { onBeforeRouteLeave, useRoute } from 'vue-router'
  import { computed, onMounted } from 'vue'
  import router from '@/router'

  const route = useRoute()
  const store = useUserStore()

  /**
   * Computed property to get the selected user details from the store.
   * This property is reactive and will update whenever the selected user changes in the store.
   */
  const userDetails = computed(() => store.getSelectedUser)

  onMounted(async () => {
    try {
      if (route.params.userid && !userDetails.value?.id) {
        await store.selectUser({ id: route.params.userid })
      }
      console.log('userDetails', store.getSelectedUser)
    } catch (error) {
      console.error(error)
    }
  })

  onBeforeRouteLeave(() => {
    store.clearSelectedUser()
  })

  const showPost = post => {
    router.push(`/${route.params.userid}/posts/${post.id}`)
  }
</script>
