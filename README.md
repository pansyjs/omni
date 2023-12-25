# 🌈 前言

## 数据结构

**请求响应的数据结构:**

```ts
interface Response {
  /** 请求数据 */
  data: ResponseData;
  /** 请求状态码(Http 状态码) */
  status: number;
  statusText: string;
  /** 请求配置 */
  config: Object;
  /** 请求头 */
  headers: Object;
}
```

请求响应的数据一般都满足以下约束:

```ts
interface ResponseData {
  /** 状态码 */
  code: number;
  /** 数据 */
  data: any;
  /** 信息 */
  message: string;
  [key: string]: any;
}
```

在平常开发中，大部分的场景只需要消费请求响应中的 `data.data`，可看以下示例

```ts
request().then(res) => {
  if (res.code === 0) {
    const data = res.data.data;

    console.log(data);
  }
}
```

可看到在处理每个请求时，都需要做以下事情

1. 判断请求是否成功
2. 获取深层的数据


