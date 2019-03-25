import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1553494741269'); /* IE9 */
  src: url('iconfont.eot?t=1553494741269#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1553494741269') format('woff'),
  url('iconfont.ttf?t=1553494741269') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1553494741269#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon49:before {
  content: "\\e631";
}

.iconAa:before {
  content: "\\e636";
}

.iconbi:before {
  content: "\\e617";
}

.iconweibiaoti--:before {
  content: "\\e60f";
}

.iconweibiaoti--2:before {
  content: "\\e612";
}

.iconweibiaoti--1:before {
  content: "\\e61c";
}


`