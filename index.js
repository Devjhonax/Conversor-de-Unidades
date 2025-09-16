const valor = parseFloat(process.argv[2]);
const de = process.argv[3];
const para = process.argv[4];

if (isNaN(valor) || !de || !para) {
  console.log("Uso: node conversor.js <valor> <unidade_origem> <unidade_destino>");
  process.exit(1);
}

let resultado;

if (de === "km" && para === "milhas") {
  resultado = valor * 0.621371;
  console.log(`${valor} quilômetros é igual a ${resultado.toFixed(2)} milhas.`);
} else if (de === "milhas" && para === "km") {
  resultado = valor / 0.621371;
  console.log(`${valor} milhas é igual a ${resultado.toFixed(2)} quilômetros.`);
} else if (de === "celsius" && para === "fahrenheit") {
  resultado = (valor * 9) / 5 + 32;
  console.log(`${valor} graus Celsius é igual a ${resultado.toFixed(2)} graus Fahrenheit.`);
} else if (de === "fahrenheit" && para === "celsius") {
  resultado = ((valor - 32) * 5) / 9;
  console.log(`${valor} graus Fahrenheit é igual a ${resultado.toFixed(2)} graus Celsius.`);
} else {
  console.log("Conversão não suportada.");
}
