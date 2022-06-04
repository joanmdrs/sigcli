import {cpf}  from 'cpf-cnpj-validator'
import validator from 'validator'

export const validateCPF = (cpfReceived) => {
    const cpfFormatted = cpfReceived.trim()
    return cpf.isValid(cpfFormatted);
};

export const validatePhone = (phoneReceived)=>{
    const phoneFormatted = phoneReceived.trim();
    return validator.isMobilePhone(phoneFormatted, "pt-BR");
}
