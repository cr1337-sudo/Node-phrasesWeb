const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const string = "Hola"

for (i of string) {
   if (i in numbers) return false
}