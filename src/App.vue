<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Do zrobienia </v-list-item-title>
          <v-list-item-subtitle> Tomka </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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
      src="https://picsum.photos/1920/1080?random"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="text-h4 pa-0 mr-4">
        <v-row  >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-toolbar-title>Zadania do zrobienia dla Tomka</v-toolbar-title>
        <v-row> </v-row>
       <live-date-time />
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import LiveDateTime from './components/Todo/Tools/LiveDateTime.vue';
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
  components: {
    "search": require("@/components/Todo/Tools/Search.vue").default,
    "live-date-time": require("@/components/Todo/Tools/LiveDateTime.vue").default,
    "snackbar": require("@/components/Shared/Snackbar.vue").default,
  },
};
</script>
