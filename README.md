# REACT
&#8594; React is a JavaScript library to build User Interfaces <br/>

<details>
<summary>Library</summary>
  Library মানে হচ্ছে কিছু কালেকশন অব কোডস, যেটা re-use করে আমরা আমাদের অ্যাপ্লিকেশন বানাতে পারি। <br/>
  React ও একইভাবে কিছু vanilla javascript code এর কালেকশন যেটা ব্যাবহার করে আমরা easily website, mobile application এমনকি desktop এর user interface ও বানাতে পারি।
</details>

জখনি আমরা কোন application সম্পরকে কথা বলি তখন সেখানে দুইটি পার্ট থাকে।
1. Frontend বা User Interface
2. Backend
<br/>
Frontend হলো, যেখানে user interact করে। যেমন, browse করে, click করে, form submit করে ইত্যাদি ইত্যাদি। এবং আমাদের frontend এই interaction অনুযায়ী রেসপন্স করে backend এর সহায়তা নিয়ে। আর react শুধুমাত্র user ইন্টারফেস নিয়ে concern। তার মানে user এর action এর response করা, information display করা বা render করাটাই এর কাজ।
<br/>
তাহলে React এর প্রয়োজন কেন পড়লো?
<br/>
প্রথমে আমরা vanilla JS দিয়ে একটা ছোট UI বানাবো এবং সেখান থেকে দেখবো কেন React useful এবং কি অতিরিক্ত সুবিধা আমরা পাচ্ছি react ব্যাবহার করার কারনে।

<img align="right"  width="450" src="https://i.ibb.co/Z8ZwNxF/Capture.png"/>
```
<!DOCTYPE html>
<html lang="en">

<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Increment UI</title>
          <link rel="stylesheet" href="style.css">
</head>

<body>
          <div id="root">
                    <h1 id="display">0</h1>
                    <button id="increment">Increment +</button>
          </div>

          <script src="script.js"></script>
</body>

</html>
```


এখানে আমাদের উদ্দেশ্য হলো increment + বাটনে ক্লিক করলে আমদের এই display id এর মান এক এক করে বাড়তে থাকবে। এই কাজ করার জন্য আমাদের JS কোড

```
let number = 0;
const display = document.getElementById("display");
const button = document.getElementById("increment");

button.addEventListener("click", function () {
  number++;
  display.textContent = number;
});
```

এখন আমরা browser এর increment + বাটনে ক্লিক করলে 0 এর মান 1 করে বৃদ্ধি পেতে থাকবে। এই কাজটা আমরা খুবই সহজে করলাম। কিন্তু এটা বড় অ্যাপ্লিকেশনের জন্য উপযোগী নয়। আমাদের এই কোডে একটিমাত্র counter আছে, যার কারনে এটাকে তেমন একটা সমস্যা মনে হচ্ছে না। কিন্তু বাস্তবে আমাদের এমন অনেক counter থাকতে পারে।
<br/>
ধরা যাক আমাদের এই কোডেই আরেকটা counter আছে। তাহলে আমাদের ওই counter এর জন্য HTML এ আলাদা একটা counter বাটন ও counter ডিসপ্লে যুক্ত করতে হবে। এবং তাদের সাথে interaction করার জন্য তাদেরকে আলাদা আলাদা নতুন id দিতে হবে। এরপর JS ফাইলে এই id গুলোকে ধরতে হবে এবং এই counter এর বাটনে আরেকটা event listener function দিতে হবে। তার মানে ২টা একইরকমের কাজের জন্য আমাদেরকে ২ বার কোড লিখতে হয়েছে। এরকম আরও counter থাকলে আরও কোড রিপিট করতে হত। হয়ত এই কোডকে আমরা optimization করতে পারতাম একটা single function দিয়ে এবং তার মধ্যে প্যারমিটার পাস করে। যাই করিনা কেন, এই HTML element গুলোকে কিন্তু আলাদা করে ধরতেই হবে এবং সেটা করতে গিয়ে ভুল ও হতে পারে। সেইসাথে কোড ম্যানেজ করাও কঠিন হয়ে পড়বে। আগের JS developer রা কোড কমপ্লেক্সিটির সাথে কোড ম্যানেজ করতেও এমন সমস্যার মধ্যে পড়তো।
<br/>
এই সমস্যাটা ফেসবুকের ইঞ্জিনিয়ার রাও ফেস করেছিল। কারণ, ফেসবুকের মত এত বিশাল অ্যাপ্লিকেশনের UI অনেক কমপ্লেক্স এবং সেটা শুধুমাত্র vanilla JS দিয়ে ম্যানেজ করা কঠিন হচ্ছিল। তাই তারা এটার সমাধান নিয়ে কাজ করছিল এবং ২০১১ সালে ফেসবুকের একজন ইঞ্জিনিয়ার Jordan Walke ১ম react js এর একটা প্রোটোটাইপ তৈরি করেন এবং তার নাম দেন fax js। ২০১৩ সালে fax js এর নাম পরিবর্তন করে react js রাখা হয় এবং এটিকে ওপেন সোর্স করে দেয়া হয়। বর্তমানে বেশ বড় বড় কোম্পানিতে react js ব্যাবহৃত হচ্ছে যেমনঃ Netflix, facebook, whatsapp ইত্যাদি।
<br/>
এবার আমরা আমাদের আগের প্রোগ্রামটার সমাধান টা react js দিয়ে করব।

