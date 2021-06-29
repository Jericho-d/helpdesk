<template>
  <v-navigation-drawer app clipped flat dark expand-on-hover>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/11.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Doe</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="item in navbarlist" :key="item.route" :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.text }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer"
}
</script>

<style scoped>

</style>