const faireInput = document.getElementById("text");
const fini = document.getElementById("fini");
const ul = document.getElementById("affiche");
const button = document.getElementById("bt");


const envoie = () => {
    let value = "";

    
    let li = document.createElement('li');
    let butt = document.createElement('button');
    butt.classList.add("b-ini");
    let delet = document.createElement("button");
    delet.classList.add("supp");
    
    butt.innerHTML = "fini";
    delet.innerHTML = "supprimer";
    
    delet.addEventListener("click", () => {
        ul.removeChild(li);
    });
    
    
    value = faireInput.value;
    
    butt.addEventListener("click", () => {
        ul.removeChild(li);
        li.removeChild(delet);
        li.removeChild(butt)
        fini.appendChild(li);
        
        let delt = document.createElement('button');   
        delt.innerHTML = "Supprimer" ;
        delt.classList.add("supp");
        delt.addEventListener("click", () => {
            fini.removeChild(li)
        });
        li.appendChild(delt)
        
    });
    
    if(value === "")
    {
        alert("Veuillez ajouter une tache");
        return;
    };
    
    li.innerHTML = value;
    ul.appendChild(li);
    li.appendChild(delet);
    li.appendChild(butt);
    faireInput.value = "";
};

button.addEventListener('click', envoie);