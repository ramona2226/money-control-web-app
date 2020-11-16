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
        window.location.replace('http://localhost:63342/money-control-web-app/profil.html?_ijt=u5j57l3g0td294tn89m8ihe9a1');
        })
    },
    bindEvents: function (){
        $('#create-user-button').click(function () {
          //  window.location.replace('http://localhost:63342/money-control-web-app/profil.html?_ijt=u5j57l3g0td294tn89m8ihe9a1');
            CreateUser.createNewUser();
        });
    }
};
CreateUser.bindEvents();