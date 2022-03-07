## 模仿antd搭建的组件库
预览地址: https://zhangjhxx.github.io/static_storybook
### 安装
```powershell
npm i mock_componets
```

### 使用

```react
import "mock_componets/dist/index.css";
import {Button,Upload} from "mock_componets"

<Button label="error" btnType="error"/>
<Upload action="https://jsonplaceholder.typicode.com/posts" dragable={true} />
```

