


 append()

function append(){
   
    let data = JSON.parse(localStorage.getItem("students")) || []
    let container = document.getElementById("container")
     container.innerHTML = null;
    data.forEach(function(el,index){
        let div = document.createElement("div")
        div.setAttribute("id","box")

        let image = document.createElement("img")
        image.src = el.image;

        

        image.setAttribute("id","imag")

       let p = document.createElement("p")
         p.innerText = el.name;
         p.setAttribute("class","cet")

       let course = document.createElement("p")
       course.innerText = el.course;
       course.setAttribute("class","cet")

       let unit = document.createElement("p")
       unit.innerText = el.unit;
       unit.setAttribute("class","cet")

       let batch = document.createElement("p")
       batch.innerText = el.batch;
       batch.setAttribute("class","cet")

       let btn_remove = document.createElement("button")
       btn_remove.innerText = "Remove";
       btn_remove.setAttribute("class","ceti")

       btn_remove.addEventListener("click",function(){
           removedata(index)
       })


       div.append(image,p,course,unit,batch,btn_remove)

       container.append(div)
       
          
    })
    
}

function removedata(index){
    console.log(index)
    let data = JSON.parse(localStorage.getItem("students")) || []

    let newData = data.filter(function(el,i){

        if(i==index){
            let trash = JSON.parse(localStorage.getItem("trash")) || []

            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))
        }else{
            return i!==index;
        }
    });

    localStorage.setItem("students",JSON.stringify(newData))

    // console.log(data)
    window.location.reload()
    append();
   
}



