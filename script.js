/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    console.log( arr.filter((value,index)=>value.profession==="developer").map((v)=>(v)) )
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((v)=>{if(v.profession=="developer")
      console.log(v)
      })
  }
  
  function addData() {
    //Write your code here, just console.log
    let employee={id:4,name:"susan",age:"20",profession:"intern"} 
    arr.push(employee)
    console.log(arr)
  
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((value,index)=>{
      if(value.profession=="admin"){
        arr.splice(index,1)
      }
    }
    )
    console.log(arr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    arr2= [
      { id: 4, name: "john2", age: "18", profession: "developer2" },
      { id: 5, name: "jack2", age: "20", profession: "developer3" },
      { id: 6, name: "karen2", age: "19", profession: "admin2" }
    ]
    
    console.log(arr.concat(arr2))
  
  }
  