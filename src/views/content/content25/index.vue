<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">同一所有人名下牌照互换</div>
            <div style="color: #898989">注意：自行拆除牌照并有符合制作行驶证照片要求的人员可直接带着牌照和照片去10号楼办理业务</div>
<!--            <el-image :src="pic1"></el-image>-->
        </div>
        <div>
            <div>1.车辆停在停车场(红色画圈区域)后去13号楼0号房间借取工具自行将牌照拆除。</div>
            <el-image :src="pic2"></el-image>
            <el-image :src="pic3"></el-image>
            <div>2.拆好牌照后将车辆停在蓝色大棚下指定拍照区域后去5号窗口叫工作人员拍照。</div>
            <el-image :src="pic4"></el-image>
            <div>3.拍好照片后将车开走停好，至13号楼5号窗口领取照片。</div>
            <el-image :src="pic5"></el-image>
            <div>4.领取照片后带着照片和牌照至10号楼导办台取号等待办理业务。</div>
            <el-image :src="pic6"></el-image>
            <div>10号楼位置</div>
            <el-image :src="pic7"></el-image>
            <div>5.10号楼2号窗口牌证领取完毕后，带着牌照开车回13号楼0号房间门口的装牌区域找黄马甲师傅免费安装牌照。</div>
            <el-image :src="pic8"></el-image>
<!--            <el-image :src="pic9"></el-image>-->
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content25-1.png'
import  pic2 from '../../../../public/static/images/content25-2.png'
import  pic3 from '../../../../public/static/images/content25-3.jpg'
import  pic4 from '../../../../public/static/images/content25-4.png'
import  pic5 from '../../../../public/static/images/content25-5.jpg'
import  pic6 from '../../../../public/static/images/content25-6.jpg'
import  pic7 from '../../../../public/static/images/content25-7.png'
import  pic8 from '../../../../public/static/images/content25-8.jpg'
import  pic9 from '../../../../public/static/images/content25-9.jpg'
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
            pic8: pic8,
            pic9: pic9,
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
