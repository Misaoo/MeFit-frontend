
import Vue from 'vue';
import Router from "vue-router"

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import GoalDashBoard from './components/GoalDashBoard.vue'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: "/",
		name: "Card",
		component: Card
	},
	{
		path: "/calender",
		name: "Calender",
		component: Calender,
		beforeEnter: (to, from, next) => {
			if(localStorage.accessToken == null) {
				next()
			} else {
				next("/")
			}
		}
	}
	
	/* {
		path: "*",
		redirect: "/"
	} */
	]
})
