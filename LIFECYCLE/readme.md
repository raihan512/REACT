# React lifecycle কি?

React এর মাধ্যমে আমারা আমাদের DOM কে manipulate করতে পারি। এখন এই DOM কে manipulate করতে গেলে আমাদের এমন সিচুয়েশন আসতে পারে যে আমরা চাই আমাদের component আমাদের DOM এ ইন হলে তারপর আমরা কোন একটা কাজ করবো অথবা আমাদের component আপডেট হলে কিছু একটা করবো অথবা আমাদের component DOM থেকে চলে গেলে কোন একটা কাজ করবো। এখন এই যে, DOM এ আমাদের component ইন হওয়া বা আপডেট হওয়া বা ডিলিট হওয়া এগুলো আমরা কীভাবে বুঝব হয়েছে আমাদের DOM এ? এজন্য react আমদেরকে কিছু lifecycle মেথড দিয়েছে যেগুলো ব্যাবহার করে আমরা জানতে পারবো আমাদের DOM এর অ্যাকশন এর ব্যাপারে।
<br/>
আমরা জানি যে, React এ দুই ধরনের component আছে

1. Functional Component
2. Class Component

<br/>
 আর functional component এর জন্য hooks দিয়েছে, যা দিয়ে আমরা আমাদের component এর lifecycle আক্সেস করতে পারি।
<br/><br/>

## React Class Component Lifecycle

React তার class component এর জন্য আমাদেরকে কিছু lifecycle methods দিয়েছে। আমরা যখন আমাদের class কে React এর class থেকে extend করি তখন React.Component আমাদেরকে এই মেথডগুলো দেয়।

- componentDidMount
- componentDidUpdate
- componentWillUnmount

# componentDidMount

আমাদের component DOM এ লোড হয়েছে কি না, তা বুঝার জন্য আমরা componentDidMount() এর ব্যাবহার করি। এই মেথড ব্যাবহার করলে যখনি আমাদের component টা DOM এ লোড হবে এবং লোড হওয়ার পরে এই মেথডটা কল হয়ে যাবে এবং এই মেথডের ভিতরের লজিক রান করবে।
<br/>
আমরা যদি চাই, কোন component লোড হওয়ার আগেই বা componentDidMount হওয়ার আগেই কোন ভ্যারিয়েবলকে বা state কে ইনিশিয়ালাইজ করতে, তাহলে আমাদেরকে constructor ফাংশন ব্যাবহার করতে হবে। এই constructor ফাংশনের মধ্যে আমারা super() কে ব্যাবহার করবো যেন আমরা React.Component class এর প্রোপার্টি বা মেথডগুলোকে আমরা আমাদের নিজস্ব class এ আক্সেস করতে পারি। যেমন নিচের কোডে ব্যাবহৃত state, useState, componentDidMount, componentDidUpdate, componentWillUnmount ইত্যাদি এগুলো হচ্ছে React.Component class এর প্রোপার্টি বা মেথড।

```
import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
```

এই কোডে আমাদের লক্ষ্য হলো, সবার প্রথমে আমরা একটা state নিব যা আমাদের বর্তমান সময়টাকে দেখাবে এবং প্রতি এক সেকেন্ড পর পর আমাদের state আপডেট হতে থাকবে। তাই আমরা আমাদের component লোড হওয়ার আগেই এই state এ একটা ভ্যালু দিয়ে দিব যাতে তাকে আমরা আমাদের কোড লোড হওয়ার পরে বা component আমাদের DOM এ রেন্ডার হওয়ার পরে আমরা এর state চেঞ্জ করতে পারি। তাই আমরা constructor() এর ভিতরে this.state = {currentTime: new Date() } নিয়েছি এবং এটাকে আমাদের component এর p element এর মধ্যে bind করে দিয়েছি।
<br/>
তো এই কোড টা রান করার সময় এটি তার রান হওয়ার সময়টাকে state এর মধ্যে ইনিশিয়ালিয়াজ করে রেখেছে। এবং প্রথমবার এই ইনিশিয়ালিয়াজড state দিয়ে আমাদের component কে রেন্ডার করেছে। যেহেতু আমাদের এই component টা DOM এ লোড হয়েছে, তাই আমরা লোড হওয়ার পরে এই currentTime টাকে আপডেট করার লজিক লিখবো। আর যখনি আমাদের state চেঞ্জ হবে তখনি সাথে সাথে আমাদের render() টা কল হবে তারপর এই render() আমাদের পরিবর্তিত state টাকে আমাদের DOM এ রেন্ডার করে দিবে। এভাবে আমরা আমাদের currentTime টাকে আপডেট করতে থাকবো যার ফলে আমাদের এই Clock() টা চলতে থাকবে।
<br/>
এই কোডে আমরা আমাদের currentTime টাকে setInterval() মাধ্যমে আপডেট করবো।
<br/> <br/>
