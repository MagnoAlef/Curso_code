let medidas = prompt(
  "Digite um valor em metros, para ser convertida nas seguintes medidas:"
);
let opcoes = prompt(
  "Digite para qual unidade de medida vc queira converter:\n milimetro(mm)\n centimetro(cm)\n decimetro(dm)\n decametro(dam)\n hectometro(hm)\n quilometro(km)\n"
);

switch (opcoes) {
  case "mm":
    alert(`${medidas*1000}`);
    break;
  case "cm":
    alert(`${medidas*1000}`);
    break;
  case "dm":
    alert(`${medidas*10}`);
    break;
  case "dam":
    alert(`${medidas/10}`);
    break;
  case "hm":
    alert(`${medidas/100}`);
    break;
  case "km":
    alert(`${medidas/1000}`);
    break;
  default:
    alert("Opção invalida");
}
