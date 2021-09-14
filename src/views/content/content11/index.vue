<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">恢复驾驶资格</div>
            <div style="color: #898989">（提示：上海驾驶证过期超过一年不足三年）</div>
        </div>
        <div>
            <div>1.请至12号楼拍照、体检。</div>
            <el-image :src="pic12haolou"></el-image>
            <div>2.完成后请至8号楼取号机上取号、等待窗口叫号办理业务。</div>
            <el-image :src="pic8haolou"></el-image>
<!--            <div>1.请至 12号楼拍照、体检。</div>-->
<!--            <el-image :src="pic1"></el-image>-->
<!--            <div>2.10号楼导办台取号、等待叫号办理业务。</div>-->
<!--            <el-image :src="pic2"></el-image>-->
<!--            <div>流程路线</div>-->
<!--            <el-image :src="pic3"></el-image>-->
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>

</template>

<script>
import  pic1 from '../../../../public/static/images/content11-1.jpg'
import  pic2 from '../../../../public/static/images/content11-2.jpg'
import  pic3 from '../../../../public/static/images/content11-3.png'
import  pic8haolou from '../../../../public/static/images/8haolou.jpg'
import  pic12haolou from '../../../../public/static/images/12haolou.jpg'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
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
