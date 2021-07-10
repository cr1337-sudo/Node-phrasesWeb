const inputValidation = (name, text) => {

   //Funcion que valida si hay un numero en el texto o en el name
   const isNumber = (name, text) => {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?","¿","!","¡",")","("$&.'!"@&]

      for (t of text) {
         if (t in numbers) return false
      }
      for (n of name) {
         if (n in numbers) return false
      }

   }

}