<template>
  <v-card class="mx-auto tw-w-full tw-max-w-4xl tw-p-4 tw-flex tw-items-center" color="indigo-lighten-4">
    <v-row>
      <v-col class="tw-flex tw-justify-center tw-items-center" cols="4">
        <v-avatar class="tw-border-2 " size="150">
          <v-img class="tw-text-white align-end tw-border-2 tw-rounded-full" height="200px" :src="user?.profileImage ?? profileImage" />
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <v-card-title class="tw-text-3xl tw-font-extrabold  ">{{ user.name }}</v-card-title>
        <v-card-subtitle class="tw-text-gray-600">{{ user.username }}</v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <div class="tw-mb-2 tw-text-[15px]"><strong>Email</strong>: {{ user.email }}</div>
              <div class="tw-mb-2 tw-text-[15px]"><strong>Phone</strong>: {{ user.phone }}</div>
              <div class="tw-mb-2 tw-text-[15px]"><strong>Website</strong>: <a class="tw-text-blue-500" :href="'http://' + user.website" target="_blank">{{ user.website }}</a></div>
              <div class="tw-mb-2 tw-text-[15px]"><strong>Address</strong>: {{ formattedAddress }}</div>
            </v-col>
            <v-col cols="6">
              <div class="tw-mb-2 tw-text-[15px]"><strong>Company</strong>: {{ user.company.name }}</div>
              <div class="tw-mb-2 tw-text-[15px]"><strong>Catchphrase</strong>: {{ user.company.catchPhrase }}</div>
              <div class="tw-mb-2 tw-text-[15px]"><strong>BS</strong>: {{ user.company.bs }}</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
    <v-col class="tw-flex tw-justify-center tw-items-center" cols="4">
      <v-switch v-model="showPost">
        <template #label>
          <span class="tw-text-grey-800 tw-font-semibold">{{ showPost? 'Toggle to Hide Posts': 'Toggle to Show Post' }}
          </span>
        </template>
      </v-switch>

    </v-col>
  </v-card>
</template>

<script setup lang="ts">
  import { computed, defineProps, ref } from 'vue'
  import profileImage from '@/assets/Person.svg'

  const props = defineProps<{
    user: {
      id: number;
      image: string;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        }
      };
      phone: string;
      website: string;
      company: {
        name: string;
        catchPhrase: string;
        bs: string;
      }
    }
    postmodel:boolean
  }>()

  const emits = defineEmits(['togglePost', 'update:postmodel'])

  const showPost = computed({
    get: () => props.postmodel,
    set: value => emits('update:postmodel', value),
  })
  ref(false)

  /**
   * Fetches data from the provided API endpoint.
   *
   * @param {string} url - The URL of the API endpoint to fetch data from.
   * @returns {Promise<Object>} - A promise that resolves to the data fetched from the API.
   * @throws {Error} - Throws an error if the fetch operation fails.
   */
  const formattedAddress = computed(() => {
    return `${props.user?.address?.street}, ${props.user?.address?.city}, ${props.user?.address?.zipcode}`
  })
</script>

<style scoped>
.v-card {
  margin: 20px;
}
</style>
