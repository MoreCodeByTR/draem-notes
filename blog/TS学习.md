# TS 小记

[Ts 官网](https://www.typescriptlang.org/zh/)

[详解 TypeScript 中的 typeof 和 keyof](https://juejin.cn/post/7096869746481561608)

## keyof

```typescript
interface Point {
  a: string;
  b: string;
}

type Pk = keyof Point;

const age: Pk = 'b';
```

```typescript
type OptionsFlags<T> = {
  [key in keyof T]: boolean;
};

type Name = OptionsFlags<{ name: 1; age: 11 }>;

// type Name = {
//     name: boolean;
//     age: boolean;
// }
```

keyof 作用于 object 的类型，并将其 key 值转换为联合类型

---

## typeof

用户获取变量的类型

```typescript
function showName() {
  return {
    name: 133,
  };
}

type P = ReturnType<typeof showName>;

// type P = {
//   name: number;
// };
```

```typescript
const info = ['school', 'age'] as const;
type Info = typeof info[number];
// type Info = "school" | "age"
```
