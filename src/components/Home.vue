<template>
    <div :class="[ mobile ? 'mobile-container' : 'container']">
        <div v-if="!graph" class="wrapper">
            <h3 v-if="currentObservations.yield > 0"><span class="positive-observation">+</span> {{ currentObservations.yield }}</h3>
            <h3 v-else><span class="negative-observation">-</span> {{ currentObservations.yield }}</h3>
            <p><span>10 & 2 year yield spread</span> as of <a href="https://fred.stlouisfed.org/series/T10Y2Y" target="_blank"> {{ currentObservations.date }}</a></p>
            <p class="comparison">
                <i v-if="comparisonObservations.difference > 0" class="fas fa-caret-up greenArrow"></i>
                <i v-else class="fas fa-caret-down redArrow" ></i>
                {{ comparisonObservations.difference }} from a month ago 
            </p>
        </div>
        
        <div v-else class="wrapper">
            <!-- <h2>10y2y yield spread</h2> -->
            <line-chart :chart-data="datacollection" :options="chartOptions" width="860" height="312"></line-chart>
        </div>
        <social-sharing 
            url="yieldcurveindicator.com"
            title="i ❤ the yield curve! yieldcurveindicator.com"
            :quote='"the 10 & 2 year yield spread is " + currentObservations.yield + " as of " + currentObservations.date'
            twitter-user="marshalletaylor"
            inline-template>
            <div class="shares">
                <network network="facebook" class="facebook">
                    <i class="fab fa-facebook"></i>
                </network>
                <network network="twitter" class="twitter">
                    <i class="fab fa-twitter"></i>
                </network>
                <network network="linkedin" class="linkedIn">
                    <i class="fab fa-linkedin"></i>
                </network>
            </div>
        </social-sharing>
        <button v-if="!graph" class="toggle" @click="showGraph">graph</button>
        <button v-else class="toggle" @click="hideGraph">hide graph</button>
        <div class="vertLine"></div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import LineChart from './Line.js'


export default {
    components: { LineChart },
    props: {
        
    },
    computed: {
        ...mapState(['currentObservations', 'comparisonObservations', 'observations', 'dates'])
    },
    data() {
        return {
            mobile: false,
            datacollection: null,
            graph: false,
            chartOptions: {
                responsive: true,
                maintainAspectRation: true,
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                    text: '10Y2Y Yield Spread'
                },
                layout: {
                    padding: {
                        top: 32,
                        left: 16,
                        bottom: 32
                    }
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            fontSize: 8,
                            fontFamily: 'Raleway',
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        }
    },
    methods: {
        showGraph() {
            this.graph = true;
            this.fillData();
        },
        hideGraph() {
            this.graph = false
        },
        fillData() {
            this.datacollection = {
                labels: this.dates,
                datasets: [
                    {
                        label: 'Obseravtions',
                        backgroundColor: 'none',
                        fill: false,
                        borderColor: '#5bcf84',
                        data: this.observations,
                        borderWidth: 1,
                        pointBackgroundColor: 'white',
                    }
                ]
            }
        }
    },
    created() {
        this.$store.dispatch('getObservations');

            if (screen.width <= 760) {
                this.mobile = true;
            } else {
                this.mobile = false
            }
    }
}
</script>
