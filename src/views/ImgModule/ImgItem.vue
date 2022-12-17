<template>

    
    <ImgDetails />
    <ImgFlex />
    



</template>

<script>
import ImgDetails from '@/components/imgDetail/ImgDetails.vue';
import ImgFlex from '@/components/home/ImgFlex.vue';
import HomeHeader from '@/components/home/HomeHeader.vue';
import { onMounted } from 'vue';

export default {



    setup(props) {
        

        console.log(props);


        return {
            props
        }
    },



    components: {
        ImgDetails, ImgFlex, HomeHeader
    },


}
</script>

<style lang="less" scoped>

</style>