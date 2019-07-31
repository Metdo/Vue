<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item title="距离最近" />
      <van-dropdown-item title="品质联盟"  />
      <van-dropdown-item title="筛选"  />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      menu: []
    };
  },

  async created() {
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/filterconditions"
    );
    this.menu = menu.data.data.sortVOList;
  },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //   往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        // 构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>

<style>
</style>
