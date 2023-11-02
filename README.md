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
<br/>
<img align="left" width="450" src="https://i.ibb.co/tm5VbPG/ht.png"/>
<img align="left" width="450" src="https://i.ibb.co/Z8ZwNxF/Capture.png"/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

  এখানে আমাদের উদ্দেশ্য হলো increment + বাটনে ক্লিক করলে আমদের এই display id এর মান এক এক করে বাড়তে থাকবে। এই কাজ করার জন্য আমাদের JS কোড
<img width="370" src="https://i.ibb.co/W5t5KQK/script-js.png"/>
<br/><br/>
এখন আমরা browser এর increment + বাটনে ক্লিক করলে 0 এর মান 1 করে বৃদ্ধি পেতে থাকবে। এই কাজটা আমরা খুবই সহজে করলাম। কিন্তু এটা বড় অ্যাপ্লিকেশনের জন্য উপযোগী নয়। আমাদের এই কোডে একটিমাত্র counter আছে, যার কারনে এটাকে তেমন একটা সমস্যা মনে হচ্ছে না। কিন্তু বাস্তবে আমাদের এমন অনেক counter থাকতে পারে।
<br/>
ধরা যাক আমাদের এই কোডেই আরেকটা counter আছে। তাহলে আমাদের ওই counter এর জন্য HTML এ আলাদা একটা counter বাটন ও counter ডিসপ্লে যুক্ত করতে হবে। এবং তাদের সাথে interaction করার জন্য তাদেরকে আলাদা আলাদা নতুন id দিতে হবে। এরপর JS ফাইলে এই id গুলোকে ধরতে হবে এবং এই counter এর বাটনে আরেকটা event listener function দিতে হবে। তার মানে ২টা একইরকমের কাজের জন্য আমাদেরকে ২ বার কোড লিখতে হয়েছে। এরকম আরও counter থাকলে আরও কোড রিপিট করতে হত। হয়ত এই কোডকে আমরা optimization করতে পারতাম একটা single function দিয়ে এবং তার মধ্যে প্যারমিটার পাস করে। যাই করিনা কেন, এই HTML element গুলোকে কিন্তু আলাদা করে ধরতেই হবে এবং সেটা করতে গিয়ে ভুল ও হতে পারে। সেইসাথে কোড ম্যানেজ করাও কঠিন হয়ে পড়বে। আগের JS developer রা কোড কমপ্লেক্সিটির সাথে কোড ম্যানেজ করতেও এমন সমস্যার মধ্যে পড়তো।
<br/>
