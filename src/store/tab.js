export default {
  state: {
    menu: [], // 全部菜单
    currentMenu: {} //点击菜单
  },
  mutations: {
    //   选择菜单
    selectMenu(state, val) {
      state.currentMenu = val;
    }
  },
  actions: {}
};
