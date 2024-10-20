import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/ref';
import MessagesList from './components/list';
import CommentsList from './components/commentsList';

function App(props) {
  const topPosition = '40px';
  return (
    <div>
       
        <h3>Hello, {props.name}</h3>
        <Timer />
        <RefExample />
        <Counter />
        <Show data="Любой текст внутри параграфа"/>
        <Show data="Другой текст из компонента"/>
        <CommentsList />
        <MessagesList />
    </div>
  );
}

export default App;
