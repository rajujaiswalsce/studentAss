


// console.log("hello raju")

function Student(n,c,u,im,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = im;
    this.batch = `FT-WEB ${b}`

}



function storeData(e){
    e.preventDefault();
  
    let form = document.getElementById("student_form")

    let name = form.name.value;

    let course = form.course.value;
    
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(name,course,unit,image,batch)
    // console.log(s1)

    let data = JSON.parse(localStorage.getItem("students")) || []

    data.push(s1);


    localStorage.setItem("students",JSON.stringify(data))

    console.log(data)

    alert("Add the Student")

//   console.log(name,course,unit,image,batch)

}

// let web = document.getElementById("p");
let data = JSON.parse(localStorage.getItem("students")) || []

var batch = data.map(function(ele){
    return  (ele.batch);
 });
 
 
 let length = data.length;
 
 // console.log(length)
 
 // console.log(total)
 
 document.querySelector("p").innerText = `  ${batch} `;


// function calculate(){
//     let data = JSON.parse(localStorage.getItem("students")) || []
//     let obj ={}
//     for(let i=0;i<data.length;i++){
//         if(!obj[data[i].batch]){
//         obj[data[i].batch] =0
//         }
//     }
//     for(let i=0;i<data.length;i++){
//         obj[data[i].batch]++;


//         // web.innerText =`Ft-web ${batch}`

//     }
//     console.log(obj)
//     document.querySelector("p").innerText = ` Ft-web ${batch} `;
// }

// calculate()

