document.getElementById("btn").addEventListener("click",flight);

async function flight(e) {
    e.preventDefault();
    let from = document.getElementById("where").value.toLowerCase();
    let to = document.getElementById("to").value.toLowerCase();
    let date = document.getElementById("date").value.toLowerCase();
    let person = document.getElementById("person").value;
    let row = ``;
    let URL = "http://localhost:3000/flights";

    if(from==""|| to==""||date==""||person==""){
        alert("Please fill in all fields");
        return false;
    }
    

    

    let AIndia = `images/flight.jpeg`;
    let Indigo = `images/flight_1.jpeg`;
    let f1 = "AIR INDIA";
    let f2 = "INDIGO";

    let img = [AIndia, Indigo];
    let name = [f1, f2];

    let obj = await fetch(URL);
    console.log(obj);

    let c = 1;
    let data = await obj.json();
    console.log(data);

    data.filter((key)=>{

        
        if(key.From.toLowerCase() === from && key.To.toLowerCase() === to){
            let currentImg = c % 2 === 0 ? img[1] : img[0];
            let currentName = c % 2 === 0 ? name[1] : name[0];
            console.log(from , to);

            

            row += `
            <div class="row">
                <div class="f">
                    <img src="${currentImg}" id="img" alt="${currentName}">
                    <div class="img-text">
                        <p id="name">${currentName}</p>
                        <span>${key.flightNo}</span>
                    </div>
                </div>
                <div class="date-time">
                    <p>${key.From}</p>
                    <span>${key.time}</span>
                </div>
                <div> <i class="fa-solid fa-arrow-right"></i></div>
                <div class="date-time">
                    <p>${key.To}</p>
                    <span>${key.totime}</span>
                </div>
                <div class="input">
                    <p> No of Person:</p>
                    <span>${person}</span>
                </div>
                <div class="price">
                    <p>Price for 1</p>
                    <h1>${key.Price}</h1>
                </div>
                <button><a href="">Book Now</a></button>
            </div>
        `;
        c++;
        }
       console.log(c);
    });

    document.getElementById("fir").innerHTML = row;
    document.getElementById("hdi").innerHTML = `Available Flights : ${c - 1}`;
    


    
}