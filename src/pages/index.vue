<template>
  <v-container>
    <user-search class="tw-ml-auto tw-mb-4" @search="searchUser" />
    <v-row v-if="userList.length">
      <v-col v-for="user in userList" :key="user.id" cols="4">
        <user-profile-card :user="user" @click="setUserDetail(user)" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="user in 6" :key="user" cols="4">
        <v-skeleton-loader
          class="mx-auto border"
          max-width="300"
          type="image, article"
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<script lang='ts' setup>
  import { useRouter } from 'vue-router'
  import { computed, onBeforeMount, ref } from 'vue'
  import { useUserStore } from '@/stores'
  import { User } from '@/typedef/storeType'

  const store = useUserStore() //
  const router = useRouter()
  const userList = computed(() => store.getUsers)

  onBeforeMount(async () => {
    await store.actions.fetchUsers()
  })
  const searchUser = (searchQuery: string) => {
    store.searchUsers(searchQuery)
  }

  /**
   * Function to handle the click event on the user profile.
   * This function is triggered when the user clicks on their profile.
   */
  const setUserDetail = (user:User) => {
    store.selectUser(user)
    router.push(`/${user.id}`)
  }
</script>
