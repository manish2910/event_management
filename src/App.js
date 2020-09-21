import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import EventForm from './components/EventForm/EventForm';
import EventList from './components/EventList/EventList';
import NotFound from './components/NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route path="/add" component={EventForm} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
