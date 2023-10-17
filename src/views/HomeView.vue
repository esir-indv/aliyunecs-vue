<template>
    <div>
        <!--外部整体盒子-->
        <el-container>
            <!--侧边栏-->
            <el-aside :width="asideWidth" style="min-height: 100vh; background-color: #001529">

                <!--logo区域-->
                <div style="height: 60px;  color: white; display: flex; align-items: center; justify-content: center">
                    <img src="@/assets/logo白色.png" alt="" style="width: 196px;height: 40px">
                </div>
                <!--菜单区域
                :default-active="$route.path":动态绑定当前浏览器访问路由路径高亮
                -->
                <el-menu :collapse="isCollapse" :collapse-transition="false" router background-color="#001529" text-color="rgba(255,255,255,0.65)" active-text-color="#fff"
                         style="border: none " :default-active="$route.path">
                    <!--一级菜单-->
                    <el-menu-item index="/home">
                            <i class="el-icon-house"></i>
                            <span slot="title">系统首页</span>
                    </el-menu-item>

                    <!--二级菜单-->
                    <el-submenu index="/1">
                        <template slot="title">
                            <i class="el-icon-document-copy"></i>
                            <span>信息管理</span>
                        </template>
                        <el-menu-item index="/1">
                            <span>用户信息</span>
                        </el-menu-item>
                        <el-menu-item index="">
                            <span>管理员信息</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--右侧整体盒子-->
            <el-container>
                <!--右侧头部区域-->
                <el-header>
                    <i class="el-icon-menu" style="width:40px; margin-top: 10px" @click="handleCollapse"></i>

                </el-header>
                <!--右侧主体区域-->
                <el-main>
                    右侧主体区域
                </el-main>
            </el-container>

        </el-container>
    </div>

</template>

<script>
export default {
    name: "HomeView",
    data(){
        return{
            //默认不收缩
            isCollapse: false,
            asideWidth: '200px',
        }
    },
    methods:{
        handleCollapse(){
            this.isCollapse = !this.isCollapse
            this.asideWidth = this.isCollapse?'64px':'200px'
        }

    }

};

</script>

<style lang="less">
//整个inline框
.el-menu--inline {
    background-color: #000c17 !important;
}

//二级子菜单中的样式，需要到chorm浏览器中调试找到 !important如果和其它地方样式有冲突，强制生效
.el-menu--inline .el-menu-item {
    background-color: #000c17 !important;
    padding-left: 49px !important;
}

//一、二级菜单 鼠标移入操作
.el-menu-item:hover, .el-submenu__title:hover {
    color: #fff !important;
}

//二级菜单及其前边图标
.el-submenu__title:hover i {
    color: #fff !important;

}

//选择菜单,圆角，改变颜色,这里不能的点不能有空格
.el-menu-item.is-active {
    background-color: #1890ff !important;
    border-radius: 5px !important;
    //margin: 4px;
}

//设置二级菜单图标对齐,此处不生效
.el-submenu__title {
    margin-left: 5px !important;
}

//设置一二级菜单高度
.el-menu-item {
    margin: 4px;
    height: 40px;
    line-height: 40px;
}
//下箭头居中对齐
.el-submenu__icon-arrow{
    margin-top: -3px;
}
//调整收缩后高亮图标居中,这里的点又要有空格
.el-menu-item.is-active .el-tooltip{
    margin-left: -4px !important;
}
//设置二级菜单高亮后，高亮框宽度调整
.el-submenu .el-menu-item{
min-width: 0 !important;
}
//设置二级菜单高亮后，字体对齐
.el-menu--inline .el-menu-item.is-active{
    padding-left: 50px !important;
}
//左侧  菜单收缩动画
.el-aside {
    transition: width .4s;
}


</style>