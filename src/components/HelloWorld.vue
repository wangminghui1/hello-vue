<template>
  <div class="hello">
    <data-board></data-board>
  </div>
</template>

<script>
import {getToken} from '../utils/auth'
import dataBoard from './dataBoard'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      cook : getToken()
    }
  },
  components : {
    dataBoard
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
