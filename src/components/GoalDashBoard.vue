<template>
  <div>

    <div class="container">
        <div class="row">
            <div class="col">
                <SideNavbar />
            </div>
            <div class="col-12">
                <div id="dashboardBody">
                    <h1 id="dashboardTitle">Dashboard</h1>
                    <div id="progressDiv">
                        <Progress />
                    </div><br>

                    <div class="wrapper">
                        <div id="goalDiv">
                            <div id="cardGrid">
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                        <div id="calenderDiv">
                            <Calender />
                        </div>
                    </div>

                </div>
        </div>
    </div>

  </div>

</div>
</template>

<script>

import SideNavbar from './SideNavbar'
import Card from './Card'
import Calender from './Calender'
import Progress from './Progress'

export default {
    name: 'GoalDashBoard',
    
    components: {
        SideNavbar,
        Card,
        Calender,
        Progress
    },
}
</script>

<style>

/* Desktop CSS */
#dashboardBody {
    margin-top: 5%;
}

#dashboardTitle {
    text-align: center;
    color: #fff;
}
#progressDiv {
    background-color: green;
}

.wrapper { 
    background-color: green;
  overflow:hidden;
}
#goalDiv {
  background-color: gray;
  float:left; 
}
#calenderDiv { 
  background-color: white;
  overflow:hidden;
}
#cardGrid {
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px; 
}




</style>