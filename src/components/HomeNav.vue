<template>
  <div>
    
    <van-grid :column-num="5">
      
        <van-grid-item 
        :to="`/detail/${idx}/yujian`"
        v-for="(item,idx) in meituan" :key="idx" :icon="item.icon" :text="item.name" />
       </van-grid>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      kingkongList: []
    };
  },

  methods: {
    onSearch() {},
    
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
  }
};
</script>

<style>
</style>
