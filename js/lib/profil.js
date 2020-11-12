var user = MoneyControl.user;
window.Profil = {

    getBudget: function () {
        if (user.id) {
            $.ajax({
                url: MoneyControl.API_URL + "/budgets/" + user.id,
                method:"GET",
            }).done(function (response) {
                console.log(response);
                $("#budget-valute-name").val(response.balance);
            })
        } else {
            window.location.replace('http://localhost:63342/money-control-web-app/index.html?_ijt=nmolnls8f5tnvh8d7ne3s6okos');
        }
    },

    bindEvents: function () {

        //.val() ii getter, .val(valoare) ii setter
        $("#user-first-name").val(user.firstName);
        $("#user-last-name").val(user.lastName);
        Profil.getBudget();

    },

         function () {
             $('#add-transaction').click(function (event) {
                 window.location.replace("http://localhost:63342/money-control-web-app/add-transaction.html?_ijt=kkia36k8grrvcbkp0ceag6dhhq")
             })
         }
        },

    // de vazut cum pot sa ma duca in alta parte.
         function () {
            $('#my-transactions').click(function (event) {
                window.location.replace("http://localhost:63342/money-control-web-app/my-transactions.html?_ijt=2mac92gdsjjc9e5cjh110pqqms")
            })


        $('#logout').click(function () {
            localStorage.clear();
            window.location.replace('http://localhost:63342/money-control-web-app/index.html?_ijt=nmolnls8f5tnvh8d7ne3s6okos');
        })

};
Profil.bindEvents();





