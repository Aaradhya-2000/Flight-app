
document.getElementById("btn").addEventListener("click",show);
async function show() {

    // let img = await fetch(imgURL);

   let person = document.getElementById("person").value;
    

    let row ;


    let url = "http://localhost:3000/flights";
    let obj =  await fetch(url);
    console.log(obj);

    let data = await obj.json();
    console.log(data);

    data.map((key)=>{
        row += `
          
             <div class="row">
              <div class="f">
                <img src="flights-img/flight.jpeg" >
                <div class="img-text">
                    <p>AIR INDIA</p>
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
                 ${key.Price*person}
              </div>
              <button><a href="">Book Now</a></button>

            </div>
          
        `;
    });
    // document.getElementById("i").innerHTML = imgURL;
    // table += "</table";
    document.getElementById("fi").innerHTML = row;
}
// show();

// let imgURL = "https://images.ixigo.com/img/common-resources/airline-new/AI.png";
// document.getElementById("demo").innerHTML = imgURL;