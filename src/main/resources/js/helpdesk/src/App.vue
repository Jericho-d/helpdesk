<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <router-view></router-view>
        <v-col>
          <Toolbar/>
        </v-col>
        <v-col>
          <NavigationDrawer/>
        </v-col>
        <v-row justify="center">
          <v-col sm="3"
                 v-for="item in items"
                 :key="item.id"
                 cols="12">
            <v-card class="pa-2"
                    outlined
                    tile>
              <v-card-text>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
                <p class="text-h4 text--primary">{{item.name}}</p>
                <div class="text--primary">
                  {{item.description}}
                </div>
              </v-card-text>

              <v-card-actions>
                <h2>{{item.price}}$</h2>
                <v-spacer></v-spacer>
                <v-menu transition="scroll-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary"
                           class="ma-2"
                           v-bind="attrs"
                           v-on="on">
                      Buy
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="n in 5"
                                 :key="n"
                                 link>
                      <v-list-item-title v-text="n"></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import Toolbar from "@/components/Toolbar";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavigationDrawer, Toolbar
  },

  data: () => ({
    reveal: false,
    items: []
  }),
  async created() {
    const response = await axios.get('/items');
    this.items = response.data;
    console.log(this.items);
  }
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
