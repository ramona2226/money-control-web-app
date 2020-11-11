window.CreateUser= {

    API_URL: "http://localhost:8085",

    createUser: function () {

        const firstNameValue = $('firstName').val();
        const secondNameValue = $('#SecondName').val();


        let body = {

            fistName: firstNameValue,
            secondName: secondNameValue

        }
        $.ajax({

            url: MoneyControl.API_URL + "/users",
            method:"POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function () {
window.location.replace("http://localhost:63342/money-control-web-app/js/profil.html?_ijt=dqlogmld5fajvq90ake8kjnhna")
            console.log("Create new User")
        })
    },

    bindEvents: function (){

        $('#create-user-button').click(function (event) {
            event.preventDefault()
            CreateUser.createUser()
        });
    }
};
CreateUser.bindEvents();