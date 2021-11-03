// funçaõ com alto invocação
(function () {

    'use strict' // opcional, server só para garantir que digitemos um js válido

    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated')
        })
    }, false);

})() // fun