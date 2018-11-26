function terimainput() {
  var a=document.forms['inputwisata']['wisata'].value;
  var b=document.forms['inputwisata']['nama'].value;
  var c=document.forms['inputwisata']['gambar'].value;
  var d=document.forms['inputwisata']['deskripsi'].value;
  var e=document.forms['inputwisata']['haribiasa'].value;
  var f=document.forms['inputwisata']['harilibur'].value;
  var g=document.forms['inputwisata']['motor'].value;
  var h=document.forms['inputwisata']['mobil'].value;
  var i=document.forms['inputwisata']['rutemasuk'].value;

  if (a =="" || b =="" || c =="" || d =="" || e =="" || f =="" || g =="" || h =="" ||  i =="") {
    alert("Terdapat data kosong, harap diisi kembali");
      } else {
        alert("Data Berhasil di Entry");

          var tabel = document.getElementById("tabelinput");
          var row = tabel.insertRow(1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);

          cell1.innerHTML = a;
          cell2.innerHTML = b;
          cell3.innerHTML = c;
          cell4.innerHTML = d;
          cell5.innerHTML = e;
          cell6.innerHTML = f;
          cell7.innerHTML = g;
          cell8.innerHTML = h;
          cell9.innerHTML = i;
          
    };
}
