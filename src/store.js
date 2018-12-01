import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentObservations: {},
        comparisonObservations: {},
        observations: [],
        dates: [],
        articles: [],
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
                        yield: parseFloat(res.data.dataset.data[21][1]).toFixed(2),
                        date: moment(res.data.dataset.data[21][0]).format("MMM Do, YYYY"),
                        difference: parseFloat((parseFloat(res.data.dataset.data[0][1]).toFixed(2)) - (parseFloat(res.data.dataset.data[21][1]).toFixed(2))).toFixed(2)
                    })

                    const dataset = res.data.dataset.data;

                    var values = []
                    var obsDates = []

                    dataset.forEach((data) => {
                        values.push(parseFloat(data[1]))
                        obsDates.push(data[0])
                    })

                    commit('setObservations', values.reverse())
                    commit('setDates', obsDates.reverse())
                    // this.observation.today = parseFloat(res.data.dataset.data[0][1])
                    // this.observation.date = moment(res.data.dataset.data[0][0]).format("MMM Do, YYYY")
                    
                    // var observationValue = parseFloat(res.data.dataset.data[0][1])
                    // if (observationValue < 0) {
                    //     this.positiveObservation = false
                    // }
    
                    // this.observation.comparison = parseFloat((parseFloat(res.data.dataset.data[8][1])) - this.observation.today).toFixed(2)
                    // this.observation.comparisonDate = moment(res.data.dataset.data[8][0]).format("MMM Do, YYYY")
                })
            },

            getNews({ commit }) {
                axios.get('https://newsapi.org/v2/everything?q=+treasury"yield spread"&sortBy=popularity&apiKey=d6623976bb6e41e79e9f9c61b928a951')
                    .then(res => {
                        let results = res.data.articles;

                        console.log(results[0])

                        let news = [];
                        

                        for(var i = 0; i < 6; i++) {

                            news.push({
                                "id": results.indexOf(news),
                                "title": results[i].title,
                                "url": results[i].url,
                                "source":  results[i].source.name
                            })
                        }

                        commit('setNews', news)
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
        },
        setDates(state, val){
            state.dates = val
        },
        setNews(state, val) {
            state.articles = val
        }
    }
})