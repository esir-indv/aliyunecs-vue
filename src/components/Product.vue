<template>
    <!--方式一：获取id-->
    <h3>商品{{$route.params.id}}</h3>

</template>

<script >
export default {
    props:['id']
}

</script>



<style scoped lang="less">

</style>