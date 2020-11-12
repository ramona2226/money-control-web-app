var user = MoneyControl.user;
window.myTransactions = {

    getMyTransactions: function () {

        $.ajax({
            url: MoneyControl.API_URL + "/transactions" + userId,
            method: "GET"
        }).done(function (response) {
            console.log(response)
            //// aici imi trebuie ceva sa imi adauge toate randurile intr-un tabel, CUM AM FACUT LA CURS forEach..
        });

    },

    displayMyTransactions: function(myTransactions) {
        // de vazut inregistrarea

        let mytransactionHtml = ' ';
        transactions.forEach(transaction => transactionHtml += Transaction.getTransactionHtml(transaction));
    }

}
            bindEvents: function event() {
                $('#go-back-to-your-profile-window').click(event)
                event.preventDefault();
                myTransactions.displayMyTransactions()
                window.location.replace("http://localhost:63342/money-control-web-app/profil.html?_ijt=doo0mg1o6jor89s2d863di299i")

    };



myTransactions.getMyTransactions();