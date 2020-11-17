window.AddTransaction = {


    createTransaction: function () {

const typeValue = $('#type-of-transaction-from').val();

const fromValue = $('#transaction-from').val();

const toValue = $('#transaction-to').val();

const amountValue = $('#transaction-amount').val();

const dateValue = $('#transaction-date').val();

const descriptionValue = $('#transaction-description').val();
const userIdValue = $('#user-Id').val();




        let body = {


            type: typeValue,
            from: fromValue,
            to: toValue,
            amount: amountValue,
            date: dateValue,
            description: descriptionValue,
            userId: userIdValue


        }

//request
        $.ajax({
            url: MoneyControl.API_URL + "/transactions",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function () {
                        console.log("Successful transaction")
            window.location.replace("http://localhost:63342/money-control-web-app/profil.html?_ijt=9es6ma7cd41cls8sbgsk6bltc7")
        })
    },


    bindEvents: function () {

            $('#confirm').click(function (event) {
                event.preventDefault()
                AddTransaction.createTransaction()
            });


    }
};
AddTransaction.bindEvents();
