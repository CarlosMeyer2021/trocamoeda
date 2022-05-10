const axios = require('axios')

const data = '11-01-2021'
const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2711-01-2021%27&$top=100&$format=json'

axios
  .get(url)
  .then(res => console.log(res.data.value[0].cotacaoVenda))
  .catch(err => console.log(err))