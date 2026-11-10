# TypeScript-এ Type Alias এবং Interface-এর পার্থক্য

## ভূমিকা

TypeScript-এ `type` alias এবং `interface`—দুটিই data-এর structure বা type নির্ধারণ করতে ব্যবহার করা হয়। ছোট project থেকে বড় application—সব জায়গায় সঠিকটি বেছে নিলে code বোঝা এবং maintain করা সহজ হয়।

## বিস্তারিত আলোচনা

`interface` সাধারণত object-এর structure নির্ধারণ করতে ব্যবহার করা হয়। যেমন, কোনো user-এর নাম ও বয়স কেমন হবে তা নির্ধারণ করা যায়।

```ts
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Abir",
    age: 22
};
```

অন্যদিকে, `type` alias দিয়ে object type ছাড়াও union, intersection, tuple type তৈরি করা যায়।

```ts
type Status = "pending" | "success" | "failed";

type Point = {
    x: number;
    y: number;
};
```

একটি গুরুত্বপূর্ণ পার্থক্য হলো, একই নামের `interface` একাধিকবার লিখলে TypeScript সেগুলো একসঙ্গে merge করতে পারে। একে declaration merging বলা হয়।

```ts
interface Product {
    name: string;
}

interface Product {
    price: number;
}
```

এখন `Product`-এর মধ্যে `name` এবং `price`—দুটিই থাকবে। কিন্তু একইভাবে একই নামের `type` alias আবার declare করা যায় না।

তাহলে কোনটি ব্যবহার করব? Object-এর structure নির্ধারণ করতে এবং পরে extend করার প্রয়োজন থাকলে `interface` ভালো পছন্দ। আর union বা একাধিক type একসঙ্গে প্রকাশ করতে হলে `type` বেশি সুবিধাজনক। তবে অনেক সাধারণ object type-এর ক্ষেত্রেই দুটো ব্যবহার করা যায়।

## উপসংহার

`type` এবং `interface`-এর মধ্যে একটিকে সবসময় সেরা বলা যায় না। কাজের ধরন অনুযায়ী নির্বাচন করাই ভালো। নিয়মিতভাবে একই coding style অনুসরণ করলে project-এর code আরও পরিষ্কার ও সহজে maintain করা যায়।