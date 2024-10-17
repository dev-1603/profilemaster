<template>
  <v-app>
    <v-app-bar extended>
      <v-app-bar-title>
        <router-link class="tw-text-3xl" to="/">
          <b class="tw-text-3xl">Profile Master </b>
        </router-link>
      </v-app-bar-title>
      <breadcrumb class="tw-p-2" :items="items" />
      <v-spacer />

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

  /**
   * Watcher to trigger actions on route change.
   * This watcher observes changes in the route and executes the specified
   * actions whenever the route changes. It is useful for performing tasks
   * such as fetching new data, updating the UI, or logging route changes.
   *
   * @param {Object} to - The target Route Object being navigated to.
   * @param {Object} from - The current route being navigated away from.
   */
  watch(
    () => route.fullPath,
    (to, from) => {
      breadcrumbPath.value = preparebreadcrumb(to)
    }
  )

  /**
   * Prepares a breadcrumb trail based on the given route.
   *
   * @param {Object} [to] - The target route object (optional).
   * @returns {Array} An array of breadcrumb items, each containing a title and href.
   *
   * The function splits the full path of the current route into segments,
   * filters out any empty segments, and maps each segment to a breadcrumb item.
   * Each breadcrumb item has a title (the segment) and an href (the path up to that segment).
   * The function also prepends a 'Home' breadcrumb item at the beginning of the list.
   */
  const preparebreadcrumb = (to?:any) => {
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

  onMounted(() => {
    breadcrumbPath.value = preparebreadcrumb()
  })

</script>
