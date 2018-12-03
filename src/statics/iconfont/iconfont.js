import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
  @font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1543854597291'); /* IE9*/
  src: url('/iconfont.eot?t=1543854597291#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAZEAAsAAAAACTwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fUhrY21hcAAAAYAAAABmAAABquTLt8pnbHlmAAAB6AAAAk0AAALgduuUQ2hlYWQAAAQ4AAAALwAAADYTdjoHaGhlYQAABGgAAAAcAAAAJAfeA4ZobXR4AAAEhAAAAA4AAAAUFAAAAGxvY2EAAASUAAAADAAAAAwA4gH6bWF4cAAABKAAAAAfAAAAIAETAJduYW1lAAAEwAAAAUUAAAJtPlT+fXBvc3QAAAYIAAAAOwAAAExI9nuPeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT+rZG7438AQw9zA0AAUZgTJAQDmswxjeJztkcsRgCAMRF8EP+NYigV4pBhPdkDDtKFLol24zGOSTcIhACOQxC4y2IXRdco19xOr+5lD+aIzQFtaafW+Fc1f5DLV1z6hrqQZvWETvza/y5vlvrcgthn0n2gl8J4aYA910xYoAAB4nFVRS09TQRQ+Z87Mnfa+Wh63BdMHvcO9l0ps4bbcio8CiUZR2RoXBhJfC1yqMSYucIfu+h9cuDKBBS5tSfQHsCLxL0BCjAs3FAcwKJlvJmfO951vTs4AAzh6x4HWIAcKQGAbWzWMXJQlzMdJC3Nx0owCndKETmmCfvUPLjVQ7G1u7HO+v7G03sKsXcpbh587Pc57nc420XanjQPJ+tLmHud7m/ps1PoHdr5sfT8WnMp6HEDj6Ii6BCAhA+NQB6ioqCIVNoYojJQhSSSNuIhqRhnKD2eac9hUvtSNeMO5RpxcR9Z9dru/e/MpZh7deC4MJuQq7k61X1zGykKttbo8f6W+MlEcuxBM7ewQ9Ks4lw3VUL8nCi+/1ZOp6n3Xvhs8EIVRrxAHJQBA3dPayUxSAN4gBAaTilbwED9+/f2+213Da+xTYavvjvS7Wg7HM/xBPymARfgAELioQhWFdRbW8Qw1nNHd6tDPoJG7isO5Mp5DXq/TSOtabV2A4SQ2//cIT0wn0TekiyXUokZ8zsIroad8Q4fxHCZsq7oSO45pmuW0ZXHHxqiCZpr88UUifMsMvTm7EylMpYTtsItNlslKx5WG7eQtOz3szb9JBuRIhBNIWsbSabbwULgZy3FkSvrZAXkiGI0Gq8vTrpuyLdO0pG3RrWkV/nvjdbGADJkkzpkw0BtD0+LVxy3BvhBtkVh4FZNpSsehagFT+sMFY0SCIbIgsCNfosG0hmvjexETgnPSHP9LWsWCvpEuYVxgeRYnnsxqZ6YB8AddhHrdAAAAeJxjYGRgYADiqC2ip+L5bb4ycLMwgMAN7WpWBP2/gYWBuQHI5WBgAokCAAKmCLQAeJxjYGRgYG7438AQw8IAAkCSkQEVsAIARwsCbnicY2FgYGBBwwABBAAVAAAAAAAAAEAAigCiAXB4nGNgZGBgYGXoZmBhAAEmIOYCQgaG/2A+AwAWwAGrAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgSstMS89JTErMy+dyTGRTbewNDMnh704ozSxIjOPgQEArTkKQwA=') format('woff'),
  url('./iconfont.ttf?t=1543854597291') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1543854597291#iconfont') format('svg'); /* iOS 4.1- */
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
  
  .icon-shuaxin:before { content: "\e640"; }
` 