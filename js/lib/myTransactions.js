window.myTransactions = {

    API_URL: "http://localhost:8085",

    getMyTransactions: function () {

        // todo: read userId dynamically
        const userId = 94;

        $.ajax({
            url: MoneyControl.API_URL + "/loginUser/myTransactions/"
            method: "GET"
        }).done(function (response) {
            console.log(response);

        })
    },

}
myTransactions.getMyTransactions();