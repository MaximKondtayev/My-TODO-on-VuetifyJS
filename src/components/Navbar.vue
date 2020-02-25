<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>
                Awesome! You added a new project
            </span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-toolbar text >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Next</span>
                <span>It</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        
        <v-navigation-drawer temporary app v-model="drawer" class="deep-purple lighten-2">
            <v-row class="text-center">
                <v-col class="mt-8">
                    <v-avatar size="100">
                        <img src="/Barsik.jpg" alt="">
                    </v-avatar>
                    <p class="white--text headline mt-2">Barsik</p>
                </v-col>
                <v-col>
                    <Popup @projectAdded="snackbar = true"/>
                </v-col>
            </v-row>
            
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'
export default {
    components: {Popup},
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'},
            ],
            snackbar: false       
        }
    }
}
</script>