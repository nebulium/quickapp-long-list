import device from '@system.device'
// import storage from '@system.storage'

const SystemInfo = {
  fetchAllInfo: async (_this) => {
    const menuButton = _this.$page.getMenuBarRect(); 

    let deviceData = await device.getInfo();
    const systemInfo = deviceData && deviceData.data;
    console.log(systemInfo)

    const statusBarHeight = systemInfo.statusBarHeight;
    const headerHeight = (menuButton.menuBarTop - systemInfo.statusBarHeight) * 2 + menuButton.menuBarHeight

    let data = {
      source: {
        menu: menuButton,
        system: systemInfo
      },
      statusBarHeight: statusBarHeight,
      headerHeight: headerHeight,
      headerRight: systemInfo.windowWidth - menuButton.menuBarLeft
    }
    // storage.set({key: 'SystemInfo', value: data});
    return data
  },
  // getInfo: () => {
  //   let storageInfoSync 
  // }
}

// async function getInfo() {

// }

export default SystemInfo