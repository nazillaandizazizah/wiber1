var user,pass;
        $("form[name=login]").submit(function(){
          user = $("input[name=user]").val();
          pass = $("input[name=password]").val()
          if (user == "admin" && pass == "admin") {
          }else if (user =="" || pass=="") {
            alert("Data Kosong");
          } else {
            alert("Maaf, data yang Anda masukkan salah");
          }
        });