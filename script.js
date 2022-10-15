const school = {
	name: "fb"
}

const switchToLf = () => {
	school.name = "lf";
	
	const labelParcial = document.getElementById("labelParcial");
	const labelGlobal = document.getElementById("labelGlobal");
	const labelPontos = document.getElementById("labelExtra");
	
	labelParcial.textContent = "Parcial:";
	labelGlobal.textContent = "Global:";
	labelExtra.textContent = "Pontos:";
	
}

const switchToFb = () => {
	school.name = "fb";
	
	const labelParcial = document.getElementById("labelParcial");
	const labelGlobal = document.getElementById("labelGlobal");
	const labelPontos = document.getElementById("labelExtra");
	
	labelParcial.textContent = "VP:";
	labelGlobal.textContent = "VG:";
	labelExtra.textContent = "NTD:";
	
}

/* Selecting the send button... */
const btn = document.querySelector("#send");


/* Calculating the grades... */
btn.addEventListener("click", function(e) {
 
 e.preventDefault();

if(school.name == "fb") {
 /* Selecting the grades to calculate */	
 const vp = document.querySelector("#parcial");
 const vg = document.querySelector("#global");
 const ntd = document.querySelector("#extra");
 const media = document.querySelector("#media");
 
 const nota1 = parseInt(vp.value);
 const nota2 = parseInt(vg.value);
 const nota3 = parseInt(ntd.value);
 
 /* Guaranting if everything is ok... */
 if(nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0 && nota3 <= 10 && nota3 >= 0) {
 media.value = (nota1 * 2 + nota2 * 2 + nota3)/5;
 	if(media.value < 7) {
		 media.style.color = "red";
 	} else {
		 media.style.color = "green";
 	}
 
} 
/* if the school selected is clf */
} else if (school.name == "lf") {
	 const parcial = document.querySelector("#parcial");
	 const provaGlobal = document.querySelector("#global");
 	 const extra = document.querySelector("#extra");
	 const media = document.querySelector("#media");

	 const nota1 = parseInt(parcial.value);
	 const nota2 = parseInt(provaGlobal.value);
   	 const pontos = parseInt(extra.value);
	
	 if(nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0) {
	
		if(pontos >= 0) {
			media.value = (nota1 + nota2)/2 + pontos;
			if(media.value > 10) {
				media.value = 10;
			}
		} else {
			media.value = (nota1 + nota2)/2;
		}
		
	 	if(media.value < 7) {
		 	media.style.color = "red";
 		} else {
			media.style.color = "green";
		}
		
	}
 
}

})
