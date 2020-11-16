window.LoginUser= {

    loginUser: function () {

        const firstNameValue = $('#firstName').val();
        const lastNameValue = $('#lastName').val();


        $.ajax({

            url: MoneyControl.API_URL + "/users",
            method:"GET",
        }).done(function (response) {
          if (response.totalElements > 0) {
                 var user = response.content[0];
                localStorage.setItem('userId', user.id);
                localStorage.setItem('firstName', firstNameValue);
                localStorage.setItem('lastName', lastNameValue);
                console.log(response);
                console.log("Login User");
                window.location.replace("http://localhost:63342/money-control-web-app/profil.html?_ijt=dqlogmld5fajvq90ake8kjnhna")
            } else {
                alert('This user doesn`t exist. Please create one');
            }

        })
    },

    bindEvents: function (){

        $('#login-user-button').click(function (event) {
            event.preventDefault()
            LoginUser.loginUser()
        });
    }
};
LoginUser.bindEvents();