<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">补领机动车登记证书</div>
            <el-image :src="pic1"></el-image>
        </div>
        <div>
            <div>1.车辆从等候区4号车道排队进入蓝色大棚的查验车位。</div>
            <el-image :src="pic2"></el-image>
            <div>2.去13号楼0号房间找穿黄马甲的工作人员免费拓印车架号。</div>
            <el-image :src="pic3"></el-image>
<!--            <el-image :src="pic4"></el-image>-->
            <div>3.拿着拓印去13号楼4号窗口递交材料领取排队号后回到自己车边等验车（将三角警告牌和反光背心摆放好）。</div>
            <el-image :src="pic5"></el-image>
            <el-image :src="pic6"></el-image>
            <div>4.验车完毕后将车辆驶离蓝色大棚，在停车场停好车(红色画圈区域)。</div>
            <el-image :src="pic7"></el-image>
            <div>5.然后去10号楼自助机处付费（扫描流水凭证，如暂无缴费信息，请耐心等待），缴费完成，14号窗口等待叫号领取登记证书。</div>
            <el-image :src="pic8"></el-image>
            <div>全流程路线</div>
            <el-image :src="pic9"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content27-1.jpg'
import  pic2 from '../../../../public/static/images/content27-2.jpg'
import  pic3 from '../../../../public/static/images/content27-3.jpg'
import  pic4 from '../../../../public/static/images/content27-4.jpg'
import  pic5 from '../../../../public/static/images/content27-5.jpg'
import  pic6 from '../../../../public/static/images/content27-6.jpg'
import  pic7 from '../../../../public/static/images/map-3.png'
import  pic8 from '../../../../public/static/images/content27-8.jpg'
import  pic9 from '../../../../public/static/images/content27-9.png'
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
