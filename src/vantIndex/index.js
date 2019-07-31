import Vue from 'vue';
// 搜索
import { Search } from 'vant';
// 列表数据
import { Grid, GridItem } from 'vant';
// 下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';

import { Card } from 'vant';



export default ()=> {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Card);
}
