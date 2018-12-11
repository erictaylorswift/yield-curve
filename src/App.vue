<template>
  <div id="app">
    <Nav/>
    <Home></Home>
    <TenTwo/>
    <Player/>
    <Methodology/>
    <YieldSpread/>
    <Quote/>
    <News/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home'
import Nav from './components/Nav'
import Methodology from './components/Methodology'
import News from './components/News'
import Footer from './components/Footer'
import YieldSpread from './components/YieldSpread'
import TenTwo from './components/TenTwo'
import Quote from './components/Quote'
import Player from './components/Player.vue'

export default {
  name: 'app',
  components: { 
    Home,
    Nav,
    Methodology,
    News,
    Footer,
    YieldSpread,
    TenTwo,
    Quote,
    Player
  }
}
</script>

