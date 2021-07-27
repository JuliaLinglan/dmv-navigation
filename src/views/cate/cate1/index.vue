<template>
    <div>
        <div style="margin: 20px">
            <el-page-header style="font-weight:bold" @back="goBack" content="驾驶证业务列表">
            </el-page-header>
        </div>

        <div style="margin-top: 40px">
            <div class="cate1" @click="test1">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng2"></el-image>
                <div style="float: left; margin-top: 16px;margin-left: 15px">恢复驾驶资格</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider style="float: left"></el-divider>
            <div class="cate1" @click="test2">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng1"></el-image>
                <div style="float: left; margin-top: 18px;margin-left: 15px">军警换证、境外换证、自考</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 12px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test3">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng3"></el-image>
                <div style="float: left; margin-top: 18px;margin-left: 15px">驾驶证到期换证</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 12px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test4">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng4"></el-image>
                <div style="float: left; margin-top: 18px;margin-left: 15px">延期换证、注销驾驶证</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 12px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test5">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng5"></el-image>
                <div style="float: left; margin-top: 18px;margin-left: 15px">驾驶证遗失、转入上海</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 12px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
            <div class="cate1" @click="test6">
                <el-image style="height: 50px;width: 50px;float: left" :src="huanzheng6"></el-image>
                <div style="float: left; margin-top: 18px;margin-left: 15px">自愿降级换证</div>
                <el-image style="height: 25px;width: 25px;float: right;margin-top: 16px" :src="right"></el-image>
            </div>
            <el-divider></el-divider>
        </div>

    </div>
</template>

<script>
import huanzheng1 from '../../../../public/static/images/huanzheng1.png'
import huanzheng2 from '../../../../public/static/images/huanzheng2.png'
import huanzheng3 from '../../../../public/static/images/huanzheng3.png'
import huanzheng4 from '../../../../public/static/images/huanzheng4.png'
import huanzheng5 from '../../../../public/static/images/huanzheng5.png'
import huanzheng6 from '../../../../public/static/images/huanzheng6.png'
import right from '../../../../public/static/images/right.png'

export default {
    data() {
        return {
            huanzheng1: huanzheng1,
            huanzheng2: huanzheng2,
            huanzheng3: huanzheng3,
            huanzheng4: huanzheng4,
            huanzheng5: huanzheng5,
            huanzheng6: huanzheng6,
            right: right,
            value: new Date()
        }
    },
    methods: {
        test1() {
            this.$router.push("/content/content11")
        },
        test2() {
            this.$router.push("/content/content12")
        },
        test3() {
            this.$router.push("/content/content13")
        },
        test4() {
            this.$router.push("/content/content14")
        },
        test5() {
            this.$router.push("/content/content15")
        },
        test6() {
            this.$router.push("/content/content16")
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
