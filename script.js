let arr = [];
if (arr.length === 0) {
  document.getElementById('table').classList.add('hidden');
}

let name1=document.getElementById("name");
let profession1=document.getElementById("profession");
let age1=document.getElementById("age");
let successMsg1=document.getElementById("success");
let errorMsg1=document.getElementById("error");
let addbtn1=document.getElementById("addbtn");
let noOfEmployeesMsg=document.getElementById("two");
let tableBodyContent=document.getElementById("tableBody");


addbtn1.addEventListener("click", addUserFunction);

 function addUserFunction(){
    let name=name1.value;
    let profession=profession1.value;
    let age=age1.value;
    document.getElementById('table').classList.remove('hidden')

    if(name && profession && age){
        successMsg1.classList.remove('hidden');
        errorMsg1.classList.add('hidden');
        noOfEmployeesMsg.classList.add('hidden');

        let obj1={
            Name:name,
            Profession:profession,
            Age:age,
        }
        arr.push(obj1);

        tableBodyContent.innerHTML='';

        arr.map((element, index) =>{
            tableBodyContent.innerHTML += `
            <tr>
            <td> ${index +1}.</td>
            <td>Name: ${element.Name}</td>
            <td>Profession: ${element.Profession}</td>
            <td>Age: ${element.Age}</td>
            <td><button class="deleteButton" onclick="deleteUserWithIndex(${index})">Delete</button></td>
            </tr>`
            console.log(tableBodyContent);
        })
       
    }
    else{
        successMsg1.classList.add("hidden");
        errorMsg1.classList.remove("hidden");
        noOfEmployeesMsg.classList.remove("hidden")
    }
   
}

// Delete User Function

let removeUser;
function deleteUserWithIndex(index){
    removeUser = arr.splice(index,1);
    console.log(removeUser);
    tableBodyContent.innerHTML ='';
    console.log(arr) 

    arr.map((element, index) =>{
        tableBodyContent.innerHTML += `
        <tr>
        <td>${index +1}.</td>
        <td>Name: ${element.Name}</td>
        <td>Profession: ${element.Profession}</td>
        <td>Age: ${element.age}</td>
        <td><button class="deleteButton" onclick="deleteUserWithIndex(${index})">Delete</button></td>
        </tr>`
        console.log(tableBodyContent);
    })
    console.log(arr) 
    if(arr.length === 0){
        document.getElementById("table").classList.add("hidden");
        successMsg1.classList.remove('hidden');
        errorMsg1.classList.add("hidden");
        noOfEmployeesMsg.classList.add('hidden');
    }
}