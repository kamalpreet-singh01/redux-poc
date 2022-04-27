import { selectTicket } from './redux/actions';
import './App.css';
import BugList from './components/BugList';
import  AddBug  from './components/AddBug';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      {/* <AddBug/>
      <BugList/> */}
      <PostList/>
    </div>
  );
}

export default App;
