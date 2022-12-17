<template>
<HomeHeader :activeItem="1"/>
<DescDiv />
</template>

<script>
import DescDiv from '@/components/DescDiv.vue';
import HomeHeader from '@/components/home/HomeHeader.vue';

export default {
    components: { DescDiv, HomeHeader }
}
</script>

<style lang="less" scoped>

</style>