export default {
  state: {
    isCollapse: false, //是否折叠
    currentMenu: null, //点击菜单
    menu: [], // 全部菜单
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ] //切换列表
  },
  mutations: {
    //   选择菜单
    selectMenu(state, val) {
      //   val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val);
      if (val.name !== 'home') {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.name === val.name);
        // 没找到就放进来
        result === -1 ? state.tabsList.push(val) : '';
      } else {
        state.currentMenu = null;
      }
    },
    // 关闭标签页
    closeTab(state, val) {
      // 遍历找到tabslist中有没有tablist,找到删除菜单的索引
      let result = state.tabsList.findIndex(item => item.name === val.name);
      // 删除
      state.tabsList.splice(result, 1);
    },
    // 收缩和展开
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
