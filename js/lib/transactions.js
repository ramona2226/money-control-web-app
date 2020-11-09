window.transactions = {

    API_URL: "http://localhost:8085",

    getTransactions: function () {

        $.ajax({
            url:MoneyControl.API_URL + "/transactions",
            method: "GET"
        }).done(function (response) {
            console.log(response);

        })
    },
    displayTransactions: function(transactions) {
        let transactionHtml = ' ';
        transactions.forEach(transaction => transactionHtml += Transaction.getTransactionHtml(transaction));


    },
    bindEvents: function () {
        $('')
            .delegate('.all_transactios_button', 'click', function (event))
        event.preventDefault();
        $(this).
    }
};

MoneyControl.getTransactions();