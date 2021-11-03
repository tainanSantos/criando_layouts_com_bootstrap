var popoverTriggerList = [].slide.call(document.querySelectorAll('[data-bs-toggle="popover"]'))


//  inserindo o evento de disparador de popover em cada um dos botões
var popoverList = popoverTriggerList.map((popoverTriggerEl) => {
    return new bootstrap.Popover(popoverTriggerEl)
})


// // Tooltip
// var tooltipTriggerList = [].slide.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))


// //  inserindo o evento de disparador de popover em cada um dos botões
// var tooltipList = tooltipTriggerList.map( (tooltipTriggerEl) =>{
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })


