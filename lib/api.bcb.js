const axios = require('axios')

//const data = '11-01-2021'
const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2711-01-2021%27&$top=100&$format=json'

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getCotacao = async () => {
  try {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
  } catch (err) {
    console.log('Erro', err)
  }
}

module.exports = {
  getCotacaoAPI,
  getCotacao,
  extractCotacao
}
