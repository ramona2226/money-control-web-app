var API_URL = "http://localhost:8085";
function setUserId(id) {
    localStorage.setItem("userId", id);
}
function getUserId() {
    localStorage.getItem("userId");
}
var createUser = function() {
    const firstNameValue = $('#user-first-name').val();
    const lastNameValue = $('#user-second-name').val();

    let body = {
        firstName: firstNameValue,
        lastName: lastNameValue
    }

    $.ajax({
        url: API_URL + '/users',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify(body)
    }).done(function (data) {
        console.log(data);
        setUserId(data.id);
        window.location.replace("http")

        console.log("New user created")
    })
}

var loginUser = function() {
    const firstNameValue = $('#user-first-name').val();
    const lastNameValue = $('#user-second-name').val();

    let body = {
        firstName: firstNameValue,
        lastName: lastNameValue
    }

    $.ajax({
        url: API_URL + '/users?partialLastName='+lastNameValue,
        method: 'GET'
    }).done(function (data) {
        //poate returna 0, 1, sau mai multi.
        console.log(data);
        //alegi useru
        var user = data[0];
        setUserId(user.id);
        console.log("New user created")
    })
}

$('#create-new-user').click(function (event) {
    event.preventDefault();
       createUser();
   window.location.replace("http://localhost:63342/money-control-web-app/js/create-new-user.html?_ijt=v79eqto58mts6f7ijso3b3bl8o");

    window.location.replace(API_URL + "/create-new-user.html")
});
$('#login-user').click(function (event) {
    event.preventDefault();
    loginUser();
});



