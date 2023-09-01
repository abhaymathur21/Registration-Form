import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import DataTable from "./DataTable";
import "./App.css";
import axios from 'axios';
const App = () => {
// class App extends React.Component {
  const [data, setData] = useState([]);

  const handleRegister = (newData) => {
    setData([...data, newData]);
    
  };

  const handleEdit = (index) => {
    
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        // Handle error if needed
      });
  }, []);

  return (
    <div>
      <h1>Registration App</h1>
      <RegistrationForm onRegister={handleRegister} />
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />

      {data.map((data, id) =>  (
            <div key={id}>
            <div >
                  <div >
                        <h1>{data.data} </h1>
                        <footer >--- by
                        <cite title="Source Title">
                        {data.name}</cite>
                        </footer>
                  </div>
            </div>
            </div>
            )
          )}
    </div>
  );
  }
    



export default App;
