import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const blogData = [
     {summary: "Just kinding I don't like frogs that much especially when eating food.", key: 0,
      title: "'A thing About Frogs....' ", img: "https://a-z-animals.com/media/2018/09/Frog-Golden-eyed-leaf.jpg",  date:'11/11/12',
    },
    {key: 1,
      date:'11/11/12',
    title: 'Also about frogs but no summary', img: "https://a-z-animals.com/media/2018/09/Frog-Golden-eyed-leaf.jpg"
  },
  ];
  return (
    <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', gap: '10px', borderRadius: '20px'}}>
         <h1>Blogs...</h1>
         {blogData.map(b => <Card key={b.key} summary={b.summary} img={b.img} title={b.title} date={b.date} />)}

    </div>
  );
}

export default App;
