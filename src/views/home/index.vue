<template>
    <div class="background">
        <div style="margin-top: 50px">
            <div style="font-size:30px;text-align: center;margin-top: 20px;">
                <span>交警总队车管所二分所</span>
            </div>
            <div style="font-size:28px;text-align: center;">
                <span>业务办理导航</span>
            </div>
        </div>
        <div class="top">
<!--            <img style="height: 100px;width: 300px" :src="jidongcheyewu" @click="test2">-->

                <el-image style="margin-top: 20px" :src="jiashizheng" @click="test1"></el-image>
<!--                <el-button style="font-size: 30px;width: 250px" type="primary" @click="test1">-->
<!--                    驾驶证业务-->
<!--&lt;!&ndash;                    <el-image style="height: 40px;width: 40px" :src="car"></el-image>驾驶证业务&ndash;&gt;-->
<!--                </el-button>-->


                <el-image style="margin-top: -20px; margin-left: -32px" :src="jidongche" @click="test2"></el-image>
<!--                <el-button style="font-size: 30px;width: 200px" type="primary" @click="test2">机动车业务</el-button>-->

        </div>
    </div>
</template>

<script>
import  jidongche from '../../../public/static/images/jidongche.png'
import  jiashizheng from '../../../public/static/images/jiashizheng.png'

export default {
    data() {
        return {
            jiashizheng: jiashizheng,
            jidongche: jidongche,
        }
    },
    methods: {
        test1() {
            this.$router.push("/cate/cate1")
        },
        test2() {
            this.$router.push("/cate/cate2")
        }
    }
}
</script>

<style>
.cate1 {
    text-align: center;
}

.background {
    /*background-size: cover;*/
    /*display: flex;*/
    /*position: relative;*/
    width: 100%;
    /*min-width: 1000px;*/
    height: 100%;
    min-height: 600px;
    /*overflow: hidden;*/
    /*background-color: #409EFF;*/

    /*background: url("../../../public/static/images/bg.png") center center no-repeat;*/
}

.topbar-container {
    /*background-color: rgb(0, 78, 126);*/
    /*渐变色*/
    /*background: linear-gradient(180deg, rgba(73, 200, 253, 1) 0%, rgba(58, 116, 239, 1) 100%);*/
    height: 50px;
    line-height: 50px;
    /*border-bottom: 4px solid whitesmoke;*/
    /*min-width: 1000px;*/
}

/*.topbar-title {*/
/*    !*color: white;*!*/
/*    font-size: 22px;*/
/*    line-height: 22px;*/
/*}*/

.top {
    text-align: center;
}
</style>
