<template>
    <div class="team">
        <h1 class="headline grey--text">Team</h1>

        <v-container class="my-12">
           
            <v-row wrap>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar size="100">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="title">{{ person.name }}</div>
                            <div class="gray--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Barsik', role: 'Front-end developer', avatar: '/Barsik.jpg' },
                { name: 'Alex', role: 'Front-end developer', avatar: '/Alex.jpg'},
                { name: 'Max', role: 'Designer', avatar: '/Max.jpg'},
                { name: 'Alexander', role: 'Team lead', avatar: '/Alexander.jpg'},
                // { name: 'Masha', role: 'Meneger', avatar:'/Masha.jpg'}
            ]
        }
    }  
}
</script>