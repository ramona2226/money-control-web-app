window.LoginUser= {

    loginUser: function () {

        const firstNameValue = $('#firstName').val();
        const lastNameValue = $('#lastName').val();


        $.ajax({


            url: MoneyControl.API_URL + "/users/byName?firstName=" + firstNameValue + "&lastName=" + lastNameValue,
                method:"GET",
        }).done(function (response) {
            const user = response.content[0];
            if (response.totalElements == 1) {
                const user = response.content[0];
                localStorage.setItem('userId', user.id);
                localStorage.setItem('firstName', user.firstName);
                localStorage.setItem('lastName', user.lastName);
                window.location.replace("http://localhost:63342/money-control-web-app/profil.html?_ijt=dqlogmld5fajvq90ake8kjnhna");
            } else {
                alert('This user doesn`t exist.');
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