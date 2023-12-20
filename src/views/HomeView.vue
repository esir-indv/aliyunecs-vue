<template>
    <div>
        <!--外部整体盒子-->
        <el-container>
            <!--侧边栏-->
            <el-aside :width="asideWidth" style="min-height: 100vh; background-color: #001529">

                <!--logo区域-->
                <div style="height: 60px;  color: white; display: flex; align-items: center; justify-content: center">
                    <img class="logo" v-show="!isCollapse" src="@/assets/logo白色.png" alt="">
                    <img class="logo-2" v-show="isCollapse" src="@/assets/logo方（白）.png" alt="">
                </div>
                <!--菜单区域
                :default-active="$route.path":动态绑定当前浏览器访问路由路径高亮
                -->
                <el-menu :collapse="isCollapse" :collapse-transition="false" router background-color="#001529"
                         text-color="rgba(255,255,255,0.65)" active-text-color="#fff"
                         style="border: none " :default-active="$route.path">
                    <!--一级菜单-->
                    <el-menu-item index="/login">
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
                    <i :class="collapseIcon" style="font-size: 20px" @click="handleCollapse"></i>
                    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px">
                        <el-breadcrumb-item :to="{path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{path: 'user'}">用户管理</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!--头像区域下拉菜单:布局-居中-靠右==-->
                    <div style="flex: 1; width: 0; display: flex; align-items: center; justify-content: flex-end">
                        <i class="fa fa-arrows-alt" style="font-size: 15px" @click="handFull"></i>
                        <el-dropdown placement="bottom">
                            <!--增加一个div盒子，解决img和span排版问题，flex属性很好用-->
                            <div style="display: flex; align-items: center; cursor: default">
                                <img src="@/assets/IMG_1665.png" alt=""
                                     style="width: 40px; height: 40px; margin:0 5px ;border-radius: 50%">
                                <span>管理员</span>
                            </div>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item @click="$router.push('/login')">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                    </div>

                </el-header>
                <!--右侧主体区域-->
                <el-main>
                    <div style="box-shadow: 0 0 10px rgba(0,0,0, .1); padding: 10px 20px; border-radius: 5px; margin-bottom: 10px"  >
                        昨夜星辰昨夜风，画楼西畔桂堂东
                    </div>
                    <div style="display: flex">
                        <el-card style="width: 50%; margin-right: 10px">
                            <div slot="header" class="clearfix">
                                <span>三台农商</span>
                            </div>
                        </el-card>

                        <el-card style="width: 50%;">
                            <div slot="header" class="clearfix">
                                <span>用户数据</span>
                            </div>
                            <div style="height:200px; overflow: auto">
                                <el-table :data="users">
                                    <el-table-column label="ID" prop="id"></el-table-column>
                                    <el-table-column label="姓名" prop="username"></el-table-column>
                                    <el-table-column label="柜员号" prop="txOrgNo"></el-table-column>
                                    <el-table-column label="手机号" prop="phone"></el-table-column>
                                    <el-table-column label="职位" prop="job"></el-table-column>
                                    <el-table-column label="创建时间" prop="createTime"></el-table-column>
                                    <el-table-column label="更新时间" prop="update"></el-table-column>
                                </el-table>
                            </div>

                        </el-card>
                    </div>
                </el-main>
            </el-container>

        </el-container>
    </div>

</template>

<script>
import axios from "axios";
import request from "@/utils/request";
export default {
    name: "HomeView",
    data() {
        return {
            //默认不收缩
            isCollapse: false,
            asideWidth: '200px',
            collapseIcon: 'el-icon-s-fold',
            users:[],
        }
    },
    //页面加载后，进行请求数据
    mounted() {
        request.get('/user/selectAll').then(res=>{
            this.users = res.data
        })
        },
    methods: {
        //全屏展示功能
        handFull() {
            document.documentElement.requestFullscreen()
        },
        handleCollapse() {
            this.isCollapse = !this.isCollapse
            this.asideWidth = this.isCollapse ? '64px' : '200px'
            this.collapseIcon = !this.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
        }
    }
}
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
.el-submenu__icon-arrow {
    margin-top: -3px;
}

//调整收缩后高亮图标居中,这里的点又要有空格
.el-menu-item.is-active .el-tooltip {
    margin-left: -4px !important;
}

//设置二级菜单高亮后，高亮框宽度调整
.el-submenu .el-menu-item {
    min-width: 0 !important;
}

//设置二级菜单高亮后，字体对齐
.el-menu--inline .el-menu-item.is-active {
    padding-left: 50px !important;
}

//左侧  菜单收缩动画 阴影
.el-aside {
    transition: width .4s;
    box-shadow: 2px 0 2px rgba(0, 21, 41, 35);
}

.logo {
    width: 190px;
    height: 40px;
    transition: all .4s;

}

.logo-2 {
    width: 35px;
    height: 35px;
    transition: all .4s;

}

//头部菜单阴影，居中
.el-header {
    box-shadow: 2px 0 2px rgba(0, 21, 41, 35);
    height: 60px;
    display: flex;
    align-items: center;
}


</style>