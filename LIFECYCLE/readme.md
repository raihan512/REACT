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
