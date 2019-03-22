import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1552282854581'); /* IE9 */
    src: url('./iconfont.eot?t=1552282854581#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1552282854581') format('woff'),
    url('./iconfont.ttf?t=1552282854581') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1552282854581#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`