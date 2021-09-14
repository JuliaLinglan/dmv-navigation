<template>
    <div>
        <div style="text-align: center;margin-top: 20px">
            <div style="font-size: 22px">驾驶证到期换证</div>
            <div style="color: #898989">（上海或外地驾驶证尚未到有效期或超过有效期不足一年）</div>
        </div>

        <div>
            <div>1.请至12号楼进行拍照、体检。</div>
            <el-image :src="pic12haolou"></el-image>
            <div>2.请至8号楼自助受理区进行自助受理、付费，自助制证去自助打证。</div>
            <el-image :src="pic8haolou"></el-image>
<!--            <div>1.请至12号楼拍照、体检。</div>-->
<!--            <el-image :src="pic1"></el-image>-->
<!--            <div>2.完成后至10号楼办证厅自助区进行自助受理、付费。-->
<!--            </div>-->
<!--            <div>-->
<!--                <el-image :src="pic2"></el-image>-->
<!--                <el-image :src="pic3"></el-image>-->
<!--            </div>-->
<!--            <div>3.缴完费后到自助制证机进行证件打印。</div>-->
<!--            <el-image :src="pic4"></el-image>-->
<!--            <div>流程路线</div>-->
<!--            <el-image :src="pic5"></el-image>-->
        </div>
        <el-page-header style="margin: 20px" @back="goBack">
        </el-page-header>
    </div>

</template>

<script>
import pic1 from '../../../../public/static/images/content13-1.jpg'
import pic2 from '../../../../public/static/images/content13-2.jpg'
import pic3 from '../../../../public/static/images/content13-3.jpg'
import pic4 from '../../../../public/static/images/content13-4.jpg'
import pic5 from '../../../../public/static/images/content13-5.png'
import  pic8haolou from '../../../../public/static/images/8haolou.jpg'
import  pic12haolou from '../../../../public/static/images/12haolou.jpg'
export default {
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            pic5: pic5,
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
