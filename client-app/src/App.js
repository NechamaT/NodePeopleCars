import React from "react";
import { Route } from "react-router";
import Home from "./Pages/Home";
import AddCar from "./Pages/AddCar";
import AddPerson from "./Pages/AddPerson";
import Layout from "./components/Layout";
import Delete from "./Pages/Delete";

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/addperson" component={AddPerson} />
      <Route exact path="/addcar/:personID" component={AddCar} />
      <Route exact path="/delete/:personID" component={Delete} />
    </Layout>
  );
};
export default App;