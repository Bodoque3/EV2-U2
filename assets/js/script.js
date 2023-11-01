function promedio() {
    let Nombre = document.getElementById("Nombre")[0].value;
    let Asignatura = document.getElementById("Asignatura")[0].value;
    const nota1 = parseFloat(document.getElementById("nota1")[0].value);
    const nota2 = parseFloat(document.getElementById("nota2")[0].value);
    const nota3 = parseFloat(document.getElementById("nota3")[0].value);
    const nota4 = parseFloat(document.getElementById("nota4")[0].value);
    const nota5 = parseFloat(document.getElementById("nota5")[0].value);
    const nota6 = parseFloat(document.getElementById("nota6")[0].value);

    const unidad1 = ((nota1 * 0.12) + (nota2 * 0.21)).toFixed(2);
    const unidad2 = ((nota1 * 0.12) + (nota2 * 0.21)).toFixed(2);
    const unidad3 = ((nota1 * 0.13) + (nota2 * 0.21)).toFixed(2);

    const calcular = ((nota1 * 0.12) + (nota2 * 0.21) + (nota3 * 0.12) + (nota4 * 0.21) + (nota5 * 0.13) + (nota6 * 0.21)).toFixed(2);

    if (Nombre.length === 0 || !isNaN(Nombre)) {
        alert("Mensaje no enviado. Rellene los Campos.");
        return;
    };

    if (Asignatura.length === 0 || !isNaN(Asignatura)) {
        alert("Mensaje no enviado. Rellene los Campos.");
        return;
    };

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
        alert("Ingrese notas válidas en los campos de notas.");
        return;
    } else if (nota1 == 0 || nota2 == 0 || nota3 == 0 || nota4 == 0 || nota5 == 0 || nota6 == 0) {
        alert("Ingrese una nota valida.");
    } else if (nota1 > 7 || nota2 > 7 || nota3 > 7 || nota4 > 7 || nota5 > 7 || nota6 > 7) {
        alert("Las notas no pueden ser mayores que 7.");
        return;
    }

    const url = `resultado.html?Nombre=${document.getElementById('Nombre').value}
        &Asignatura=${document.getElementById('Asignatura').value}&nota1=${document.getElementById('nota1').value}
        &nota2=${document.getElementById('nota2').value}&nota3=${document.getElementById('nota3').value}
        &nota4=${Document.getElementById('nota4').value}&nota5=${document.getElementById('nota5').value}
        &nota6=${document.getElementById('nota6').values}&unidad1=${unidad1}&unidad2=${unidad2}&unidad3=${unidad3}
        &calcular=${calcular}`

        window.location.href = url;
}

