const seats = document.querySelectorAll(".seat");
const total = document.getElementById("total");
const count = document.getElementById("count");

let price = 40000;

seats.forEach(seat => {

seat.addEventListener("click", () => {

seat.classList.toggle("selected");

updateTotal();

});

});

function updateTotal(){

const selectedSeats = document.querySelectorAll(".seat.selected");

let seatNumbers = [];

selectedSeats.forEach(seat=>{
seatNumbers.push(seat.innerText);
});

let jumlah = seatNumbers.length;
let totalHarga = jumlah * price;

count.innerText = jumlah;

total.innerText = totalHarga;

localStorage.setItem("kursiDipilih", seatNumbers.join(", "));
localStorage.setItem("totalHarga", totalHarga);

}