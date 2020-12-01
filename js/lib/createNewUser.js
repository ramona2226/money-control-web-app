window.CreateUser= {

    API_URL: "http://localhost:8085",

    createNewUser: function () {



        let firstNameValue = $('#firstName').val();
        let lastNameValue = $('#lastName').val();



        let body = {

            firstName: firstNameValue,
            lastName: lastNameValue
        }
             console.log("User Name: " + body);
        $.ajax({
            url: MoneyControl.API_URL + "/users",
            method:"POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function (response) {
             console.log("Create new User", response);
              window.location.replace("http://localhost:63342/money-control-web-app/login-user.html")
        })
    },
    bindEvents: function (){
        $('#create-user-button').click(function () {
                      CreateUser.createNewUser();
        });
    }
};
CreateUser.bindEvents();