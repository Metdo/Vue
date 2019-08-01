<template>
  <div>
    <van-search background="#0085ff" placeholder="请输入搜索关键词" v-model="value" />

    <van-grid :column-num="5">
      <van-grid-item v-for="(item,idx) in meituan" :key="idx" :icon="item.icon" :text="item.name" />
    </van-grid>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      kingkongList: []
    };
  },

  methods: {
    onSearch() {}
  },

  computed: {
    meituan() {
      return this.kingkongList.slice(0, 10);
    }
  },

  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d400b1f2c0fb9351245b95b/example/meituan"
    );
    this.kingkongList = data.data.data.kingkongList;
    console.log(data);
  }
};
</script>

<style scoped>




</style>
