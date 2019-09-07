$(document).ready(function () {

    const passenger = 11;

    let cruise
    $(".btn").on("click", function (event) {
        event.preventDefault();
        cruise = event.target.value;
        // console.log(cruise);
        // console.log(passenger);
        $.post('/api/reservations', {
            "cruise": cruise, "passenger": passenger
        },
            alert('Reservation made!')
        )
        console.log("This function ran");
    });
    $("#cruise-form").on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(cruise);
    }
});
