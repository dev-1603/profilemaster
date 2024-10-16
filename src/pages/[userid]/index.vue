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

  /**
   * Lifecycle hook to fetch the user details when the component is mounted.
   * This hook is triggered when the component is mounted and fetches the user details
   * from the store based on the user ID in the route parameters.
   */
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

  /**
   * Lifecycle hook to clear the selected user details when leaving the route.
   * This hook is triggered when the user navigates away from the current route
   * and clears the selected user details from the store.
   */
  onBeforeRouteLeave(() => {
    store.clearSelectedUser()
  })

  /**
   * Function to navigate to the detailed post view.
   * This function is triggered when the user clicks on a post preview card
   * and navigates to the detailed post view based on the post ID.
   *
   * @param {Object} post - The post object containing the post details.
   */
  const showPost = post => {
    router.push(`/${route.params.userid}/posts/${post.id}`)
  }
</script>
