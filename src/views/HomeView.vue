<template>
  <HomeHeader />
  <ImgMain />
  <ImgFlex />
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue';
import ImgMain from '@/components/home/ImgMain.vue';
import ImgFlex from '@/components/home/ImgFlex.vue';


export default {
  name: 'HomeView',
  components: {
    HomeHeader,ImgMain,ImgFlex
    
  }
}
</script>
