<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">新车注册登记（上牌）</div>
            <div style="color: #898989">注意：1.需提前缴纳购置税、审核好额度、进入微信小程序“上海机动车环保认证助手”确认环保信息。</div>
            <div style="color: #898989">2.上牌材料中无原厂拓印可将车辆停好后去13号楼0号房间找黄马甲师傅免费拓印。</div>
<!--            <el-image :src="pic1"></el-image>-->
<!--            <el-image :src="pic2"></el-image>-->
        </div>
        <div>
            <div>1.车辆从等候区1号2号车道排队进入蓝色大棚的查验车位。</div>
            <el-image :src="pic3"></el-image>
            <div>2.去13号楼7号房间取号提交上牌材料。</div>
            <el-image :src="pic4"></el-image>
            <div>3.7号房间提交材料完毕后去6号窗口等待叫号领取查验材料。</div>
            <el-image :src="pic5"></el-image>
            <div>4.材料领取完毕后将材料袋放置于车辆前挡风玻璃处等待验车。（将车内三角警告牌、反光背心摆好）</div>
            <el-image :src="pic6"></el-image>
            <el-image :src="pic7"></el-image>
            <div>5.验车完毕后将材料交至5号窗口。</div>
            <el-image :src="pic8"></el-image>
            <div>6.材料交至5号窗口后将车辆驶离蓝色大棚，在停车场停好车。(红色画圈区域)</div>
            <el-image :src="pic9"></el-image>
            <div>7.回到7号房间领取受理凭证，进行选号、缴费。</div>
            <el-image :src="pic10"></el-image>
            <div>8.选号、付费后去10号楼2号窗口领取牌证。</div>
            <el-image :src="pic11"></el-image>
            <div>9.带着牌照开车回13号楼0号房间门口的装牌区域找黄马甲师傅免费安装牌照。</div>
            <el-image :src="pic12"></el-image>
            <div>全流程路线</div>
            <el-image :src="pic13"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content26-1.jpg'
import  pic2 from '../../../../public/static/images/content26-2.jpg'
import  pic3 from '../../../../public/static/images/content26-3.jpg'
import  pic4 from '../../../../public/static/images/content26-4.jpg'
import  pic5 from '../../../../public/static/images/content26-5.jpg'
import  pic6 from '../../../../public/static/images/content26-6.jpg'
import  pic7 from '../../../../public/static/images/content26-7.jpg'
import  pic8 from '../../../../public/static/images/content26-8.jpg'
import  pic9 from '../../../../public/static/images/content26-9.png'
import  pic10 from '../../../../public/static/images/content26-10.jpg'
import  pic11 from '../../../../public/static/images/content26-11.jpg'
import  pic12 from '../../../../public/static/images/content26-12.jpg'
import  pic13 from '../../../../public/static/images/content26-13.png'
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
            pic10: pic10,
            pic11: pic11,
            pic12: pic12,
            pic13: pic13,
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
