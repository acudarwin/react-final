import React, { useState } from 'react';
import './table.css';
const Table = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [headers, setHeaders] = useState([]);

  const handleColumnsChange = (event) => {
    setColumns(parseInt(event.target.value, 10));
  };

  const handleRowsChange = (event) => {
    setRows(parseInt(event.target.value, 10));
  };

  const handleHeadersChange = (event) => {
    const headersArray = event.target.value.split(",");
    setHeaders(headersArray);
  };

  // Genera una matriz de filas y columnas vacías
  const emptyTable = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => '')
  );

  return (
    <div>
      <div>
        <label htmlFor="columns">Columnas: </label>
        <input
          id="columns"
          type="number"
          min="1"
          value={columns}
          onChange={handleColumnsChange}
        />
      </div>
      <div>
        <label htmlFor="rows">Filas: </label>
        <input
          id="rows"
          type="number"
          min="1"
          value={rows}
          onChange={handleRowsChange}
        />
      </div>
      <div>
        <label htmlFor="headers">Cabeceras: </label>
        <input
          id="headers"
          type="text"
          value={headers}
          onChange={handleHeadersChange}
        /><br/>
        <span>Ingrese Cabeceras separados por comas</span>
      </div>
      <table id="tableGral">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {emptyTable.map((row, i) => (
            <tr key={i}>
              {row.map((_, j) => (
                <td key={`${i}-${j}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
