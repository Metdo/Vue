<template>
    <div class="qwe">
        <HomeHead />
        <HomeNav />
        <HomeRecommend />
        <HomeMenu />
        <HomeMerchant />
    </div>
</template>

<script>

    import HomeHead from '../components/HomeHead';
    import HomeNav from '../components/HomeNav';
    import HomeRecommend from '../components/HomeRecommend';
    import HomeMenu from '../components/HomeMenu';
    import HomeMerchant from '../components/HomeMerchant';


export default {
    name: 'qwe',
  components: {
    HomeHead,
    HomeNav,
    HomeRecommend,
    HomeMenu,
    HomeMerchant
  }
}
</script>

<style>

</style>
