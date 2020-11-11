var user = MoneyControl.user;
window.myTransactions = {

    getMyTransactions: function () {

        // todo: read userId dynamically
        const userId = 94;
        $.ajax({
            url: MoneyControl.API_URL + "/transactions/byUser/"+ user.id,
            // creat endpoint in backend care aduce toate tranzactiile pentru un user
            method: "GET"
        }).done(function (response) {
            console.log(response);
            //se compune un html si se adauga.
            // $('#my-transaction-table').... adauga toate randurile
        })
    },

}
myTransactions.getMyTransactions();