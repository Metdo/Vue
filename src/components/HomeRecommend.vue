<template>
  <div id="shoplist-title" class="shoplist-title" style>推荐商家</div>
</template>

<script>
export default {};
</script>

<style scoped>
.shoplist-title {
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 9.6vw;
    font-size: 16px;
    color: #000;

}
.shoplist-title {
    background-color: #fff;
}
.shoplist-title:before {
    margin-right: 3.466667vw;
}

.shoplist-title:before {
    display: block;
    content: "";
    width: 5.333333vw;
    height: .266667vw;
    background-color: #999;
}

 ::before {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
}

.shoplist-title:after {
        display: block;
    content: "";

    width: 5.333333vw;
    height: .266667vw;
    background-color: #999;
}

::after {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
}


</style>
