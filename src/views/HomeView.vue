<template>
    <div>
        <!--外部整体盒子-->
        <el-container>
            <!--侧边栏-->
            <el-aside style="width: 200px; min-height: 100vh; background-color: #001529">

                <!--logo区域-->
                <div style="height: 60px;  color: white; display: flex; align-items: center; justify-content: center">
                    logo
                </div>
                <!--菜单区域
                :default-active="$route.path":动态绑定当前浏览器访问路由路径高亮
                -->
                <el-menu router background-color="#001529" text-color="rgba(255,255,255,0.65)" active-text-color="#fff"
                         style="border: none " :default-active="$route.path">
                    <!--一级菜单-->
                    <el-menu-item index="/home">
                        <template slot="title">
                            <i class="el-icon-house"></i>
                            <span>系统首页</span>
                        </template>
                    </el-menu-item>

                    <!--二级菜单-->
                    <el-submenu index="/1">
                        <template slot="title">
                            <i class="el-icon-document-copy"></i>
                            <span>信息管理</span>
                        </template>
                        <el-menu-item index="">
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
                右侧整体盒子
                <!--右侧头部区域-->
                <el-header>
                    右侧头部区域
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
    margin: 4px;
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


</style>