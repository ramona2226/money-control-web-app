window.CreateUser= {

    API_URL: "http://localhost:8085",

    createNewUser: function () {

        const firstNameValue = $('#firstName').val();
        const lastNameValue = $('#lastName').val();


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
             console.log("Create new User", response)
              window.location.replace("http://localhost:63342/money-control-web-app/profil.html")
        })
    },
    bindEvents: function (){
        $('#create-user-button').click(function () {
          CreateUser.createNewUser();
        });
    }
};
CreateUser.bindEvents();