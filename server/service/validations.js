import {cpf}  from 'cpf-cnpj-validator'

export const validateCPF = (cpfReceived) => {
    const cpfFormatted = cpfReceived.trim()
    return cpf.isValid(cpfFormatted);
};