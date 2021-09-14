<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">延期换证、注销驾驶证</div>
<!--            <div style="color: #898989">（仅办理上海驾驶证）</div>-->
        </div>
        <div>
            <div>请至8号楼自助取号机取号，等待窗口叫号办理业务。</div>
            <el-image :src="pic8haolou"></el-image>
<!--            <div>1.10号楼办证厅前台取号办理业务。</div>-->
<!--            <el-image :src="pic1"></el-image>-->
<!--            <div>10号楼位置</div>-->
<!--            <el-image :src="pic2"></el-image>-->
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content14-1.jpg'
import  pic2 from '../../../../public/static/images/content14-2.png'
import  pic8haolou from '../../../../public/static/images/8haolou.jpg'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic8haolou: pic8haolou,
        }
    },
    methods: {
        goBack(){
            this.$router.push("/cate/cate1")
        }
    }
}
</script>

<style>

</style>
