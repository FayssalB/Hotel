// Chambre 1 personne : 65€
// Chambre 2 personnes : 89€
// Chambre 4 personnes : 139€
// Loft : 189€

function tupayes(nuitpassée,chambre,optiondej){
    
    const prixDej = 7;
    let somme = 0;
    chambre1 = 65;
    chambre2 = 89;
    chambre4 = 139;
    loft=189;
    if(chambre == 1){
        if(optiondej=="Oui"){
            somme = (chambre1 * nuitpassée) + prixDej
        }else{
            somme = (chambre1 * nuitpassée)
        }

    }else if(chambre == 2){
        if(optiondej=="Oui"){
            somme = (chambre2 * nuitpassée) + prixDej
        }else{
            somme = (chambre2 * nuitpassée)
        }

    }else if(chambre == 3){
        if(optiondej=="Oui"){
            somme = (chambre3 * nuitpassée) + prixDej
        }else{
            somme = (chambre3 * nuitpassée)
        }
    }else if(chambre == 3){
        if(optiondej=="Oui"){
            somme = (loft * nuitpassée) + prixDej
        }else{
            somme = (loft * nuitpassée)
        }
    }

    return somme
}

class  Reservation{
    constructor(prenom, nom,nbNuit,chambre,dej){
        this.prenom = prenom,
        this.nom = nom,
        this.nuit =nbNuit,
        this.chambre =chambre,
        this.dej = dej,
        this.table = [{}],
        this.total = 0;
    }

    // addClient(prenom, nom,nbNuit,chambre,dej){
    //     this.table.push({
    //         firstname:prenom,
    //         lastname:nom,
    //         night:nbNuit,
    //         room:chambre,
    //         breakfast:dej});
    // }
}


let menuForm = document.querySelector("section#Fayssal form#form1");
let btnsubmit = document.querySelector("input#submit")

let btnradio = document.querySelectorAll("#btnradio input")
console.log(btnradio);

let tableau = [];
let listeCommande =[];

console.log(menuForm);

let c1 = new Reservation("Fayssal","belghazi",2,2,"Oui")
//c1.addClient("Fayssal","belghazi",2,2,"oui");
tableau.push(c1);
// let c2 = new Reservation()
// c2.addClient("red","by",2,2,"non");
// tableau.push(c2);



console.table(c1.table);
console.table(tableau["0"].table);


btnsubmit.addEventListener("click",(e)=>{
    let prenom,nom,nuit,chambre,dej;
    e.preventDefault();
    prenom = menuForm[0].value 
    nom = menuForm[1].value
    nuit = menuForm[2].value
    chambre = menuForm[3].value
    dejOui = menuForm[4].value
    dejNon = menuForm[5].value
    
    console.log(`${prenom} ${nom} ${nuit} ${chambre} ${dej}`)

    let client = new Reservation(prenom,nom,nuit,chambre,dej)
    
    tableau.push(client)
    console.table(tableau);

});

let form2 = document.querySelector("form#form2")
let btnsubmit2 = document.querySelector("input#submit2")

console.log(form2);

//console.log(tableau[0].prenom);

btnsubmit2.addEventListener("click",(e)=>{
    e.preventDefault();
    index = 0;
    for(element of tableau){
        if(form2[0].value == tableau[index].prenom && form2[1].value == tableau[index].nom){
            console.log(tupayes(tableau[index].nuit,tableau[index].chambre,tableau[index].dej))
         
        }
        index++;
    }
})


let i=1;
// let cmd = new Reservation(i);
// cmd = addReservation(cmd)
// tableau.push(cmd);




 






















// function addReservation(nvxclient){
//     let vrai = true;
//     let prenom,nom,nbnuit,choix_chambre,dejeuner;
    
//     do{

//         let menuForm= document.querySelectorAll("section#Fayssal input");
//         let ch_select = document.querySelector("#chambre-select")
//         btnsubmit = document.querySelector("#submit")

//         ch_select.addEventListener("change",()=>{
//             console.log(ch_select.value);
//         });

        


//         for(let element of menuForm){

//             element.addEventListener("change",()=>{
//                 //console.log(` ${element.name} ${element.value} `);
//                 if(element.name == "Prenom"){
//                     prenom = element.value;
//                     console.log(prenom);
//                 }
//                 if(element.name == "Nom"){
//                     nom = element.value
//                     console.log(nom);
//                 }
//                 if(element.name == "Nuit"){
//                     nbnuit = element.value
//                     console.log(nbnuit);
//                 }
//                 if(element.name == "Chambre"){
//                     choix_chambre = element.value
//                     console.log(choix_chambre);
//                 }
//                 if(element.name == "dejOui"){
//                     dejeuner = element.value
//                     console.log(dejeuner);
//                 }
//                 if(element.name == "choix"){
//                     if(element.value == "dejOui"){
//                         dejeuner = element.value
//                         console.log(dejeuner);
//                     }else{
//                         dejeuner = element.value
//                         console.log(dejeuner);
//                     }
                    
//                 }
//                 // for(let element of )
                
                
//             });

//             btnsubmit.addEventListener("click", ()=>{
//                 console.log(btnsubmit.value);
                
//             });

//             nvxclient.addClient(prenom,nom,nbnuit,choix_chambre,dejeuner);
//             vrai=false

//         }


//         }while(vrai)


// }







// let prenom = document.querySelector("form div input#prenom");
// let nom = document.querySelector("form div input#nom");
// let nbNuit = document.querySelector("form div input#nbnuit");
// let ch_chambre = document.querySelector("form div input#chambre-select");

// prenom.addEventListener("change",()=>{
//     console.log(prenom.value);
// })
// nom.addEventListener("change",()=>{
//     console.log(nom.value);
// })
// nbNuit.addEventListener("change",()=>{
//     console.log(nbNuit.value);
// })
// ch_chambre.addEventListener("change",()=>{
//     console.log(ch_chambre.value);
// })