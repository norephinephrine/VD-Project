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


});