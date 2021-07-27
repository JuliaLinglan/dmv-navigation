<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">夫妻之间沪C牌照换市区牌照</div>
        </div>
        <div>
            <div>1.车辆停在停车场(红色画圈区域)后至13号楼0号房间借取工具自行将牌照拆除。</div>
            <el-image :src="pic1"></el-image>
            <el-image :src="pic2"></el-image>
            <div>2.拆好牌照后将车辆停在蓝色大棚下指定拍照区域后去5号窗口叫工作人员拍照。</div>
            <el-image :src="pic3"></el-image>
            <div>3.拍好照片后将车开走停好，至13号楼5号窗口领取照片。</div>
            <el-image :src="pic4"></el-image>
            <div>4.领取好照片后带着照片和牌照去10号楼导办台取号办理业务。</div>
            <el-image :src="pic5"></el-image>
            <div>10号楼位置</div>
            <el-image :src="pic6"></el-image>
            <div>5.10号楼2号窗口牌证领取完毕后，带着牌照开车回13号楼0号房间门口的装牌区域找黄马甲师傅免费安装牌照。</div>
            <el-image :src="pic7"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content23-1.png'
import  pic2 from '../../../../public/static/images/content23-2.jpg'
import  pic3 from '../../../../public/static/images/content23-3.png'
import  pic4 from '../../../../public/static/images/content23-4.jpg'
import  pic5 from '../../../../public/static/images/content23-5.jpg'
import  pic6 from '../../../../public/static/images/content23-6.png'
import  pic7 from '../../../../public/static/images/content23-7.jpg'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            pic5: pic5,
            pic6: pic6,
            pic7: pic7,
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
