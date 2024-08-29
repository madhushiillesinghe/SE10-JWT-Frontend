
function userRegistration(){
    console.log("clicked")
    let name = $("#name").val();
    let email = $ ("#email").val();
    let password = $("#password").val();

    $.ajax ({
        url:"http://localhost:8080/api/v1/auth/register",
        method :"POST",
        contentType : "application/json",
        "data" :JSON.stringify({
            "name" : name,
            "email" :email,
            "password": password,
        }),
        success:function (response){
            localStorage.setItem('token', response.data.token);

            console.log(response);
            console.log(response.data.token);
        },
        error :function (error) {
            console.log(error)
        }
    })

}
function userLogin() {
    console.log("Login button clicked");

    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/authenticate",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: email,
            password: password,
        }),
        success: function(response) {
            console.log("Response received:", response);
            // Adjust based on actual response structure
            let token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                window.location.href = 'dashboard.html';
            } else {
                console.log("Token not found in response");
            }
        },
        error: function(error) {
            console.log("Error occurred:", error.responseText || error);
            // Consider removing the redirect in case of error
        }
    });
}
