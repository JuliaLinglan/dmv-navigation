<template>
    <div>
        <div style="margin: 20px">
            <el-page-header style="font-weight:bold" @back="goBack" content="机动车业务列表">
            </el-page-header>
        </div>

        <div style="margin-top: 40px">
            <div class="cate1" @click="test1">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu1"></el-image>
                <div style="float: left; margin-left: 15px">车辆三证合一、抵押解押、</div>
                <div style="float: left; margin-left: 15px">补换领号牌、临牌</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: -11px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test2">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu2"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">变更登记</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test3">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu3"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">夫妻之间沪C牌照换市区牌照</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test9">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu4"></el-image>
                <div style="float: left; margin-left: 15px">机动车所有人名称变更、</div>
                <div style="float: left; margin-left: 15px">补换行驶证</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: -11px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test4">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu5"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">变更网约车、变更住所地址</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test5">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu6"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">同一所有人名下牌照互换</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test6">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu7"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">新车注册登记（上牌）</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test7">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu9"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">补领机动车登记证书</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test8">
                <el-image style="height: 50px;width: 50px;float: left" :src="jidongcheyewu10"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">外地号牌车辆转入上海</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
        </div>

    </div>
</template>

<script>
import  jidongcheyewu1 from '../../../../public/static/images/jidongcheyewu1.png'
import  jidongcheyewu2 from '../../../../public/static/images/jidongcheyewu2.png'
import  jidongcheyewu3 from '../../../../public/static/images/jidongcheyewu3.png'
import  jidongcheyewu4 from '../../../../public/static/images/jidongcheyewu4.png'
import  jidongcheyewu5 from '../../../../public/static/images/jidongcheyewu5.png'
import  jidongcheyewu6 from '../../../../public/static/images/jidongcheyewu6.png'
import  jidongcheyewu7 from '../../../../public/static/images/jidongcheyewu7.png'
import  jidongcheyewu8 from '../../../../public/static/images/jidongcheyewu8.png'
import  jidongcheyewu9 from '../../../../public/static/images/jidongcheyewu9.png'
import  jidongcheyewu10 from '../../../../public/static/images/jidongcheyewu10.png'
import right from '../../../../public/static/images/right.png'

export default {
    data() {
        return {
            jidongcheyewu1: jidongcheyewu1,
            jidongcheyewu2: jidongcheyewu2,
            jidongcheyewu3: jidongcheyewu3,
            jidongcheyewu4: jidongcheyewu4,
            jidongcheyewu5: jidongcheyewu5,
            jidongcheyewu6: jidongcheyewu6,
            jidongcheyewu7: jidongcheyewu7,
            jidongcheyewu8: jidongcheyewu8,
            jidongcheyewu9: jidongcheyewu9,
            jidongcheyewu10: jidongcheyewu10,
            right: right,
        }
    },
    methods: {
        test1() {
            this.$router.push("/content/content21")
        },
        test2() {
            this.$router.push("/content/content22")
        },
        test3() {
            this.$router.push("/content/content23")
        },
        test4() {
            this.$router.push("/content/content24")
        },
        test5() {
            this.$router.push("/content/content25")
        },
        test6() {
            this.$router.push("/content/content26")
        },
        test7() {
            this.$router.push("/content/content27")
        },
        test8() {
            this.$router.push("/content/content28")
        },
        test9() {
            this.$router.push("/content/content29")
        },
        goBack() {
            this.$router.push("/home")
        }
    }
}
</script>

<style>
.myButton {
    word-wrap: break-word !important;
    word-break: break-all !important;
    white-space: normal !important;
}
.cate1 {
    margin: 0 20px;
    text-align: center;
}

.el-divider--horizontal {
    float: left;
    margin: 15px 0;
}
</style>
