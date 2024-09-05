export function ValidaDebito(target, propertKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo é insuficiente pra realizar a operação!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidarDeposito(target, propertKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado precisa ser maior que zero!");
        }
        if (valorDoDeposito > this.saldo) {
            throw new Error("Seu saldo é insuficiente pra realizar a operação!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