```
<body>
  <div id="root"></div>
  <!-- এই root div তার মধ্যেই আমাদের react application টা generate হবে -->

  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <!-- এটা আমাদেরকে HTML element generate করে দিবে এবং render করে দিবে -->

  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <!-- এটা আমাদেরকে HTML কোডকে DOM এ generate করে দিবে -->

  <script src="script.js"></script>
</body>
```

আমাদের HTML file এ আর কোন HTML লিখতে হবেনা। আমরা আমাদের html file এর একদম শেষে আমাদের increment ফাইল টা যুক্ত করার কারনে এখন আমরা আমাদের increment ফাইল থেকে React ও ReactDOM কে অ্যাক্সেস করতে পারব। টেস্ট করার জন্য console.log(React) এবং console.log(ReactDOM) করে দেখা যেতে পারে।
<br/>
আমরা একটু আগেই জেনেছিলাম যে, React আমাদের html গুলোকে generate করবে অথবা create করবে। আর ReactDOM সেগুলোকে আমাদের browser এর dom এ render করবে যেন আমরা দেখতে পাই। দুইটা আলাদা হওয়ার কারণ হচ্ছে React শুধু website বানানোর জন্য তৈরি করা হয়নি। আমরা React website এর বদলে যখন mobile application তৈরি করবো তখন এই ReactDOM এর পরিবর্তে React Native নামের আরেকটা লাইব্রেরী ব্যাবহার করবো। এভাবে আমরা একই কোড দিয়ে বানানো UI কে mobile application এ render করতে পারবো। একারণেই এ দুটো প্যাকেজ কে আলাদা রাখা হয়েছে। আমরা মূলত যা করবো সবই এই React কে ব্যাবহার করে করবো। ReactDOM শুধু print করার কাজে ব্যবহৃত হবে।

```
এখানে আমরা প্রথমে এই root আইডিটাকে ধরব
const domContainer = document.getElementById("root");
তারপর ReactDOM এর Render method কে কল করবো। এবং এই Render method টি দুটি প্যারামিটার রিসিভ করে।
1. কি প্রিন্ট করবো তা
2. কোথায় প্রিন্ট করবো
জেমনঃ ReactDOM.render('Hello World', domContainer)
```
তো, ReactDOM আমাদের এই কনটেন্ট কে আমাদের root div এর মধ্যে render করে দিবে এবং আমরা screen এ Hello World লেখাটি দেখতে পাব। এখানে আমরা জাস্ট একটা টেক্সট রেন্ডার করেছি। কিন্তু আমরা চাইলে এখানে যেকোন কিছু রেন্ডার করতে পারবো। শুধু টেক্সট রেন্ডার করে তো আমাদের কোন লাভ নেই। React library দিয়ে আমরা useful জিনিস বানাতে পারি এবং সেগুলোকে রেন্ডার করতে পারি। এই জিনিসগুলোকে react element বলে। React library আমাদেরকে কিছু useful function দিয়েছে, জেগুলো ব্যাবহার করে আমরা react element বানাতে পারি। সেরকম একটা ফাংশন হলো
```
React.createElement()
```
এই React.createElement() টি ৩টি প্যারামিটার নেয়। যার মধ্যে 
1. কি বা কোন element যোগ করতে চাচ্ছি তা (যেমনঃ div, h1, p)
2. এই তৈরিকৃত element এর মধ্যে কি ডাটা পাস করতে চাচ্ছি।
3. সেই element এর ভিতরে কি কনটেন্ট থাকবে

উদাহরণ
```
const domContainer = document.getElementById("root");
const myElement = React.createElement("div", null, "Hello World");
ReactDom.render(myElement, domContainer);
```
