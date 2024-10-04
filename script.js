function calcularCorriente() {
    const resistencia = parseFloat(document.getElementById("resistencia").value);
    const unidad = document.getElementById("unidad").value;
    let resistenciaOhmios;

    // Convertir a ohmios si la unidad es kiloohmios
    if (unidad === "kiloohmios") {
        resistenciaOhmios = resistencia * 1000;
    } else {
        resistenciaOhmios = resistencia;
    }

    const voltaje = 5; // Voltaje fijo de 5V
    const corriente = (voltaje / resistenciaOhmios) * 1000; // Corriente en mA
    
    document.getElementById("resultado").textContent = `La corriente es ${corriente.toFixed(2)} mA`;
}
