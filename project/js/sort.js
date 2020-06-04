$(document).ready(function(){

    $("#name_sort").click(function()
    {
        var $divs = $("div.mix");
        rez=$divs.sort(function (a, b) {
            //alert($(a).find("span.span_length").text());
            //alert($(b).find("span.span_length").text());
            return $(a).find("h6").text().localeCompare($(b).find("h6").text());
        });
        $("#sort_class").append(rez);
    })

    $("#diff_sort").click(function()
    {
        var $divs = $("div.mix");
        rez=$divs.sort(function (a, b) {
            return $(a).find("span.span_diff").text().substring(7)-$(b).find("span.span_diff").text().substring(7);
        });
        $("#sort_class").append(rez);
    })

    $("#length_sort").click(function()
    {
        var $divs = $("div.mix");
       
        rez=$divs.sort(function (a, b) {
            var text=$(a).find("span.span_length").text();
            var number_a=text.substring(9,text.length-1);

            var text=$(b).find("span.span_length").text();
            var number_b=text.substring(9,text.length-1); 

            return number_a-number_b;
        });
        $("#sort_class").append(rez);
    })   

});