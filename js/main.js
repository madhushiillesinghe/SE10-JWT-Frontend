$('#savepost').click(function () {
    let postId=$('#post-id').val();
    let postcontent=$('#post-content').val();
    let postTitle=$('#post-title').val();

    console.log(postId,postTitle,postcontent)
        $.ajax({
            url:"http://localhost:8080/blog/savePost",
            method:"POST",
            contentType:"application/json",
            "data":JSON.stringify({
                "id": postId,
                "content": postcontent,
                "title": postTitle
            }),
            success:function (result){
            console.log(result);
            alert("done")
            },
            error:function (error){
            console.error("error");
            alert("Try again");
            }
        })
});

$('#updatepost').click(function () {
    let postId=$('#post-id').val();
    let postcontent=$('#post-content').val();
    let postTitle=$('#post-title').val();

    console.log(postId,postTitle,postcontent)
    $.ajax({
        url:"http://localhost:8080/blog/putPost",
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": postId,
            "content": postcontent,
            "title": postTitle
        }),
        success:function (result){
            console.log(result);
            alert("done")
        },
        error:function (error){
            console.error("error");
            alert("Try again");
        }
    })
});
$('#deletepost').click(function () {
    let postId=$('#post-id').val();

    $.ajax({
        url:`http://localhost:8080/blog/deletePost?id=${postId}`,
        method:"DELETE",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": postId
        }),
        success:function (result){
            console.log(result);
            alert("done")
        },
        error:function (error){
            console.error("error");
            alert("Try again");
        }
    })
});


// $('#getpost').click(function () {
//
//     //let postId=$('#post-id').val();
//     // let postcontent=$('#post-content').val();
//     // let postTitle=$('#post-title').val();
//
//     //console.log(postId,postTitle,postcontent)
//     $.ajax({
//         url:"http://localhost:8080/blog/getPost?function=getAllPosts",
//         method:"GET",
//         contentType:"application/json",
//
//         success:function (result){
//             let Get = JSON.parse(result);
//             console.log("post",Get)
//             $('#PostManage .tableRow').empty();
//             Get.forEach(c => {
//                 loadTable(c);
//             });
//             console.log(result);
//             alert("done")
//         },
//         error:function (error){
//             console.error("error");
//             alert("Try again");
//         }
//     })
// });
//
// function loadTable(get) {
//     $("#PostManage .tableRow").append(
//         "<tr> " +
//         "<td>" +
//         get.id +
//         "</td>" +
//         "<td>" +
//         get.content +
//         "</td>" +
//         "<td>" +
//         get.title+
//         "</td>" +
//         "</tr>"
//     );
// }

$('#getpost').click(function () {

    $.ajax({
        url: "http://localhost:8080/blog/getPost?function=getAllPosts",
        method: "GET",
        contentType: "application/json",

        success: function (result) {
            console.log("post", result);
            $('#PostManage .tableRow').empty();
            result.forEach(c => {
                loadTable(c);
            });
            alert("done");
        },
        error: function (error) {
            console.error("error");
            alert("Try again");
        }
    });
});

function loadTable(post) {
    $("#PostManage .tableRow").append(
        "<tr> " +
        "<td>" + post.id + "</td>" +
        "<td>" + post.content + "</td>" +
        "<td>" + post.title + "</td>" +
        "</tr>"
    );
}

$('#PostManage .tableRow').on('click', 'tr', function(){
    let id = $(this).children('td:eq(0)').text();
    let content = $(this).children('td:eq(1)').text();
    let title = $(this).children('td:eq(2)').text();

    $('#PostManage .post-id').val(id);
    $('#PostManage .post-content').val(content);
    $('#PostManage .post-title').val(title);
});
