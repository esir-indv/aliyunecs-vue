<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <br>
        <i class="fa fa-cog fa-spin"></i>
        <br>
        <router-link to="/discover">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friends">关注</router-link>
        <!--声明路由占位标签-->
        <router-view></router-view>

        <!--        <hello></hello>-->

<!--        <movie v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating"></movie>-->

    </div>

</template>

<script>
import hello from "@/components/Hello.vue";
import movie from "@/components/Movie.vue";
import axios from "axios";
export default {
    name: 'App',
    data: function(){
        return {
            movies:[
                {id:1,title:"SICHUAN",rating:6.0},
                {id:2,title:"RURAL",rating:8.0},
                {id:3,title:"CREDIT",rating:9.0},
            ]
        }
    },

    mounted:function () {
        console.log("App组件被挂载了")
    },
    components: {
        hello,
        movie
    }
}
</script>

<style lang="less" scoped>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
