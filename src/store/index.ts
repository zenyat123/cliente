

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

	state: {

		auth: null

	},

	mutations: {

		setAuth(state, auth) {

			state.auth = auth

		}

	},

	actions: {

		setAuth({ commit }) {

			if(localStorage.getItem('auth')) {

				commit('setAuth', JSON.parse(localStorage.getItem('auth')));

			}

		},

		logout() {

			axios.post('/api/logout').then( () => {

				localStorage.removeItem('auth');

				location.reload();

			});

		}

	},

	modules: {



	}

})

