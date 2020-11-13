window.CreateUser= {

    API_URL: "http://localhost:8085",

    createNewUser: function () {

        const firstNameValue = $('#firstName').val();
        const lastNameValue = $('#lastName').val();


        let body = {

            firstName: firstNameValue,
            lastName: lastNameValue
        }
        console.log('body', body);
        $.ajax({
            url: MoneyControl.API_URL + "/users",
            method:"POST",
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function (response) {
            // localStorage.setItem("userId", response.id);
            console.log("Create new User", response)
            window.location.replace("http://localhost:63342/money-control-web-app/login-user.html?_ijt=mb5untcodi1hbe0rh8q23mhjm7");
        })
    },
    bindEvents: function (){
        $('#create-user-button').click(function () {
            CreateUser.createNewUser();
        });
    }
};
CreateUser.bindEvents();