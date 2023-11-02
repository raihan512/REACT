## REACT Component

** component কেন আসলো? ** </br> </br>

আমাদের React এর মধ্যে যে element ছিল সেটা আসলে ফাংশনাল কোন কিছু ছিল না। আমাদের ফাংশনাল বৈশিষ্ট্য সহ কিছুর দরকার ছিল যাতে আমরা আমাদের ডাটা ডাইন্যামিক ভাবে আমাদের অ্যাপে দেখাতে পারি। আর এই ফাংশনাল বৈশিষ্ট্যসহ যেই জিনিসটা আমরা আমাদের React অ্যাপে ব্যাবহার করি সেটাই হচ্ছে component। React এর ভিতরে ফাংশন হচ্ছে component আর component React এর element return করে। যেমনঃ
function clock () { </br>
&emsp; return ( </br>
&emsp; &emsp; <div> </br>
&emsp; &emsp; &emsp; <h1 class ="heading"> </br>
&emsp; &emsp; &emsp; &emsp; <span class="text"></span></br>

</h1>
&emsp; &emsp; </div> </br>

)
}
</br>
React এ component ব্যাবহার করার সুবিধা হলো আমরা একবার component তৈরি করে সেটাকে বারবার ব্যাবহার করতে পারি ফাংশনের মত। component ফাংশন হওয়ায় এটার মধ্যে আমরা চাইলে প্যারামিটার ও পাস করতে পারবো। যেমনঃ

>
