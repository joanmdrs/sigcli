import {cpf}  from 'cpf-cnpj-validator'

export const validateCPF = (cpfReceived) => {
    const cpfFormatted = cpfReceived.toLowerCase().trim()
    return cpf.isValid(cpfFormatted);
};