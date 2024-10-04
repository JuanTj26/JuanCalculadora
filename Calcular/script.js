function calcularCorriente() {
    const resistencia = parseFloat(document.getElementById('resistenciaR').value);
    const voltaje = parseFloat(document.getElementById('voltajeR').value);

    if (resistencia === 0) {
        document.getElementById('resultado').textContent = 'La resistencia no puede ser cero.';
        return;
    }

    // Calcular corriente usando la ley de Ohm: I = V / R
    const corriente = voltaje / resistencia;

    // Convertir a miliamperios
    const corrienteEnMiliamperios = corriente * 1000;

    document.getElementById('resultado').textContent = `La corriente es ${corrienteEnMiliamperios.toFixed(2)} mA.`;
}
