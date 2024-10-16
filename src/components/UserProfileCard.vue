<template>
  <v-card class="mx-auto my-4 " max-width="400">
    <slot>
      <v-card-title>
        <slot name="name">
          {{ user.name }}
        </slot>
      </v-card-title>
      <v-card-subtitle>
        <slot name="username">
          {{ user.username }}
        </slot>
      </v-card-subtitle>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle>
              <slot name="email">
                {{ user.email }}
              </slot>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Phone</v-list-item-title>
            <v-list-item-subtitle>
              <slot name="phone">
                {{ user.phone }}
              </slot>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Website</v-list-item-title>
            <v-list-item-subtitle>
              <slot name="website">
                <a :href="'http://' + user.website" target="_blank">{{
                  user.website
                }}</a>
              </slot>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list dense>
          <v-list-item>
            <v-list-item-title>Address</v-list-item-title>
            <v-list-item-subtitle>
              <slot name="address">
                {{ user.address.street }}, {{ user.address.suite }},
                {{ user.address.city }}, {{ user.address.zipcode }}
              </slot>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list dense>
          <v-list-item>
            <v-list-item-title>Company</v-list-item-title>
            <v-list-item-subtitle>
              <slot name="company">
                <strong>Name:</strong> {{ user.company.name }}<br>
                <strong>Catch Phrase:</strong> {{ user.company.catchPhrase
                }}<br>
                <strong>BS:</strong> {{ user.company.bs }}
              </slot>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <slot name="custom-content" />
      </v-card-actions>
    </slot>
  </v-card>
</template>

<script setup lang="ts">
  const props = defineProps({
    user: {
      type: Object,
      required: true,
    },
  })

</script>

<style scoped>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>

<style></style>
