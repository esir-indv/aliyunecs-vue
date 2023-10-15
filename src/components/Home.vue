<template>
    <div style="height: 100%  ">
        <el-container style="height: 100%;">
            <!--侧边栏导航-->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246);height: 100%">
                <el-menu :default-openeds="['1', '3']" style="height: 100%">
                    <el-submenu index="1">
                        <template slot="title"><i class="fa fa-cog fa-spin fa-5xx"></i>&nbsp;导航一</template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="fa fa-cog fa-refresh"></i>导航二</template>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--中间主体区域-->
            <el-container>
                <!--中间主体头部 区域-->
                <el-header style="text-align: right; font-size: 12px;border-bottom: 1px solid #ccc;line-height: 60px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script >
export default {
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(5).fill(item)
        }
    }
};

</script>

<style scoped lang="less">
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>