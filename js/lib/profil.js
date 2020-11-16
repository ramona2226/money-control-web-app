var user = MoneyControl.user;
window.Profil = {


    getUserDetails: function () {
        if (user.id == null) {
            $.ajax({
                url: MoneyControl.API_URL + "/budgets/" + user.id,
                method: "GET",
            }).done(function (response) {
                console.log(response);
// if (budget.balance == null) {
//     $("#balance").val(0);
// }else
                $("#balance").val(response.balance);
            })
        } else {
            window.location.replace("http://localhost:63342/money-control-web-app/index.html?_ijt=8bq708htgsc3uln8v2shl0s4ho");

        }
    },

  bindEvents: function ( ) {

      //.val() ii getter, .val(valoare) ii setter
        $("#user-first-name").val(user.firstName);
        $("#user-last-name").val(user.lastName);
        Profil.getUserDetails();

    },

         function () {
             $('#add-transaction').click(function (event) {
                 event.preventDefault()
                 window.location.replace('http://localhost:63342/money-control-web-app/index.html?_ijt=nmolnls8f5tnvh8d7ne3s6okos');

                             })
         }
        },


        $('#logout').click(function () {
            localStorage.clear();
            window.location.replace("http://localhost:63342/money-control-web-app/index.html?_ijt=4u0epdqhiduerbrs83qqj9mnt7");

});
Profil.bindEvents();





