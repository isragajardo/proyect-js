const btnAddCountry = document.querySelector("#btn-add-country");
const btnAddCountryAll = document.querySelector("#btn-add-country-all")
const spam = document.getElementById("idOutput");



btnAddCountry.addEventListener("click", ()=>{

   
    let country = document.querySelector("#country-select").value;
    

    let cash = document.querySelector("#input-cash").value;
    
    let option = document.querySelectorAll("option") //selecciona todos los elementos "option" de el select
    
    
        let result;
        if (country==="Country")
        {
            spam.textContent = "Debes seleccionar un pais Pais"

            
        }
        

        else if(country === "Chile")
        {
            result=cash*1.21;
            let printParagrahap = country+" = "+result;
            spam.textContent = printParagrahap ;

        }

        else if(country==="Argentina")
        {
            result=cash*1.21;
            let printParagrahap = country+" = "+result;
            /*
            const paragraph = addParagraph(printParagrahp);
            const allList = document.querySelector(".allList");
            allList.appendChild(paragraph);
        
            */

            spam.textContent = printParagrahap ;
        } 

        else if(country === "Chile")
        {
            result=cash*1.18;
            let printParagrahap = country+" = "+result;
            spam.textContent = printParagrahap ;

        }
        else if(country === "Peru")
        {
            result=cash*1.18;
            let printParagrahap = country+" = "+result;
            spam.textContent = printParagrahap ;

        }

});

btnAddCountryAll.addEventListener("click", ()=>{

    /* console.log("hola");
     let listName = document.querySelector("#list-country");
     let name = addParrafo(); //crear
     name.innerText = "hola" //insertar texto
     listName.appendChild(name)
     */
     // .value se le agrega para asignar el valor seleccionado del elemento html
     let country = document.querySelector("#country-select").value;
     
 
     let cash = document.querySelector("#input-cash").value;
     
     let option = document.querySelectorAll("option") //selecciona todos los elementos "option" de el select
     
     for(let i=1;i<option.length;i++)
     {
         const countryOption = option[i].value;
         let result;
 
         if(countryOption === "Chile")
         {
             result=operation(countryOption,cash); // llama funcion operation
 
         }
         else if(countryOption==="Argentina")
         {
             result=operation(countryOption,cash);
         }
         else if(countryOption==="Peru")
         {
             result=operation(countryOption,cash);
         }
         
         let printParagrahp = countryOption+" = "+result;
         const paragraph = addParagraph(printParagrahp);
         const allList = document.querySelector(".allList");
         allList.appendChild(paragraph);
 
 
     }
 
     
     
 
     
 
 });

// funciones

function operation(country, cash)
{
    let iva=0;
    let result=0;
    if(country==="Chile")
    {
        iva = 1.19;
        result=iva*cash;
        

        
    }
    else if(country==="Argentina")
    {

        iva = 1.21;
        result=iva*cash;
        

    }
    else if(country==="Peru")
    {

        iva = 1.21;
        result=iva*cash;
        

    }

    return result;
    

}

function addParagraph(text)
{
    const paragraph = document.createElement("p"); // crea un parrado
    paragraph.innerText = text;
    return paragraph;
    
}

