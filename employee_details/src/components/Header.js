import React from "react";
// import { useState } from "react";
// import AddEmployeeForm from "./AddEmployeeForm";


 function Header(props){

    // const [text, setText] = useState("");
    // const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);

 function handleAddEmployeesClick (){
    props.setAddEmployeeFormVisible(true);
  };



    function handleSearchClick(){
        props.settextFunction(props.text);
    }

    
    

    // function handleSearchClick() {
        
    //     if (text === undefined ) {
    //         alert("text is undefined or empty!");
    //       } else {
    //         props.settextFunction(text);
    //       }
          
    //   }
      

    // function handleInputChange(e){
    //     text = (e.target.value)
    // }

    // function handleSortAsc(e){
    //     props.setSelectedSortButtonFunction(e.target.id)
    // }

    // function handleSortDesc(e){
    //     props.setSelectedSortButtonFunction(e.target.id)

    // let text

    return(
        <div id="Header">
        <div id="Header1">
            Employee Details
            
        </div>
        <div id="ToolBar">
            <p id ="totalEmployees">Total Employees: {props.employees.length} </p>
        <button id="add" type="button" onClick={handleAddEmployeesClick} >Add Employes</button>
        <input type="text" id="fname" name="fname" placeholder="search" 
         onChange={(e)=>props.setText (e.target.value)}
         />
        <button id="Search" type="button" onClick={handleSearchClick}>Search</button>

        <button id="Asc" type="button" style={{backgroundColor:props.selectedSortButton==="Asc" ? "red" : ""}} onClick={(e)=>props.setSelectedSortButtonFunction(e.target.id)}>Asc</button>
        <button id="Desc" type="button" style={{backgroundColor:props.selectedSortButton==="Desc" ? "red" : ""}} onClick={(e)=>props.setSelectedSortButtonFunction(e.target.id)}>Desc</button>
        
        

        {/* {showAddEmployeeForm && <AddEmployeeForm />} */}
        </div>
        
        </div>
    )
 }
 export default Header;