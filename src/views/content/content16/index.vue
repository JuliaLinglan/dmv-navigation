<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">自愿降级换证</div>
            <div style="color: #898989">（A、B证降为C证，D、E证降为F证且驾驶证尚未到有效期）
            </div>
        </div>
        <div>
            <div>1.请至12号楼拍照。</div>
            <el-image :src="pic1"></el-image>
            <div>2.完成后至10号楼办证厅取号办理。</div>
            <el-image :src="pic2"></el-image>
            <div>流程路线</div>
            <el-image :src="pic3"></el-image>
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>
</template>

<script>
import  pic1 from '../../../../public/static/images/content16-1.jpg'
import  pic2 from '../../../../public/static/images/content16-2.jpg'
import  pic3 from '../../../../public/static/images/content16-3.png'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
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
