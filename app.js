let btn = document.querySelector("button");
let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let setup = document.querySelector("#setup");
let punchline = document.querySelector("#punchline");
async function getJokes(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        if(data.type=="twopart"){
            let setu = data.setup;
            let punch = data.delivery
            console.log(setu);
            console.log(punch);
            setup.innerText = setu;
            punchline.innerText = punch;
            console.log(data);
        }
        else if(data.type=="single"){
            let joke = data.joke;
            console.log(joke);
            
            setup.innerText = joke;
            punchline.innerText = "";
            console.log(data);
        }
       
        
        // console.log(data);
    }
    catch(e){
        console.log("error");
    }
    
}

btn.addEventListener("click",async()=>{
    getJokes();
})