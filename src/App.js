import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/register/:id" component={RegisterForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
