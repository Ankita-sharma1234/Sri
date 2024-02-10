import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function ExamSchedule() {
  return (
    <>
    <style>{`


  

  h2 {
    text-align: center;
    background-color:#14adad;
    border-radius: 25px;
    margin-top: 50px;
  }



  .table-container, .table-row {
    display: flex;
    
  }
  .table-container{
    flex-direction: column;
     border: 1px solid #000;
   
  }
  .table-header {
    display: flex;
    background:#336699;
    color: #FFF;
  }
  .table-cell {
    flex-grow: 1;
    border-right: 1px solid #000;
    padding: 10px;
  }
  .table-cell:last-child {
    border: none;
  }
  .table-row:nth-child(even) {
    background: #F0F0F0;
  }
  .table-header .table-cell {
    text-align: center;
    font-weight: bold;
    font-size: 1.1em;
  }
  .table-cell:nth-child(1) {
    width: 1px;
  }
  .table-cell:nth-child(2) {
    width: 70%;
  }
  .table-cell:nth-child(3) {
    width: 15%;
  }
  .table-cell:nth-child(4) {
    width: 15%;
  }
  @media screen and (max-width: 1024px) {
    .table-row {
      display: block;
    }
    .table-header {
      display: none;
    }
    .table-cell {
      display: block;
      border: none;
      width: 100% !important;
    }
    .table-cell:before {
      content: attr(data-heading);
      display: block;
      color: #0099FF;
      font-size: 1.1em;
      font-weight: bold;
    }
  }
  


    `}</style>
    <Navbarcontanct />

<h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>ExamSchedule</b></h2> <br/><br/>
    {/* <table style={{marginTop:"50px",marginLeft:"8px"}}>
  
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
  </table> */}

<h3 style={{marginLeft:"50px"}}>Examination December – 2023 </h3>

<div className="table-container" style={{width:"60%" ,marginTop:"30px",marginLeft:"80px"}}>
  <div className="table-header table-row">
    <div className="table-cell">S. No.</div>
    <div className="table-cell">Time Table</div>
  
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
       <b> 1</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      	
     <b>Bachelor of Physical Education I Sem (Regular/Ex)</b>
    </div>
    
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>2</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of  Education I Sem (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>3</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Post-Graduation Diploma in Computer Application (Regular/Ex)</b>
    </div>
    
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>4</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of Law  (I Sem) (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>5</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Master of Science I Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>6</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
   <b> Diploma in Engineering  I  Semester (Regular) As per AICTE Scheme</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>7</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Diploma in Engineering  I  Semester  (Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>8</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
     <b>Bachelor of Pharmacy I Semester (Regular/Ex) Revised   </b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>9</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Pharmacy II Semester (Ex) Revised   </b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>10</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Pharmacy III Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>11</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Master of Arts l Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>12</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Master Of Commerce l Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
    <b>13</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Master of Technology (All Branch) I  Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>14</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Masters in Business Administration  l Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>15</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Hotel Management & Catering Technology  1 Sem (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>16</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of Arts Bachelor of Education (All Sem)(Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>17</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Engineering (I to III Semester) (Regular/Ex) As per AICTE Scheme</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>18</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Library and Information Science (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>19</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Masters in Computer Application I Semester [Regular/Ex] New Scheme</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>20</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Master of Pharmacy I & II Semester  (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>21</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>B.Sc. (Hons.) Agriculture l Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>22</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Diploma in Engineering III Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>23</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
     <b>B. Tech. (Dairy Technology) I- II Semester [Ex]</b>
    </div>
   </div>
 
</div> <br/><br/><br/><br/>


{/* ================================== */}

<h3 style={{marginLeft:"50px"}}>Examination December – 2023 </h3>

<div  className="table-container" style={{width:"60%" ,marginTop:"30px",marginLeft:"80px"}}>
  <div className="table-header table-row" >
    <div className="table-cell">S. No.</div>
    <div className="table-cell">Time Table</div>
  
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
       <b> 1</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      	
     <b>Bachelor of Physical Education (II to IV Sem) (Regular/Ex)</b>
    </div>
    
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>2</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of  Education (II to IV Sem) (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>3</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of Law  (III to VI Sem) (Regular/Ex)</b>
    </div>
    
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>4</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Diploma in Engineering  (II to VI Semester )(Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>5</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Bachelor of Pharmacy (IV to VIII Semester) (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>6</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
   <b> Bachelor of Engineering (IV to VIII Semester) (Regular/Ex) As per CBCS Scheme</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>7</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Engineering (IV to VIII Semester) (Regular/Ex) As per AICTE Scheme</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>8</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
     <b>Master of Technology (All Branch) II-III  Semester (Regular/Ex)  </b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>9</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b> Master of Science II-III  Semester (Regular/Ex) Revised   </b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>10</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Master Of Commerce ll-III Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>11</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>Master of Arts ll-III Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>12</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Masters in Business Administration  ll-III Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
    <b>13</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Hotel Management & Catering Technology  2 to 7  Sem (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>14</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Masters in Computer Application  II- IV Semester [Regular/Ex] </b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>15</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>B.Sc. (Hons.) Agriculture All Semester (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>16</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
    <b>B. Tech. (Dairy Technology) III to VIII Semester (Regular/Ex))</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>17</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Homoeopathic Medicine and Surgery ( II to IV Year )</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>18</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Physiotherapy All ( Second year and Final Year )</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>19</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor in Medical Lab Technician All ( Second year and Final Year )</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>20</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>DIPLOMA_PARAMEDICAL</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>21</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Architecture ( IV TO VII Semester )(Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>22</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      <b>Bachelor of Design (Interior Design)(IV To VII Semester) (Regular/Ex)</b>
    </div>
   
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
      <b>23</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
     <b>Diploma in Ophthalmic Assistant [Second Year]</b>
    </div>
   </div>
 </div> <br/><br/><br/><br/>


{/* =============================================================== */}
 <h3 style={{marginLeft:"50px"}}>Examination July – 2023 </h3>

<div  className="table-container" style={{width:"60%" ,marginTop:"30px",marginLeft:"80px"}}>
  <div className="table-header table-row" >
    <div className="table-cell">S. No.</div>
    <div className="table-cell">Time Table</div>
  
  </div>
  <div className="table-row">
    <div className="table-cell" data-heading="Heading 1">
       <b> 1</b>
    </div>
    <div className="table-cell" data-heading="Heading 2">
      	
     <b>Diploma Dialysis Technician [First Year]  </b>
    </div>
    </div>
  </div>



  <FooterContanct />
  </>
  )
}

export default ExamSchedule