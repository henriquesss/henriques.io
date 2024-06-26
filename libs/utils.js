export function formatIsoData(dataISO) {
    const data = new Date(dataISO);
    
    const day = String(data.getUTCDate()).padStart(2, '0');
    const month = String(data.getUTCMonth() + 1).padStart(2, '0');
    const year = data.getUTCFullYear();
    
    // Retorna a data formatada no formato desejado
    return `${day}/${month}/${year}`;
}