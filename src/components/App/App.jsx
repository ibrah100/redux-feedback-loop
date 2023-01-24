import { React } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'; 
import './App.css';


// import components
import Understanding from '../Understanding.jsx';
import Support from '../Support.jsx';
import Comments from '../Comments.jsx';
import Thanks from '../Thanks.jsx';
import Admin from '../Admin.jsx';
import Feeling from '../Feeling';
import Header from '../Header';
import Review from '../Review';

function App() {

  return (
    <div className='App'>
      <Router>
          
          <Route exact path="/">
            <Header />
            <Feeling />
          </Route>
            
          <Route exact path="/understanding">
            <Header />
            <Understanding />
          </Route>

          <Route exact path="/support">
            <Header />
            <Support />
          </Route>

          <Route exact path="/comments">
            <Header />
            <Comments />
          </Route>

          <Route exact path="/review">
            <Header />
            <Review />
          </Route>

          <Route exact path="/thanks">
            <Header />
            <Thanks />
          </Route>

          <Route exact path="/admin">
            <Header />
            <Admin />
          </Route>
          
      </Router>
    </div>
  );
}

export default App;
