<template>

  <div>
      <h1 id="dashboardTitle">Dashboard</h1>

    <div class="container">
        <div class="row">
            <div class="col">
                <SideNavbar />
            </div>
            <div class="col-12">
                <div id="dashboardBody">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        </div>
    </div>

  </div>

</template>

<script>

import SideNavbar from './SideNavbar'
import Card from './Card'

export default {
    name: 'GoalDashBoard',
    
    components: {
        SideNavbar,
        Card
    },
}
</script>

<style>

#dashboardTitle {
    text-align: center;
    color: #fff;
}

#dashboardBody {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px; 
}

</style>