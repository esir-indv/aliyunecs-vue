<template>
    <div>
        <el-button type="primary" plain> 主要的按钮</el-button>
        <el-button type="danger" plain> 主要的按钮</el-button>
        <el-button type="primary" plain round> 主要的按钮圆角</el-button>

        <i>图标</i>&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button circle icon="el-icon-edit" type="primary"></el-button>&nbsp;&nbsp;
        <el-button circle icon="el-icon-delete" type="danger"></el-button>

        <el-row style="margin-top: 20px">
            <el-col>
                <el-input style="width: 200px "  v-model="username" placeholder="请输入用户名" suffix-icon="el-icon-user"></el-input>
                <el-input show-password style="width: 200px" v-model="password" placeholder="请输入密码"></el-input>
                <el-input clearable style="width: 200px" v-model="search" placeholder="请输入搜索内容" suffix-icon="el-icon-search"></el-input>
                <el-button>搜索</el-button>
                <div style="margin-top: 20px" >
                    输入建议表单：
                    <el-row style="margin: 20px 0">
                        <el-autocomplete style="width: 300px" placeholder="请输入内容" :fetch-suggestions="querySearch" :trigger-on-focus="false" v-model="SearchSuggestion">
                        </el-autocomplete>
                    </el-row>
                </div>
            </el-col>
        </el-row>

        <el-row>
            <h3>下拉框：</h3>
            <el-select v-model="select" @change="changeSelect" multiple filterable>
              <el-option v-for = "item in fruits" :key="item.id" :label="item.label" :value="item.name"></el-option>
            </el-select>

        </el-row>
    </div>


</template>
<script >
export default {
    name:'ElementTemp',
    computed: {
        querystring() {
            return querystring
        }
    },
    data(){
        return{
            username:'',
            password:'',
            search:'',
            SearchSuggestion:'',
            coffees:[{value:'1星巴克咖啡'},{value:'2瑞幸咖啡'},{value:'3库底咖啡'}],
            select:'',
            fruits:[
                {label:'大苹果',id :1},
                {label:'大苹果',id :2},
                {label:'小香蕉',id :3},
                {label:'小桃子',id :4},
                {label:'中西瓜',id :5},
                {label:'中西瓜',id :6}

            ]
        }
    },
    methods:{
        querySearch(query ,cb){
            let result =  query ? this.coffees.filter(value => value.value.includes(query)) : this.coffees
            cb(result)
        },
        changeSelect(){
            console.log(this.select)
        }

    }
}
</script>