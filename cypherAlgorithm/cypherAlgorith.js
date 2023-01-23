class ShiftCipher {
    constructor(num){
      this.num = num 
    }
  
    encrypt(pText){
      let encryptTxt = ''
      let convertedPText = pText.toUpperCase()
      for(let i = 0; i < convertedPText.length; i++){
        let charNum = convertedPText.charCodeAt(i)
        if(charNum <= 90 && charNum >= 65){
          charNum += this.num 
        }
        if(charNum > 90){
          charNum -= 26
        }
        encryptTxt +=  String.fromCharCode(charNum)
      }
    return encryptTxt
    }
  
    decrypt(pText){
      let decrytptTxt = ''
      let convertedpTxt = pText.toLowerCase()
  
      for(let i = 0; i < convertedpTxt.length; i++){
        let charNum = convertedpTxt.charCodeAt(i)
        if(charNum <= 122 && charNum >= 97){
          charNum -= this.num
        }
  
        if(charNum < 97){
          charNum += 26
        }
  
        decrytptTxt += String.fromCharCode(charNum)
      }
  
      return decrytptTxt
  
    }
  }
  
  const cipher = new ShiftCipher(2)
  
  console.log(cipher.encrypt('javascript is interesting'))
  console.log(cipher.decrypt('LCXCUETKRV KU KPVGTGUVKPI'))
  