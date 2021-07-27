<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">外地号牌车辆转入上海</div>
            <div style="color: #898989">注：该业务需来车管所两次，第一次查验车辆，三个工作日后来选号上牌。</div>
        </div>
        <div>
            <div>1.车辆从等候区4号车道排队进入蓝色大棚的查验车位。</div>
            <el-image :src="pic1"></el-image>
            <div>2.至13号楼0号房间找穿黄马甲的工作人员免费拓印车架号。</div>
            <el-image :src="pic2"></el-image>
<!--            <el-image :src="pic3"></el-image>-->
            <div>3.拿着拓印至13号楼4号窗口递交材料，取号后回到自己车边等验车（将三角警告牌和反光背心摆放好）。</div>
            <el-image :src="pic4"></el-image>
            <el-image :src="pic5"></el-image>
            <div>4.验车完毕后开车离开，到指定日期再来办理剩下流程。</div>
            <div>注：第二次来时车可不开过来，但办理电子档案转籍的人员需将外省市号牌上交至7号房间。（13号楼0号房间可免费借取大力钳自行拆牌照）</div>
            <div>5.第二次来时先去7号房间取机动车登记证书。</div>
            <el-image :src="pic6"></el-image>
            <div>6.去15号楼审核额度，完成后回到13号楼7号房间取号等待办理业务。</div>
            <el-image :src="pic7"></el-image>
            <div>7.选号、付费后去10号楼2号窗口领取牌证。</div>
            <el-image :src="pic8"></el-image>
            <div>8.带着牌照开车回13号楼0号房间门口的装牌区域找黄马甲师傅免费安装牌照。</div>
            <el-image :src="pic9"></el-image>
            <div>全流程路线</div>
            <el-image :src="pic10"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content28-1.jpg'
import  pic2 from '../../../../public/static/images/content28-2.jpg'
import  pic3 from '../../../../public/static/images/content28-3.jpg'
import  pic4 from '../../../../public/static/images/content28-4.jpg'
import  pic5 from '../../../../public/static/images/content28-5.jpg'
import  pic6 from '../../../../public/static/images/content28-6.jpg'
import  pic7 from '../../../../public/static/images/content28-7.jpg'
import  pic8 from '../../../../public/static/images/content28-8.jpg'
import  pic9 from '../../../../public/static/images/content28-9.jpg'
import  pic10 from '../../../../public/static/images/content28-10.png'
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
