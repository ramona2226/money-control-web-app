var user = MoneyControl.user;
window.Profil = {
    user: {
        firstName:localStorage.getItem('firstName'),
        lastName:localStorage.getItem('lastName'),
        id:localStorage.getItem('userId'),
    },

    getBudget: function () {
        if (user.id) {
            $.ajax({
                // url: MoneyControl.API_URL + "/users",
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

    bindEvents: function (){

        //.val() ii getter, .val(valoare) ii setter
        $("#user-first-name").val(user.firstName);
        $("#user-last-name").val(user.lastName);
        Profil.getBudget();

        $('#logout').click(function(){
            localStorage.clear();
            window.location.replace('http://localhost:63342/money-control-web-app/index.html?_ijt=nmolnls8f5tnvh8d7ne3s6okos');
        });
    }
};
Profil.bindEvents();