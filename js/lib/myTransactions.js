var user = MoneyControl.user;
window.myTransactions = {

    getMyTransactionHtml: function () {
        $.ajax({
            url: MoneyControl.API_URL + "/transactions/forUser/" + user.id,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            var transactions = response.content;
            myTransactions.displayMyTransactions(transactions);
        });

    },

    getTransactionHtml: function (transaction) {
        return `
      <tr> 
        <td> ${transaction.id}</td>
        <td> ${transaction.type}</td>
        <td>  ${transaction.from}  </td>
        <td>    ${transaction.to} </td>
        <td>   EUR ${Math.abs(transaction.amount)}</d>
        <td>    ${transaction.date}</td>
        <td>    ${transaction.description}</td>
        <td>  <a href="#" class="delete-link" data-transaction_id = "${transaction.id}"><i class="fas fa-trash-alt"></i></a></td>
</tr>  
        `;

    },

    displayMyTransactions: function (transactions) {

        let mytransactionsHtml = ' ';
        transactions.forEach(transaction => mytransactionsHtml += myTransactions.getTransactionHtml(transaction));
        $('#my-transaction-table').html(mytransactionsHtml);
    },


    deleteTransaction: function (id) {
        $.ajax({
            url: MoneyControl.API_URL + "/transactions/" + id,
            method: "DELETE"
        }).done(function () {
            //actualizeaza continutul din pagina
            myTransactions.getMyTransactionHtml();
        });


    },

    bindEvents: function event() {
        myTransactions.getMyTransactionHtml();
        $('#all-my-transactions').delegate('.delete-link', 'click', function (event) {
            event.preventDefault();
            //transactions.id
            const id = $(this).data('transaction_id');
            myTransactions.deleteTransaction(id);
        });
    }
}

        myTransactions.bindEvents();
