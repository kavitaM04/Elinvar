function generateAssetName () {
    let name = Math.round(new Date().getTime() / 1000)
    return 'QAUE' + name
  }

  module.exports = {
    generateAssetName
  }