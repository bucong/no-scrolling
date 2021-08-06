## Installation
**install with NPM**
```bash
npm install no-scrolling --save
```

## function
function | Explanation
----|----
disableScroll | 禁止滚动
enableScroll | 恢复滚动

## Usage

```js
import { disableScroll, enableScroll } from 'no-scrolling'
export default {
  mounted () {
    disableScroll()
    // enableScroll()
  }
}
```

## Params
Parameter | Explanation | 必填 | default
----|----|----|----
domId | 最外部容器id | 是 | app
