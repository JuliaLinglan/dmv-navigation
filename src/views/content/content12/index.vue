<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">军警换证、境外换证、自考</div>
            <div style="color: #898989">（部队驾驶证换上海驾驶证）</div>
            <div style="color: #898989">（境外驾驶证换上海驾驶证）</div>
            <div style="color: #898989">（驾驶证各种原因注销后重新考驾驶证）</div>
        </div>
        <div>
            <div>1.先至8号楼自助取号机上取号，等待叫号到窗口审核材料。</div>
            <el-image :src="pic8haolou"></el-image>
            <div>2.审核通过后请到12号楼拍照、体检。</div>
            <el-image :src="pic12haolou"></el-image>
            <div>3.完成后回至8号楼原窗口办理。</div>
            <el-image :src="pic8haolou"></el-image>
<!--            <div>1.10号楼办证厅前台取号，等待叫号到窗口审核材料。</div>-->
<!--            <el-image :src="pic1"></el-image>-->
<!--            <div>2.审核通过后请至12号楼拍照、体检。</div>-->
<!--            <el-image :src="pic2"></el-image>-->
<!--            <div>3.完成后返回至10号楼原窗口办理。</div>-->
<!--            <el-image :src="pic3"></el-image>-->
<!--            <div>流程路线</div>-->
<!--            <el-image :src="pic4"></el-image>-->
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content12-1.jpg'
import  pic2 from '../../../../public/static/images/content12-2.jpg'
import  pic3 from '../../../../public/static/images/content12-3.jpg'
import  pic4 from '../../../../public/static/images/content12-4.png'
import  pic8haolou from '../../../../public/static/images/8haolou.jpg'
import  pic12haolou from '../../../../public/static/images/12haolou.jpg'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            pic8haolou: pic8haolou,
            pic12haolou: pic12haolou,
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
