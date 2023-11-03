## REACT State কি?

State শব্দের অর্থ হচ্ছে কোন কিছুর অবস্থা। React এর ক্ষেত্রে আমাদের component এর মধ্যে যে ডাটাটা আছে তার অবস্থা বুঝায়। অর্থাৎ component এর মধ্যে যে ডাটাটার মান পরিবর্তন হয় তাকে State বলে। State হচ্ছে component এর ভিতরের ডাটা বা তার নিজস্ব ডাটা।
<br/><br/>
আর props হচ্ছে component এর বাহিরের ডাটা। props কে আমরা component এর বাহির থেকে পাঠাই বা বাহির থেকে কন্ট্রোল করতে পারি।
<br/><br/>
React শুধুমাত্র দুইটা সময়ে react kore.

1. যখন তার state চেঞ্জ হয়
2. props চেঞ্জ হলে
   props শুধু তার প্যারেন্ট component চেঞ্জ করতে পারে যেমন

```
const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
  render() {
    return (
      <h1>
        <span>{new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

function App() {
  return (
    <div>
      <Clock locale="bn-BD" />
    </div>
  );
}

root.render(<App />);
```

অর্থাৎ, props চেঞ্জ হলেই clock() টি রি-রেন্ডার হবে।
