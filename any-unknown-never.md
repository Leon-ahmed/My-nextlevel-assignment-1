# TypeScript-এ `any`, `unknown` এবং `never`-এর Type Hierarchy

## ভূমিকা

TypeScript-এ type system আমাদের ভুল কমাতে সাহায্য করে। `any`, `unknown` এবং `never`—এই তিনটি type দেখতে কাছাকাছি মনে হলেও তাদের কাজ আলাদা। কোন পরিস্থিতিতে কোনটি ব্যবহার করতে হবে, তা জানা জরুরি।

## বিস্তারিত আলোচনা

`any` ব্যবহার করলে TypeScript প্রায় সব ধরনের type checking বন্ধ করে দেয়। অর্থাৎ, কোনো variable-এর type সম্পর্কে TypeScript আর নিরাপত্তা দিতে পারে না। যেমন:

```ts
let value: any = "Hello";
value.toFixed(); // TypeScript error দেখাবে না
```

কিন্তু এখানে `toFixed()` string-এর method নয়। তাই code চালানোর সময় error হতে পারে।

`unknown`-ও যেকোনো ধরনের value গ্রহণ করতে পারে, তবে ব্যবহার করার আগে type check করতে হয়। এ কারণেই এটি `any`-এর চেয়ে নিরাপদ।

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
```

এখানে type check করার পরেই string-এর method ব্যবহার করা হয়েছে।

অন্যদিকে, `never` এমন type বোঝায় যার কোনো value কখনো পাওয়া যায় না। সাধারণত যে function সবসময় error throw করে বা শেষ হয় না, সেখানে এটি কাজে লাগে।

```ts
function showError(message: string): never {
    throw new Error(message);
}
```

সহজভাবে বললে, `any` type checking এড়িয়ে যায়, `unknown` check করতে বাধ্য করে, আর `never` অসম্ভব value বোঝায়।

## উপসংহার

সাধারণভাবে `any` যতটা সম্ভব এড়িয়ে চলা ভালো। অজানা data নিয়ে কাজ করলে `unknown` ব্যবহার করা উচিত, কারণ এটি type safety বজায় রাখে। আর `never` ব্যবহার হয় এমন ক্ষেত্রে, যেখানে কোনো value তৈরি হওয়া সম্ভব নয়।