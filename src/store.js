import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentObservations: {},
        comparisonObservations: {},
        observations: []
    },
    actions: {
        getObservations({ commit }) {
            var yesterday = moment().subtract(52, 'week').format("YYYY-MM-DD");
    
            console.log('today', yesterday)
            
            axios.get('https://www.quandl.com/api/v3/datasets/FRED/T10Y2Y.json?api_key=eAFeozi1NfW7tgmzLjUM&start_date=' + yesterday )
                .then(res => {

                    commit('setCurrentObservations', {
                        yield: parseFloat(res.data.dataset.data[0][1]).toFixed(2),
                        date: moment(res.data.dataset.data[0][0]).format("MMM Do, YYYY")
                    })

                    commit('setComparisonObservations', {
                        yield: parseFloat(res.data.dataset.data[8][1]).toFixed(2),
                        date: moment(res.data.dataset.data[8][0]).format("MMM Do, YYYY"),
                        difference: parseFloat((parseFloat(res.data.dataset.data[0][1]).toFixed(2)) - (parseFloat(res.data.dataset.data[8][1]).toFixed(2))).toFixed(2)
                    })

                    const dataset = res.data.dataset.data;

                    var values = []

                    dataset.forEach((data) => {
                        values.push({"date": data[0], "observation": parseFloat(data[1])})
                    })

                    commit('setObservations', values.reverse())
                    // this.observation.today = parseFloat(res.data.dataset.data[0][1])
                    // this.observation.date = moment(res.data.dataset.data[0][0]).format("MMM Do, YYYY")
                    
                    // var observationValue = parseFloat(res.data.dataset.data[0][1])
                    // if (observationValue < 0) {
                    //     this.positiveObservation = false
                    // }
    
                    // this.observation.comparison = parseFloat((parseFloat(res.data.dataset.data[8][1])) - this.observation.today).toFixed(2)
                    // this.observation.comparisonDate = moment(res.data.dataset.data[8][0]).format("MMM Do, YYYY")
                })
            }
    },
    mutations: {
        setCurrentObservations(state, val) {
            state.currentObservations = val
        },
        setComparisonObservations(state, val) {
            state.comparisonObservations = val
        },
        setObservations(state, val) {
            state.observations = val
        }
    }
})