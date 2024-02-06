var alma = (number) => {
    var birinci = 0;
    var ikinci = 1;
    var esas = birinci + ikinci;
    var result = [];
    result.push(birinci);
    result.push(ikinci);
  
    while (esas < 25) {
      result.push(esas);
      birinci = ikinci;
      ikinci = esas;
      esas = birinci + ikinci;
    }
  
    return result.filter((element) => {
        for (let i = 2; i < element; i++) {
          if (element % i == 0) {
            return element;
          }
        }
      });
  };
  console.log(alma(25));