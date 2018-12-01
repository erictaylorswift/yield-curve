<template>
  <div id="app">
    <Nav/>
    <Home></Home>
    <Content/>
    <News/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home'
import Nav from './components/Nav'
import Content from './components/Content'
import News from './components/News'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: { Home, Nav, Content, News, Footer }
}
</script>

