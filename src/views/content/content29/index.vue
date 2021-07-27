<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">机动车所有人名称变更、补换行驶证</div>
        </div>
        <div>
            <div>1.将车辆停在蓝色大棚下指定拍照区域后去5号窗口叫工作人员拍照（注：自己有符合要求的行驶证照片可直接带着牌照和照片去10号楼办理业务）。</div>
            <el-image :src="pic1"></el-image>
            <div>2.拍好照片后将车开走停好，至13号楼5号窗口领取照片。</div>
            <el-image :src="pic2"></el-image>
            <div>3.领取照片后带着照片至10号楼导办台取号等待办理业务。</div>
            <el-image :src="pic3"></el-image>
            <div>10号楼位置</div>
            <el-image :src="pic4"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content24-1.png'
import  pic2 from '../../../../public/static/images/content24-2.jpg'
import  pic3 from '../../../../public/static/images/content24-3.jpg'
import  pic4 from '../../../../public/static/images/content24-4.png'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
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
