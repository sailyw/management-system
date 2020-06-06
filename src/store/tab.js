export default {
  state: {
    menu: [], // 全部菜单
    currentMenu: null //点击菜单
  },
  mutations: {
    //   选择菜单
    selectMenu(state, val) {
      //   if (val.name !== 'home') {
      //     state.currentMenu = val;
      //   } else {
      //     state.currentMenu = null;
      //   }
      val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val);
    }
  },
  actions: {}
};
