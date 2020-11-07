window.MoneyControl= {

    API_URL: "http://localhost:8085",

    getTransactions: function () {
        //nu imi arata urla in () inainte de {
        $.ajax({
            url:MoneyControl.API_URL + "/transactions",
            method: "GET"
        }).done(function (response) {
            console.log(response);

        })
    }
};

MoneyControl.getTransactions();