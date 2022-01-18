const fs = require('fs');

class passwordService {
  constructor(objData) {
    this.objData = objData
  }

  savePass(site, pass) {
    if (!this.objData[site])
      (this.objData[site] = {
        current: null,
        prev: []
      })
    this.objData[site].prev.indexOf(pass) < 0 && this.objData[site].prev.push(pass);
    this.objData[site].current = pass
    fs.writeFileSync(process.cwd() + '/records/passRecords.json', JSON.stringify(this.objData, null, 2))
  }
}

module.exports = passwordService