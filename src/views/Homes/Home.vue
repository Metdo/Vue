<template>
    <div class="qwe">
        <HomeHead />
        <HomeNav />
        <HomeRecommend />
        <HomeMenu />
        <HomeMerchant />
        <!-- <HomeList /> -->
        <!-- <FootNav /> -->
    </div>
</template>

<script>

    import HomeHead from '../../components/HomeHead';
    import HomeNav from '../../components/HomeNav';
    import HomeRecommend from '../../components/HomeRecommend';
    import HomeMenu from '../../components/HomeMenu';
    import HomeMerchant from '../../components/HomeMerchant';
    // import HomeList from '../components/HomeList';
    // import FootNav from '../FootNav';


export default {
    name: 'qwe',
  components: {
    HomeHead,
    HomeNav,
    HomeRecommend,
    HomeMenu,
    HomeMerchant,
    // HomeList
    // FootNav
  }
}
</script>

<style>

</style>
