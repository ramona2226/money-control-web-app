window.addTransaction = {


    API_URL: "http://localhost:8085",

    createTransactions: function () {
const addValue = $('#add-transaction').val();

const payValue = $('#pay-transaction').val();

const fromValue = $('#transaction-from').val();

const toValue = $('#transaction-to').val();

const amountValue = $('#transaction-amount').val();

const dateValue = $('#transaction-date').val();

const descriptionValue = $('#transaction-description').val();

const userIdValue = $('#transaction-userId').val();




        var body = {

            type: "add",
            from: "Ramona",
            to: Kauflad,
            amount: 53,
            date: 2020 - 11 - 9,
            description: "Buyed food",
            userId: 94


        }


        $.ajax({
            url: MoneyControl.API_URL + "/addTransaction",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body)


        }).done(function () {


            console.log("Successful transaction.")
        })
    },

    bindEvents: function () {
        $("#add").submit(function (event) {
            event.preventDefault

            MoneyControl.createUser();


};
}
