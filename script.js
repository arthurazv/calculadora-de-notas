const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
 

 e.preventDefault();
 
 const vp = document.querySelector("#vp");
 const vg = document.querySelector("#vg");
 const ntd = document.querySelector("#ntd");
 const media = document.querySelector("#media");
 
 const nota1 = parseInt(vp.value);
 const nota2 = parseInt(vg.value);
 const nota3 = parseInt(ntd.value);
 
 if(nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota3 <= 10 && nota3 >= 0 && media.value == 0) {
 media.value = (nota1 * 2 + nota2 * 2 + nota3)/5;
 	if(media.value < 7) {
		 media.style.color = "red";
 	} else {
		 media.style.color = "green";
 	}
 
}

})
