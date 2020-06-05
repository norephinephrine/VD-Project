var user_data=localStorage.getItem("my_training");

if(user_data==null){
    j_obj={
        crazy_cardio:[{commented:"no"}],
        fat_burning:[{commented:"no"}],
        spin_burning:[{commented:"no"},{commented:"no"}],

        pilates:[{commented:"no"}],
        aerobik:[{commented:"no"}],
        zumba:[{commented:"no"}],

        h_yoga:[{commented:"no"}],
        b_yoga:[{commented:"no"}],
        meditation:[{commented:"no"}],

        core_gluteus:[{commented:"no"}],
        core_endurance:[{commented:"no"}],
        body_pump:[{commented:"no"}]

    }
    localStorage.setItem("my_training",JSON.stringify(j_obj));
    user_data=localStorage.getItem("my_training");
}


var my_trainings=JSON.parse(user_data);  

if($("#training_value").length){
    var training=$("#training_value").val();
    for (let index = 0; index < my_trainings[training].length; index++) {
        const element =  my_trainings[training][index];
        if(element.commented==="yes"){
            var script='<div class="ts-item"><div class="rating">';
    
            for (let ind = 0; ind < parseInt(element.stars); ind++) {
               script+='<i class="fa fa-star"></i>';    
             }
             script+="</div><h4>"+element.text+"</h4>";    
             script+='<div class="author-name"><h5>Anakin Skywaker</h5> <span>Jedi \'Master\'</span> </div>';

             var logo="img/fun.jpg";
             if(window.location.href.includes("/eng/"))logo="../img/fun.jpg";


            script+='<div class="author-pic"><img src="'+logo+'" alt=""> </div> </div>';
            $(".owl-carousel").append(script);     
        } 
    }   
}
$(document).ready(function(){
    var rating=localStorage.getItem("star_rating");

    if(rating==null){
        j_obj={
            crazy_cardio:{
            avg:"3.5",
            number:"4"
            },
            fat_burning:{
                avg:"3.5",
                number:"4"
                },
            spin_burning:{
                avg:"3.5",
                number:"4"
                },

            pilates:{
                avg:"3.5",
                number:"4"
                },
            aerobik:{
                avg:"3.5",
                number:"4"
                },
            zumba:{
                avg:"3.5",
                number:"4"
                },

            h_yoga:{
                avg:"3.5",
                number:"4"
                },
            b_yoga:{
                avg:"3.5",
                number:"4"
                },
            meditation:{
                avg:"3.5",
                number:"4"
                },

            core_gluteus:{
                avg:"3.5",
                number:"4"
                },
            core_endurance:{
                avg:"3.5",
                number:"4"
                },
            body_pump:{
                avg:"3.5",
                number:"4"
                }

        }
        localStorage.setItem("star_rating",JSON.stringify(j_obj));
        rating=localStorage.getItem("star_rating");
    }





    $("#name_sort").click(function()
    {
        var $divs = $("div.mix");
        rez=$divs.sort(function (a, b) {
            return $(a).find("h6").text().localeCompare($(b).find("h6").text());
        });
        $("#sort_class").append(rez);
    })

    $("#diff_sort").click(function()
    {
        var $divs = $("div.mix");
       
        rez=$divs.sort(function (a, b) {
            return $(a).find("span.span_diff").text().split(":")[1]-$(b).find("span.span_diff").text().split(":")[1];
        });
        $("#sort_class").append(rez);
    })

    $("#length_sort").click(function()
    {
        var $divs = $("div.mix");
       
        rez=$divs.sort(function (a, b) {
            var text=$(a).find("span.span_length").text().split(":")[1];
            var number_a=text.substring(0,text.length-1);

            text=$(b).find("span.span_length").text().split(":")[1];
            var number_b=text.substring(0,text.length-1); 

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
        $(".hide_error").css('display','none');
        $(".hide_answer").css('display','none');

        var user_data=localStorage.getItem("my_training");
        

        var rating=localStorage.getItem("star_rating");

        if(rating==null){
            j_obj={
                crazy_cardio:{
                avg:"3.5",
                number:"4"
                },
                fat_burning:{
                    avg:"3.5",
                    number:"4"
                    },
                spin_burning:{
                    avg:"3.5",
                    number:"4"
                    },

                pilates:{
                    avg:"3.5",
                    number:"4"
                    },
                aerobik:{
                    avg:"3.5",
                    number:"4"
                    },
                zumba:{
                    avg:"3.5",
                    number:"4"
                    },

                h_yoga:{
                    avg:"3.5",
                    number:"4"
                    },
                b_yoga:{
                    avg:"3.5",
                    number:"4"
                    },
                meditation:{
                    avg:"3.5",
                    number:"4"
                    },

                core_gluteus:{
                    avg:"3.5",
                    number:"4"
                    },
                core_endurance:{
                    avg:"3.5",
                    number:"4"
                    },
                body_pump:{
                    avg:"3.5",
                    number:"4"
                    }
    
            }
            localStorage.setItem("star_rating",JSON.stringify(j_obj));
            rating=localStorage.getItem("star_rating");
        }

        var my_trainings=JSON.parse(user_data);  
        var raitings=JSON.parse(rating);  

        var training=$("#training_value").val();
        var stars=$("#star_value").val();
        var text=$("#comment_text").val();
        $("#comment_text").val("");

        var commented=false;

       
        for (let index = 0; index < my_trainings[training].length; index++) {
            element =  my_trainings[training][index];
            if(element.commented!=="yes"){
                element.text=text;
                element.stars=stars;
                element.commented="yes";
                commented=true;

                $(".hide_answer").css("display","block");

                var number=parseInt(raitings[training].number);
                var avg=parseFloat(raitings[training].avg);

                var new_avg=(avg*number+parseInt(stars))/(number+1);
                number++;
                raitings[training].number=number;
                raitings[training].avg=new_avg;

                localStorage.setItem("star_rating",JSON.stringify(raitings));

                break;
            }
        }
        if(my_trainings[training].length==0){
            $("#comment_cant").css("display","block");
        }
        else if(commented==false){
            $("#comment_allr").css("display","block");
        }





        localStorage.setItem("my_training",JSON.stringify(my_trainings));
    })

});