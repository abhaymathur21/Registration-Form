import React from "react";

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Saved Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.mobile}</td>
              <td>{entry.city}</td>
              <td>{entry.state}</td>
              <td>
                {/* <button onClick={() => onEdit(index)}>Edit</button> */}
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
