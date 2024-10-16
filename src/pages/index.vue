<template>
  <v-container>
    <v-row>
      <v-col v-for="user in userList" :key="user.id" cols="4">
        <user-profile-card :user="user" @click="setUserDetail(user)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts' setup>
  import { useRouter } from 'vue-router'
  import { computed, onBeforeMount, ref } from 'vue'
  // import { useStoreData } from '../composables/storedata'
  import { useUserStore } from '@/stores'
  import { User } from '@/typedef/storeType'

  const store = useUserStore() //
  const router = useRouter()
  const userList = computed(() => store.getUsers)

  onBeforeMount(async () => {
    await store.actions.fetchUsers()
  })

  const setUserDetail = (user:User) => {
    store.selectUser(user)
    router.push(`/${user.id}`)
  }
</script>
