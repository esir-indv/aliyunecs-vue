<template>
    <div class="block">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="createTime">
            </el-table-column>
            <el-table-column
                prop="updateTime"
                label="updateTime">
            </el-table-column>
        </el-table>

    </div>

</template>

<script >
export default {
    name: 'Hello',

    methods: {
        handleChange(value) {
            console.log(value);
        }
    },
    created:function () {

        this.$http.get("/depts").then((rep)=>{
            const { data: response } = rep.data
            this.tableData = response
            console.log(rep.data)
        })
    },
    data() {
        return {
            tableData: []
        }
    }
}
</script>



<style scoped lang="less"></style>