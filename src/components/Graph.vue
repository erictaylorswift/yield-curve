<template>
    <div id="graph">
        
    </div>
</template>


<script>
import { mapState } from 'vuex'
import VeLine from 'v-charts/lib/line.common'

export default {
    components: { VeLine },
    computed: {
        ...mapState(['observations'])
    },
    data() {
        return{
            
        }
    }
    // methods: {
    //     onChartReady(chart) {
    //         console.log(this.observations)
    //         const data = this.observations

    //         const options = {
    //             title: "Yield Curve"
    //         }

    //         chart.draw(data, options)

    //    
    
    
}
</script>
