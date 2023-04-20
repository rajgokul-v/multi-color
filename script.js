let img = document.getElementById("img")
fetch("data.json").then((res)=>res.json()).then((json)=>{
    let htmltoreturn = ''
     json.forEach(element => {


        img.innerHTML += `
        <div>
        <img src="./images/${element.url}" width="229px" height="200px" style="margin:2px;" />
        <button>Download</button>
        </div>
        `
    });
} )

