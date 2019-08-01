<template>
  <!-- <div>
    <ul>
      <li data-watch="1081353692743396">
        <a class="FcKg0z7ZA3tlZo-vSxopN" role="logo" aria-label="广州麦当劳伟诚广场餐厅">
          <div class="_2q5HWkq__CHgEQLE76bhCF" role="logo" aria-label="广州麦当劳伟诚广场餐厅">
            <img
              src="http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png"
              alt="icon"
              class="_3f5at3Y6MnNFz0hFltS3GS"
            />
            <div>
              <div class="_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder" style="height: 57px;">
                <img
                  src="http://p1.meituan.net/waimaipoi/0d9d28e674967ec9d586bb6d964cb35a59124.jpg"
                  alt="icon"
                  class="lazyimage-img"
                />
              </div>
            </div>
          </div>
          <div class="_2L_M6YlchG3yfnSSg7L6mL">
            <div class="_3ce4X4pC6NTjqy4_fKHA8E">广州麦当劳伟诚广场餐厅</div>
            <div class="_21yyPg0MxIEFMCg8RnTeUo">
              <div>
                <div class="D11MX3M-SDa4TXs8lmgHq" style="height: 10px;">
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                </div>
                <span class="_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5">4.8</span>
                <span class="_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed mtsi-num">月售+</span>
              </div>
              <div class="_20HnNmr2Skt7lyGyrsg5R7">
                <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">分钟</span>
                <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">m</span>
              </div>
            </div>
            <div class="_1wRyOmTit2wxvwxcfx4tf1">
              <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">起送 ¥</span>
              <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">配送 ¥</span>
              <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">人均 ¥</span>
            </div>
            <div class="_3ZkFiqxxif60zXGdUj4atX">
              <img
                src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                alt="icon"
              />
              <span class="_2W4nejgMhUSSXvLmQtEOL-">大众点评高分店铺</span>
            </div>
            <div class="_2t-V7ElqTaDS-PIn3jWR_X">
              <p class="_3ykJaIHGFSdjdQuChaUN6z">
                <img
                  src="http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png"
                  alt="activity icon"
                  class="_1vvO5ZUocEXs-aSvyWfhGT"
                />
                <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">折扣商品.折起</span>
              </p>
              <p class="_3ykJaIHGFSdjdQuChaUN6z">
                <img
                  src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png"
                  alt="activity icon"
                  class="_1vvO5ZUocEXs-aSvyWfhGT"
                />
                <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">本店支持开发票，开票金额元起</span>
              </p>
            </div>
          </div>
         
        </a>
      </li>
    </ul>
  </div> -->
      <div>
        <!-- <van-card
            v-for="(item,index) in shopList"
            :key="index"
            num="1"
            :price= item.wmPoiScore
            :desc= item.address
            :title= item.shopName
            :thumb= item.picUrl
        /> -->

        <van-card
          v-for ="(item,idx) in shopList"
          :key="idx"
          num="1"
          price="2.00"
          :desc="item.address"  
          :title="item.shopName"
          :thumb="item.picUrl"
        />
    </div>

</template>

<script>
export default {
    data() {
        return {
            shopList:[]
        }
    },
    async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d400b1f2c0fb9351245b95b/example/meituanlist"
    );
    this.shopList = data.data.data.shopList;
    // console.log(data);
  }
};
</script>

<style>
</style>
