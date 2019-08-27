// by Sajjad alDalwachee

// function tacke ipv6 abbreviated or not and return expand ipv6 address



function count(str, letter)
{
 var Counter = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      Counter += 1;
      }
  }
  return Counter;
}


module.exports = {
    hextets: (address) => {
      if (address == '') {
        return 'Error : No Address';
      } else if (count(address, ":") < 2){
        return 'Error !';
      }

      slash = address.indexOf('/')
      if (slash != -1) {

        hextets.splice(abbreviatePosition, 1)
      }
      address

      hextets = address.split(':');

      abbreviatePosition = hextets.indexOf('');
      if (abbreviatePosition === -1) {
        return 'error';
      } else {
        hextets.splice(abbreviatePosition, 1);
      }

      let abbreviationLength = 8 - hextets.length;
      for (var i = 0; i < abbreviationLength; i++) {
        hextets.splice( abbreviatePosition, 0, '0000');
      }

      for (var i = 0; i < hextets.length; i++) {
        if (hextets[i].length != 4) {
          if (hextets[i].length < 4) {
            let Zeros = '';
            for (var j = 1; j < 4 - hextets[i].length; j++) {
              Zeros += '0';
            }
            hextets[i] = ('0' + Zeros + hextets[i])
          } else {
            return 'error'
          }
        }
      }
      for (var i = 0; i < hextets.length; i++) {
        hextets[i] = hextets[i].toUpperCase();
      }
      return hextets
    },


  address: (address) => {

    address = module.exports.hextets(address).join(':');
    return address
  },

  range: (address) => {

    hextets = module.exports.hextets(address);

    function core(hextet) {

    }












  }
}
