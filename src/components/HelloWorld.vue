<template>
  <div class="hello">
      <!-- {{this.$router}} -->
      <!-- <img src=""> -->
      <h1>欢迎页</h1>
      <p>{{cook}}</p>
  </div>
</template>

<script>
import {getToken} from '../utils/auth'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      cook : getToken()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
