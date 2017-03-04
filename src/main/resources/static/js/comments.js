function loadComments() {
    var content = $("#content");

    $.get("/comments")
        .promise()
        .then(parseJson);
    function parseJson(json) {
        content.html('');
        for (var i = 0; i < json.length; i++) {
            setHtmlContent(json[i].date, json[i].text)
        }
    }


    function setHtmlContent(date, comment) {
        content.append($(document.createElement('tr')));
        content.append(
            $(document.createElement('td')).text(date)
        );
        content.append(
            $(document.createElement('td')).text(comment)
        );
    }
}

function saveComment() {
    var $form = $("#comment_form"),
        term = $form.find("input[name='text']").val();
    $.post("/comments", {text: term})
        .then(loadComments);
}