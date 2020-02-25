<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title primary-title>
          <h2 class="mt-2 pl-5" >Add a New Project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-5 mt-5" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field :value="due" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
              </template>
              <v-date-picker v-model="due" width="420"></v-date-picker>
            </v-menu>

           <v-btn txt class="success ml-8 mt-3" @click="submit" :loading="loading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '@/fb'
export default {
    data() {
        return {
          dialog: false,
          title: '',
          content: '',
          due: null,
          inputRules: [
            v => v && v.length >= 3 || 'Minimum lenght is 3 characters'
          ],
          loading: false
        }
    },
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          this.loading = true;
          const project = {
            title: this.title,
            content: this.content,
            due: this.due,
            person: 'The Barsik',
            status: 'ongoing',
          }
          db.collection('projects').add(project).then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          });
        }
      }
    },
    
}
</script>