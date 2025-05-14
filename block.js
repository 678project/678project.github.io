// Blocks website access from certain time ranges
let day = '';
const currentDate = Date();
if (currentDate.includes('Wen')) {
  day = '3';
} else if (currentDate.includes('Mon') || currentDate.includes('Fri')) {
  day = '1';
} else if (currentDate.includes('Tue') || currentDate.includes('Thu')) {
  day = '2';
}
console.log(day);
const currentDateArray = currentDate.split(' ');
const currentTime = currentDateArray[4];
const currentTimeInt = currentTime.replaceAll(':', '');
console.log(`Time: ${currentTimeInt}`);
/* Mon and Fri
  LStart:
  105000
  LEnd:
  122000
  SStart:
  
  SEnd:
  142000
*/
/* Tue and Thu
  LStart:
  110800
  LEnd:
  123800

  SEnd:
  142000
*/
/* Wen
  LStart:
  ??
  LEnd:
  ??
  
  SEnd:
  125000
*/

//if (currentTimeInt >
