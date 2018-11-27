<template>
  <div id="app">
    <Nav/>
    <Home></Home>
    <Content/>
  </div>
</template>

<script>
import Home from './components/Home'
import Nav from './components/Nav'
import Content from './components/Content'

export default {
  name: 'app',
  components: { Home, Nav, Content }
}
</script>

