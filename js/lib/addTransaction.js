window.AddTransaction = {


    API_URL: "http://localhost:8085",
// citirea datelor din formular
    createTransaction: function () {

const typeValue = $('#type-of-transaction-from').val();

const fromValue = $('#transaction-from').val();

const toValue = $('#transaction-to').val();

const amountValue = $('#transaction-amount').val();

const dateValue = $('#transaction-date').val();

const descriptionValue = $('#transaction-description').val();

const userIdValue = $('#transaction-userId').val();



// obiectul meu Json in care pun proprietatile pe care le asteapta requestul din backend.
        let body = {

            type: "typeValue",
            from: "fromValue",
            to: "toValue",
            amount: amountValue,
            date: dateValue,
            description: "descriptionValue",
            userId: userIdValue


        }

//request
        $.ajax({
            url: MoneyControl.API_URL + "/addTransaction",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body)

        }).done(function () {


            console.log("Successful transaction")
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
