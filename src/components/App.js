import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => (
  <>
    <Switch>
      <Route path="/reader" component={Reader} />
      <Redirect to="reader?items=1" />
    </Switch>
  </>
);

export default App;
