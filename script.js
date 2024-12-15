async function show() {
    let person = document.getElementById("person").value;
    let c = 1;

    let AIndia = `flights-img/flight.jpeg`;
    let Indigo = `flights-img/flight_1.jpeg`;
    let f1 = "AIR INDIA";
    let f2 = "INDIGO";

    let img = [AIndia, Indigo];
    let name = [f1, f2];

    let row = ``;

    let url = "http://localhost:3000/flights";
    let obj = await fetch(url);
    console.log(obj);

    let data = await obj.json();
    console.log(data);

    data.map((key) => {
        // Determine which image and name to use
        let currentImg = c % 2 === 0 ? img[1] : img[0];
        let currentName = c % 2 === 0 ? name[1] : name[0];

        row += `
            <div class="row">
                <div class="f">
                    <img src="${currentImg}" id="img" alt="img">
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
    });

    document.getElementById("fi").innerHTML = row;
    document.getElementById("hd").innerHTML = `No of Flights : ${c - 1}`;
}

show();
