function Ticket(title, showtime, age) {
  this.title = title;
  this.showtime = showtime;
  this.age = age;
}
Ticket.prototype.ticketPrice = function() {
  return this.title + this.showtime + this.age;
}

$(document).ready(function() {
  $("form.ticket-selection").submit(function(event) {
    event.preventDefault();
    const inputtedMovie = $('#movie-selection').val();
    const inputtedShowtime = $('#showtime-selection').val();
    const inputtedAge = $('#age-selection').val();
    const intMovie = parseInt(inputtedMovie);
    const intShowtime = parseInt(inputtedShowtime);
    const intAge = parseInt(inputtedAge);
    let ticketRequest = new Ticket(intMovie, intShowtime, intAge);
    let price = ticketRequest.ticketPrice();
    $("#ticket-total").show();
    $("#cost").html(price);
  });
});