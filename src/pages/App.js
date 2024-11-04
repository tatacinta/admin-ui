import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpensesPage from "./components/Pages/ExpensesPage"; // Import ExpensesPage

function App() {
  return (
    <Router>
      <Switch>
        {/* Rute lain */}
        <Route path="/expenses" component={ExpensesPage} />
      </Switch>
    </Router>
  );
}

export default App;
