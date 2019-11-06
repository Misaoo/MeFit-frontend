<template>
<div>

    <SideNavbar />
    
    <h1 style="color:#fff;">Shows the sidenavbar and that will contains routerliks that shows components inside here</h1>
</div>
</template>

<script>

import SideNavbar from './SideNavbar'
/* import Card from './Card'
import Calender from './Calender'
import Progress from './Progress' */

export default {
    name: 'GoalDashBoard',
    
    components: {
        SideNavbar
    }
}
</script>

<style>

</style>