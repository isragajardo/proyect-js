const btnAddCountry = document.querySelector("#btn-add-country");

btnAddCountry.addEventListener("click", ()=>{

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
        iva = 0.19;
        result=iva*cash;
        console.log("hola")
        

        
    }
    else if(country==="Argentina")
    {

        iva = 0.21;
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

