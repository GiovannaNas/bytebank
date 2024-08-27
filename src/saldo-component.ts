let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
  elementoSaldo.textContent = saldo.toLocaleString ("pt-br", { currency: "BRL", style: "currency" });
}

if (elementoDataAcesso != null){
    const elementoDataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData (dataAcesso)
}