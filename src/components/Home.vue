<template>
    <div  class="container">
        <div v-if="!graph">
            <h3 v-if="currentObservations.yield > 0"><span class="positive-observation">+</span> {{ currentObservations.yield }}</h3>
            <h3 v-else><span class="negative-observation">-</span> {{ currentObservations.yield }}</h3>
            <p><span>tresury yield indicator</span> as of <a href="https://fred.stlouisfed.org/series/T10Y2YM"> {{ currentObservations.date }}</a></p>
            <p class="comparison">{{ comparisonObservations.difference }} from {{ comparisonObservations.date }} </p>
            <button class="toggle" @click="showGraph">Graph</button>
        </div>
        <div v-else>
            <ve-line :data="chartData" width="600px" :settings="chartSettings" :textStyle="options" :grid="grid" :legend-visible="false" ></ve-line>
            <button class="toggle" @click="hideGraph">Hide graph</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            observation: {
                date: '',
                today: null,
                comparison: null,
                comparisonDate: '',
            },
            positiveObservation: true,
            graph: false,
            chartData: {
                columns: ['date', 'observation'],
                rows: null
            },
            chartSettings: {
                xAxisType: 'time',
                area: true
            },
            options: {
                color: '#ffffff'
            },
            grid:{
                show: true,
                borderColor: '#ffffff'
            },
            dataZoom: {
                type: 'slider',
                start: 0,
                end: 20
            }
        }
    },
    computed: {
        ...mapState(['currentObservations', 'comparisonObservations', 'observations'])
    },
    methods: {
        showGraph() {
            this.graph = true;
            this.chartData.rows = this.observations
        },
        hideGraph() {
            this.graph = false
        }
    },
    created() {
        this.$store.dispatch('getObservations')

        // var yesterday = moment().subtract(2, 'week').format("YYYY-MM-DD");
        // var date = moment().subtract(3, "days").format("MMM Do, YYYY")

        // console.log('today', yesterday)
        
        // this.axios.get('https://www.quandl.com/api/v3/datasets/FRED/T10Y2Y.json?api_key=eAFeozi1NfW7tgmzLjUM' )
        //     .then(res => {
        //         console.log(res.data)
        //         this.observation.today = parseFloat(res.data.dataset.data[0][1])
        //         this.observation.date = moment(res.data.dataset.data[0][0]).format("MMM Do, YYYY")
                
        //         var observationValue = parseFloat(res.data.dataset.data[0][1])
        //         if (observationValue < 0) {
        //             this.positiveObservation = false
        //         }

        //         this.observation.comparison = parseFloat((parseFloat(res.data.dataset.data[8][1])) - this.observation.today).toFixed(2)
        //         this.observation.comparisonDate = moment(res.data.dataset.data[8][0]).format("MMM Do, YYYY")
        //     })
    }
}
</script>
