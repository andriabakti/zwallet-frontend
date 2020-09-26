<template>
    <b-container fluid>
        <Navbar/>
        <b-row class="text-left no-gutters">
            <b-col col lg="3">
                <Sidebar/>
            </b-col>
        </b-row>
        <Footer/>
    </b-container>
</template>

<script>
import Sidebar from '../../components/global/Sidebar'
import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.container-fluid{
    padding: 0;
}
.col{
    height: 100vh;
}
</style>
