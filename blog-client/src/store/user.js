import {
    defineStore
} from "pinia"
import axios from 'axios'
import router from "../router";

export const userState = defineStore('user', {
    persist:true,
    state: () => ({

        user: null
    }),

    getters: {
        getUser: (state) => state.user
    },

    actions: {
        logout () {
          this.user = null  
        },
        async login(data) {
            console.log(data)
            await axios.get('/sanctum/csrf-cookie').then(response => {

            });

            await axios.post('/login', data)

             axios.get('api/user').then((res => {
                 if (res.status == 200) {
                     this.user = res.data
                     router.push({name:'dashboard'})
                }
            }))
        },

    },
})