const selectOption = document.querySelector(".custom-select");
const graph = document.querySelector(".data")
selectOption.addEventListener('change',(e)=>{
    const selectedValue = e.target.value;
    if (selectedValue === 'dia')
        {
            graph.src = "img/diagrama-dia.png"
        }else if (selectedValue === 'mes') {

            graph.src = "img/diagrama-mes.png" 
        }else if (selectedValue === 'anio') {

            graph.src = "img/diagrama-anio.png" 
            graph.style.height = '243px';
        }
    console.log(selectedValue);
    
});
