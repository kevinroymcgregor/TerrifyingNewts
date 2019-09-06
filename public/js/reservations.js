$(document).ready(function () {
    // const cruise = $("#cruise1");
    // const passenger = 237;

    // $('#cruise1').onClick(postReservation(event));

    // function postReservation(event) {
    //     event.preventDefault();
    //     // $.post('/api/reservations', {
    //     //     "cruise": cruise, "passenger": passenger
    //     // },
    //     //     alert('Reservation made!')
    //     // )
    //     console.log("This function ran");
    // }
const stuff = $('#cruise-form');
    $("#cruise-form").on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(stuff);
    }
});