var user = MoneyControl.user;
window.AddTransaction = {


    createTransaction: function () {

        const typeValue = $('#type-of-transaction').val();

        const fromValue = $('#transaction-from').val();

        const toValue = $('#transaction-to').val();


       // if ($('#type-of-transaction' === "pay")) {
           // const fromValue = $('#user-first-name').val();
       // }


          //  if ($('#type-of-transaction' === "add")) {
              //  const toValue = $('#user-first-name').val();

          //  }

        let amountValue = $('#transaction-amount').val();
        if (typeValue == "pay") {
            amountValue = -amountValue;
        }

        const dateValue = $('#transaction-date').val();

        const descriptionValue = $('#transaction-description').val();
        const userIdValue = user.id;


        let body = {


            type: typeValue,
            from: fromValue,
            to: toValue,
            amount: amountValue,
            date: dateValue,
            description: descriptionValue,
            userId: userIdValue


        }
            // "userId": 0


        $.ajax({
            url: MoneyControl.API_URL + "/transactions",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function ( ) {
            console.log("Successful transaction")
            window.location.replace("http://localhost:63342/money-control-web-app/profil.html?_ijt=9es6ma7cd41cls8sbgsk6bltc7")
        })
    },


    bindEvents: function () {

        $('#confirm-transaction').click(function (event) {
            event.preventDefault()
            AddTransaction.createTransaction()

        });



    }
};
AddTransaction.bindEvents();

