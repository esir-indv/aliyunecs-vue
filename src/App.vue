<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <br>-->
<!--        <i class="fa fa-cog fa-spin"></i>-->
<!--        <br>-->
<!--        <router-link to="/discover">发现</router-link>&nbsp;-->
<!--        <router-link to="/my">我的</router-link>&nbsp;-->
<!--        <router-link to="/friends">关注</router-link>&nbsp;-->
        <!--声明路由占位标签-->
        <router-view/>

        <!--        <hello></hello>-->

<!--        <movie v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating"></movie>-->

    </div>

</template>

<script>
import hello from "@/components/Hello.vue";
import movie from "@/components/Movie.vue";
import axios from "axios";
export default {
    name: 'App'
}
</script>

<style lang="less" scoped>
#app{
    height: 100%;
}


</style>
