<template>
  <div class="footnav">
    <keep-alive>
     <router-view />
    </keep-alive>


    <van-tabbar v-model="active">
      <van-tabbar-item
      v-for="(item,idx) in foots"
      :key="idx"
      :icon="item.icon"
      @click="navTo(item.url)"
      >
      
      {{item.title}}

      </van-tabbar-item>
      <!-- <van-tabbar-item to="list" icon="search">列表页</van-tabbar-item>
      <van-tabbar-item to="cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="mine" icon="setting-o">我的</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'footnav',
    data() {
      return {
        active: 0,
        foots: [
          {
            title: '首页',
            url: 'home',
            icon: 'home-o'
          },
          {
            title: "列表页",
            // 路由名字
            url: "list",
            // 图标
            icon: "search"
          },
          {
            title: "购物车",
            url: "cart",
            icon: "friends-o"
          },
          {
            title: "我的",
            url: "mine",
            icon: "setting-o"
          }
        ]
      }
  },
  methods: {
    // 编程式导航
    navTo(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style scoped>
  html {
    position: fixed;
    bottom: -1px;
  }
</style>
