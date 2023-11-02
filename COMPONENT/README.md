## REACT Component

**Component কেন আসলো?** <br/>
আমাদের React এর মধ্যে যে element ছিল সেটা আসলে ফাংশনাল কোন কিছু ছিল না। আমাদের ফাংশনাল বৈশিষ্ট্য সহ কিছুর দরকার ছিল যাতে আমরা আমাদের ডাটা ডাইন্যামিক ভাবে আমাদের অ্যাপে দেখাতে পারি। আর এই ফাংশনাল বৈশিষ্ট্যসহ যেই জিনিসটা আমরা আমাদের React অ্যাপে ব্যাবহার করি সেটাই হচ্ছে component। React এর ভিতরে ফাংশন হচ্ছে component আর component React এর element return করে। যেমনঃ

```
const root = ReactDOM.createRoot(document.getElementById("root"));
function Clock() {
  return (
    <h1 className="heading">
      <span className="text"></span>
      <span className="time">{new Date().toLocaleTimeString()}</span>
    </h1>
  );
}
root.render(Clock());
```

আমরা চাইলে এই এই ফাংশনটাকে এভাবেও লিখতে পারি

```
root.render(<Clock/>);
```

React component ব্যাবহার করার সুবিধা হলো আমরা একবার component তৈরি করে সেটাকে বারবার ব্যাবহার করতে পারি এবং চাইলে একইরকমের দেখতে কিন্তু ভিন্ন ভিন্ন ডাটা দিয়েও ওই একই component কে বারবার ব্যাবহার করতে পারি এবং দেখাতে পারি ওই component মধ্যে ডাটা পাস করে। যেমনঃ

```
root.render(<Clock locale="bn-BD"/>);
```

আমরা যখন কোন একটা component এ ডাটা বা প্যারামিটার পাস করি তখন ওই ডাটাকে বা ডাটাগুলোকে component এর argument এ একটা object এর মধ্যে রাখে। যেমন এখানে আমাদের পাস করা ডাটা ** locale="bn-BD" ** কে Clock ফাংশনের argument এ এভাবে থাকবে {locale: 'bn-BD'}। আবার আমরা যদি এই component এর মধ্যে আরও প্যারামিটার পাস করতাম যেমনঃ

```
root.render(<Clock locale="bn-BD" name="bangladesh" id="1971" />);
```

তাহলে আমাদের Clock ফাংশনের argument এ পেতাম {locale: 'bn-BD', name: 'bangladesh', id: '1971'}
