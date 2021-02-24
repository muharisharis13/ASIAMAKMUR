import CryptoJS from 'crypto-js'

// encript
export const encrypt = (data) => {
  const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), 'COMPANY_ROLE_2022').toString();

  return cipherText;
}

// descrypt

export const decrypt = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, 'COMPANY_ROLE_2022');
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
}