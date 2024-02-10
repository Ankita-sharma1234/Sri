import React from 'react'
import Navbarcontanct from '../Navbarcontanct'
import FooterContanct from '../FooterContanct'

function BestPractices() {
  return (
    <>
    <style>{`


  
  table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 98%;
   
    table-layout: fixed;
    background: #fefefe;
  }
  
  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
    color: #f6f6f6;
  }
  
  table thead{
    background: #5c75a3;
    border-bottom: none;
    color: #fff;
  }
  
  table tr {
    padding: .35em;
  }
  
  table tr:nth-child(even) {
    background: #f0f0f0;
  }
  
  table tbody tr:hover {
    background: #d9e3e8;
  }
  
  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }
  
  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
  
    table caption {
      font-size: 1.3em;
    }
  
    table thead th {
      display: none;
    }
  
    table tr {
      display: block;
    }
  
    table td {
      /* border-bottom: 1px solid #ddd; */
      display: block;
      text-align: left;
    }
  
    table td::before {
      content: attr(data-label);
      display: block;
      font-weight: light;
      text-transform: uppercase;
      font-size: 0.7em;
      margin-bottom: 0.6em;
      color: #1976d2;
    }
  
    table td:last-child {
      border-bottom: 0;
    }
  }
  h2 {
    text-align: center;
    background-color:#14adad;
    // Width : 98%;
    // margin-left:10px;
    border-radius: 25px;
    margin-top: 50px;
  }
  


    `}</style>
    <Navbarcontanct />

<h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>Best Practices</b></h2>
    <table style={{marginTop:"50px",marginLeft:"8px"}}>
  
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Best Practices</th>
    
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="NIM">1</td>
        <td data-label="Nama">Enterprise Resources Planning (ERP)</td>
        
      </tr>
      <tr>
        <td data-label="NIM">2</td>
        <td data-label="Nama">Activity Based Continuous Assessment (ABCA) System</td>
       
      </tr>
     
    </tbody>
  </table>
  <FooterContanct />
  </>
  )
}

export default BestPractices