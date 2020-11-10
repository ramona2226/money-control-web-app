window.MoneyControl= {

    API_URL: "http://localhost:8085",

    getBalance: function (balance) {

// todo: read userId dynamically
        const userId = 94;
        const requestBody = {

            userId: userId,

        }

    }

    // createUserOrReadUser: function () {
    //     const existingUserFirstName = $("#user-first-name").val();
    //     const existingUserSecondName = $("#user-second-name").val();
    //
    //     let body = {
    //         firstName: "existingUserFirstName",
    //         lastName: "existingUserSecondName"
    //     }
    //
    //     $.ajax({
    //         url: MoneyControl.API_URL + "/users",
    //         method: "POST",
    //         contentType: "application/json",
    //         data: JSON.stringify(body)
    //     }).done(
    //         function (response) {
    //             console.log(response);
    //         })
    // },
    //
    // bindEvents: function () {
    //     $("#create-new-user").submit(function (event) {
    //         event.preventDefault
    //         MoneyControl.createUser();
    //
    //     })







}


