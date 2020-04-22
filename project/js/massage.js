 $(document).ready(function(){
        $("#checkFields").click(function(){
            //check username a-z,A-Z,0-9,_
            $(".hide_error").css('display','none');
            $(".hide_answer").css('display','none');
            let succes=true;
            let usernameRegExp=/^[a-zA-Z]+$/;
           
            if(!usernameRegExp.test(document.getElementById("name").value)){
                $("#s_name").css('display','block');
                succes=false;
               
            }


            if(!usernameRegExp.test(document.getElementById("surname").value)){
                $("#s_sur").css('display','block');
                succes=false;
            }


            let mailRegExp=/^\w+@\w+([-\.]\w+)*(\.\w{2,3})+$/;
            if(!mailRegExp.test(document.getElementById("mail").value)){
                $("#s_mail").css('display','block');
                succes=false;
            }


            let telRegExp1=/^\+3816\d{7,9}$/;
            let telRegExp2=/^06\d{7,9}$/;
            if(telRegExp1.test(document.getElementById("tel").value)==false && telRegExp2.test(document.getElementById("tel").value)==false){
                $("#s_tel").css('display','block');
                succes=false;
            }

            let today=new Date();
            today.setHours(0,0,0,0);
            if(document.getElementById("date").value=="" || new Date(document.getElementById("date").value).getTime()<today.getTime()){
                $("#s_date").css('display','block');
                succes=false;
            }
            if(succes){
                $(".hide_answer").css('display','block');
                j_obj={
                    name:document.getElementById("name").value,
                    surname:document.getElementById("surname").value,
                    mail:document.getElementById("mail").value,
                    tel:document.getElementById("tel").value,
                    date:document.getElementById("date").value
                }
                localStorage.setItem('massage_data',JSON.stringify(j_obj));
                
            }

        })
        $("#downloadForm").click(function(){
            var obj=localStorage.getItem("massage_data");
            if(obj!=null){
                var json_obj=JSON.parse(obj);
               alert(JSON.stringify(json_obj));
                var doc=new jsPDF();
                doc.text("Name:"+json_obj["name"], 20, 20);
                doc.text("Surname:"+json_obj["surname"], 20, 30);
                doc.text("Mail:"+json_obj["mail"], 20, 40);
                doc.text("Telephone:"+json_obj["tel"], 20, 50);
                doc.text("Requested date:"+json_obj["date"], 20, 60);
                doc.save('test.pdf')
            }

        })
    });