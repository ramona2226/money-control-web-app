window.MoneyControl= {

    API_URL: "http://localhost:8085",

    createUser: function () {
const existingUserFirstName = $("#user-first-name").val();
    const existingUserSecondName = $("#user-second-name").val();

        let body = {
            firstName: "existingUserFirstName",
            lastName: "existingUserSecondName"
        }
        //nu imi arata url in (url{)
        $.ajax({
            url:MoneyControl.API_URL + "/users",
            method: "POST",
            contentType:"application/json",
            data: JSON.stringify(body)
         }).done(
             // de vazut
             function (response) {
             console.log(response);
            
        })
            // mai pot avea alt comportament
        //console.log("do something");

    }
};

MoneyControl.createUser();
