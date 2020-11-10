window.transactions = {

    API_URL: "http://localhost:8085",

    getTransactions: function () {
const userid = 94;
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
        $('#create-transaction-form').submit(function (event) {
event.preventDefault()


        })

    }
};

MoneyControl.getTransactions();