var user = MoneyControl.user;
indow.Profil = {
    getUserDetails: function () {
        if (user.id != null) {
            $.ajax({
                url: MoneyControl.API_URL + "/budgets/" + user.id,
                method: "GET",
            }).done(function (response) {
                console.log(response);
                    $("#balance").val(response.balance);

            })
        } else {
            window.location.replace("http://localhost:63342/money-control-web-app/index.html?_ijt=8bq708htgsc3uln8v2shl0s4ho");

        }
    },

    bindEvents: function () {
        //.val() ii getter, .val(valoare) ii setter
        $("#user-first-name").val(user.firstName);
        $("#user-last-name").val(user.lastName);
        Profil.getUserDetails();


        $('#add-transaction').click(function (event) {
            event.preventDefault()

        })

        $('#logout').click(function () {
            localStorage.clear();
        });

    }

}
Profil.bindEvents();





