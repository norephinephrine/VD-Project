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
    
    $(".star_comment").click(function(){
        var id=$(this).attr("id").substring(5);
        $(".star_comment").removeClass("checked");

        for (let index = id; index > 0; index--) {
            $("#star_"+index).addClass("checked");
            
        }

        $("#star_value").val(id);
    })

    //LEAVE COMMENT
    $("#leaveComment").click(function(){
        var user_data=localStorage.getItem("my_training");

        if(user_data==null){
            j_obj={
                crazy_cardio:[{commented:"no"}],
                fat_burning:[{commented:"yes"}],
                spin_burning:[{commented:"yes"},{commented:"no"}],

                pilates:[],
                aerobik:[],
                zumba:[],

                h_yoga:[],
                b_yoga:[],
                meditation:[],

                core_gluteus:[],
                core_endurance:[],
                body_pump:[]
    
            }
            localStorage.setItem("my_training",JSON.stringify(j_obj));
            user_data=localStorage.getItem("my_training");
        }
        

        var rating=localStorage.getItem("star_rating");

        if(rating==null){
            j_obj={
                crazy_cardio:{
                rating:"3.5",
                number:"4"
                },
                fat_burning:{
                    rating:"3.5",
                    number:"4"
                    },
                spin_burning:{
                    rating:"3.5",
                    number:"4"
                    },

                pilates:{
                    rating:"3.5",
                    number:"4"
                    },
                aerobik:{
                    rating:"3.5",
                    number:"4"
                    },
                zumba:{
                    rating:"3.5",
                    number:"4"
                    },

                h_yoga:{
                    rating:"3.5",
                    number:"4"
                    },
                b_yoga:{
                    rating:"3.5",
                    number:"4"
                    },
                meditation:{
                    rating:"3.5",
                    number:"4"
                    },

                core_gluteus:{
                    rating:"3.5",
                    number:"4"
                    },
                core_endurance:{
                    rating:"3.5",
                    number:"4"
                    },
                body_pump:{
                    rating:"3.5",
                    number:"4"
                    }
    
            }
            localStorage.setItem("star_rating",JSON.stringify(j_obj));
            rating=localStorage.getItem("star_rating");
        }

        var my_trainings=JSON.parse(user_data);  
        var ratings=JSON.parse(rating);  

        var training=$("#training_value").val();
        var stars=$("#")

    })

});