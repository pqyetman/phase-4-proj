import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory } from "react-router-dom";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Home from "./Home"
import Customers from "./Customers"
import Employees from "./Employees"
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";




function App() {

  const history = useHistory()

  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
      }
      console.log(currentUser)
    })




  }, [])

  const updateUser = (user) => setCurrentUser(user)

 

  
  return (
    <div>
     { currentUser? <NavBar currentUser = {currentUser} updateUser={updateUser}/> : ""}
      <Switch>
        <Route exact path="/">
          <SignIn updateUser={updateUser} />
        </Route>
        <Route exact path="/signup">
          <SignUp updateUser={updateUser}/>
        </Route>
        <Route exact path="/r-customers">
          <Customers />
        </Route>
        <Route exact path="/r-employees">
          <Employees />
        </Route>
        <Route  exact path="/home" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
