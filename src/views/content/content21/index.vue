<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">车辆三证合一、抵押解压、补换领号牌、临牌</div>
        </div>
        <div>
            <div>1.至10号楼办证厅前台取号办理业务。</div>
            <el-image :src="pic1"></el-image>
            <div>10号楼位置</div>
            <el-image :src="pic2"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content21-1.jpg'
import  pic2 from '../../../../public/static/images/content21-2.png'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
        }
    },
    methods: {
        goBack(){
            this.$router.push("/cate/cate2")
        }
    }
}
</script>

<style>

</style>
