<template>
  <v-app>
    <v-app-bar extended>
      <v-app-bar-title>
        <b>Post Medium </b>
      </v-app-bar-title>

      <v-spacer />
      <breadcrumb class="tw-p-2" :items="items" />

      <!-- <v-btn icon="mdi-dots-vertical" /> -->
    </v-app-bar>
    <div class="tw-w-full tw-bg-red-3">
      fdgdf
    </div>

    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, onMounted, Ref, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const breadcrumbPath: Ref<any[]> = ref([])
  const items = computed(() => breadcrumbPath.value)

  watch(
    () => route.fullPath,
    (newId, oldId) => {
      // breadcrumbPath.react to route changes...
      breadcrumbPath.value = preparebreadcrumb()
    }
  )

  onMounted(() => {
    breadcrumbPath.value = preparebreadcrumb()
  })

  const preparebreadcrumb = () => {
    const items = route.fullPath.split('/').filter(item => item !== '')
    const routeList = items.map((item, index) => {
      return {
        title: item.toString(),
        href: `/${items.slice(0, index + 1).join('/')}`,
      }
    })
    routeList.unshift({ title: 'Home', href: '/' })
    return routeList
  }
  //
</script>
