import { useState } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask";
import ListOfTask from "./components/ListOfTask";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="container py-5">
            <div className="justify-content-center row">
              <div className="col-md-8">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="align-items-center d-flex">
                      <h2 className="card-title">Task Management</h2>
                    </div>
                    <AddTask />
                    <ListOfTask />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
