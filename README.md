## 🌈 前言

请求响应体的数据结构:

```ts
interface Response {
  /** 请求数据 */
  data: ResponseData;
  /** 请求状态码 */
  status: number;
  statusText: string;
  /** 请求配置 */
  config: Object;
  /** 请求头 */
  headers: Object;
}
```

请求返回的数据结构一般都满足以下数据约束:

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


