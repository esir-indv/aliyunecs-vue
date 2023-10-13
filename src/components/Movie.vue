<template>
    <div>
        <h1>{{title}}</h1>
        <span>{{rating}}</span>
        <button @click="fun">Click</button>
    </div>
</template>

<script>
export default {
    name: 'MyMovie',
    props: ["title","rating"],
    data: function (){
        return{
        }
    },
    methods:{
        fun(){
            alert("HELLO")
        }
    },
    created:function () {
        console.log("Movie组件被创建了")

    },

}
</script>

<style lang="less" scoped></style>
