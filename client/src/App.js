import './App.css';
import { Route } from 'react-router-dom'
import { Fragment } from 'react';
import  Home from './components/Home'
import Sensors from './components/Sensors/Sensors';
import Nav from './components/Nav'


function App() {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
      {/* <Route path='/sensor' component={Nav} /> */}
      {/* <Route path='/sensor/:sensorId' component={Detail} /> */}
      <Route exact path='/sensor' component={Sensors} />
    </Fragment>
  );
}

export default App;
