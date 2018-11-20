import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1542721460399'); /* IE9*/
    src: url('./iconfont.eot?t=1542721460399#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAUcAAsAAAAAB3wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fUhrY21hcAAAAYAAAABcAAABlM4qNSFnbHlmAAAB3AAAATsAAAFEVq3nhWhlYWQAAAMYAAAALwAAADYTU6VlaGhlYQAAA0gAAAAcAAAAJAfeA4VobXR4AAADZAAAAA4AAAAQEAAAAGxvY2EAAAN0AAAACgAAAAoA4gCKbWF4cAAAA4AAAAAeAAAAIAESADxuYW1lAAADoAAAAUUAAAJtPlT+fXBvc3QAAAToAAAAMQAAAEIRsXb+eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT+rZG7438AQw9zA0AAUZgTJAQDmswxjeJztkMENgDAMAy9tKRViFMSLaXixRhfuGsVtGANLFyuO8jGwAFEcIoE9GEO3Upt5ZJt54tSe5UZopdXeoa3ukulW5ME/LfNrn/P6tjj6ctQSrTgzrw72AqvaEUB4nCWQsU4CQRiE//9299YEAigCag4U1uOkEMgd3BmjoIkmJobWWEliogWW+gDYYXnvYGFlAoWtdyT6AFQ8BCQUFjYsrppMppj5ismABrB4pEC6kAYBwLCBXhmtGPIcZmzXw7Tt1ixTRapQkSrIl5ztOsgmg/6U0mm/1fMwEc1lIvNXP6Q09P0hIUO/gcturzWYUDoZKHfKchbNbEY+f4F/LKQASosFCQgAhzhsQwUgL6w8F+gkSdESOifMdewsirrQRaFYrzWxJgpcDUmtph3bPUQtuD2T49MbjF+f3DFdY7yD42rjfg/zx2Wvc3W0X2nvZLc2zOpoRECWsJkoiqQMmfHwUXGrpYtY9Ny8ZMZ6yrDNHACg2tT9+2QJILUCpq5xQdo4x+f376cg6OKB9mK8ydiaDBT+AzvCUDUAeJxjYGRgYABie+cdOfH8Nl8ZuFkYQOCGlMEWBP2/gYWBuQHI5WBgAokCAAQ5CRMAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAAEAAigCiAAB4nGNgZGBgYGEwAGIQYAJiLiBkYPgP5jMAAA3CAU8AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYErLTEvPSUxKzMvnckxkU23sDQzJ4eBAQBf8Ac0AAAA') format('woff'),
    url('./iconfont.ttf?t=1542721460399') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542721460399#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-fangdajing:before { content: "\e679"; }

  .icon-Aa:before { content: "\e607"; }

  .icon--quill:before { content: "\e608"; }
`
