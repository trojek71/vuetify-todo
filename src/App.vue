<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" :mobile-breakpoint="768">
      <v-img
        class="pa-4 pt-7"
        height="170"
        src="hot-air-balloon.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70" class="mb-2">
          <img src="tomek.jpg" alt="Tomek" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">Tomek</div>
        <div class="white--text text-subtitle-2">tomek@email.com</div>
      </v-img>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="hot-air-balloon.jpg"
      prominent
      :height="$route.path ===  '/' ? '230' : '170'"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="header-container text-h4 pa-0 mr-4">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search class="ml-3" />
        </v-row>
        <v-toolbar-title>{{ $store.state.appTitle }}</v-toolbar-title>
        <v-row > 
        <live-date-time class="ml-3"  />
        </v-row>
        <v-row v-if="$route.path ===  '/'">
           <field-and-task />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import LiveDateTime from "./components/Todo/Tools/LiveDateTime.vue";
import Search from "./components/Todo/Tools/Search.vue";
export default {
  components: { LiveDateTime },
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      {
        title: "Zadania",
        icon: "mdi-format-list-checks",
        to: "/",
      },

      {
        title: "Informacje",
        icon: "mdi-help-box",
        to: "/about",
      },
    ],
  }),
  mounted() {
    this.$store.dispatch('getTasks')
  },

  components: {
    "search": require("@/components/Todo/Tools/Search.vue").default,
    "live-date-time": require("@/components/Todo/Tools/LiveDateTime.vue")
      .default,
    "snackbar": require("@/components/Shared/Snackbar.vue").default,
    "field-and-task": require("@/components/Todo/FieldAndTask.vue").default,
  },
};
</script>
<style lang="sass">
.header-container
  max-width: none !important
</style>
