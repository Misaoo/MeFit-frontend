
import Vue from 'vue'
import Router from "vue-router"
import Login from '../components/Login'
import Register from '../components/Register'
import Progress from '../components/Progress'
import GoalDashBoard from '../components/GoalDashBoard'
import Workout from '../components/Workout'
import Exercise from '../components/Exercise'
import Profile from '../components/Profile'
import CreateWorkout from '../components/CreateWorkout'
import Calender from '../components/Calender'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "Login",
			component: Login
		},
		{
			path: "/register",
			name: "Register",
			component: Register
		},
		{
			path: "/progress",
			name: "Progress",
			component: Progress
		},
		{
			path: "/goal",
			name: "GoalDashBoard",
			component: GoalDashBoard
		},
		{
			path: "/workout",
			name: "Workout",
			component: Workout
		},
		{
			path: "/exercise",
			name: "Exercise",
			component: Exercise
		},
		{
			path: "/profile",
			name: "Profile",
			component: Profile
		},
		{
			path: "/createworkout",
			name: "CreateWorkout",
			component: CreateWorkout
		},
		{
			path: "/calender",
			name: "Calender",
			component: Calender
		},
		
		

	]
})
