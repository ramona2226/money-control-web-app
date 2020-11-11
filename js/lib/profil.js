var API_URL = "http://localhost:8085";
function setUserId(id) {
    localStorage.setItem("userId", id);
}
function getUserId() {
    localStorage.getItem("userId");
}

var user;
var getUser = function(userId) {

    $.ajax({
        url: API_URL + '/users/'+ userId,
        method: 'GET'
    }).done(function (response) {
        //poate returna 0, 1
        console.log(response);
        user = response;
    })
}
var budget;
var getUserBudget = function(userId) {

    $.ajax({
        url: API_URL + '/budgets/'+ userId,
        method: 'GET'
    }).done(function (response) {
        //poate returna 0, 1
        console.log(response);
        budget = response;
    })
}
var transactions;
var getTransactions = function(userId) {

    $.ajax({
        url: API_URL + '/transactions/' + id,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        transactions = response;
    })
}











// getUser(); dupa care getBudget() dupa care getTransactions();
// pe variabila budget ai informatii despre balance si currency, va trebui sa le afisezi in fereastra.
// dupa care: pe variabila transactions ai toate, le parcurgi si le adaugi in tabel
//
//
// .text("ceva");
// $("table") add row jquery;
