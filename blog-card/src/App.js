import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', gap: '10px', borderRadius: '20px'}}>
        <h1>Blogs...</h1>
        <Card 
        summary={"Just kinding I don't like frogs that much especially when eating food."}
        date={'11/11/12'}
        title='A thing About Frogs....'  img="https://a-z-animals.com/media/2018/09/Frog-Golden-eyed-leaf.jpg"/>
        <Card 
    
        date={'11/11/12'}
        title='Also about frogs but no summary'  img="https://a-z-animals.com/media/2018/09/Frog-Golden-eyed-leaf.jpg"/>

    </div>
  );
}

export default App;
