window.MoneyControl= {

    API_URL: "http://localhost:8085",

    createUserOrReadUser: function () {
        const existingUserFirstName = $("#user-first-name").val();
        const existingUserSecondName = $("#user-second-name").val();

        let body = {
            firstName: "existingUserFirstName",
            lastName: "existingUserSecondName"
        }

        $.ajax({
            url: MoneyControl.API_URL + "/users",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(
            function (response) {
                console.log(response);
            })
    },

    bindEvents: function () {
        $("#create-user").submit(function (event) {
            event.preventDefault

            MoneyControl.createUser();

        })


        $("#login-user").submit(function (event) {
            event.preventDefault

            MoneyControl.getBalance(userId);

        })
    },
    seeAllTransactions: function (transactionId) {
        const userId = 1;

        const



        }



}


