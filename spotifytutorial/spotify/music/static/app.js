$("#input-query-field").keypress(function (event) {
    window.alert("event ready")
    if (event.which == 13) {
        event.preventDefault();
        $("#form-query").submit();
        console.log($("#input-query-field").val())
        console.log($("#input-select-field").val())
    }
});