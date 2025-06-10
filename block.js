// Blocks website access from certain time ranges
let day = '';
let currentDate = new Date().toString();
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
  103300
  LEnd:
  120900
  
  SEnd:
  125000
*/
function shouldSiteBeBlocked() {
  if (day == 1) {
    if (currentTimeInt > 104959 && currentTimeInt < 122000 || currentTimeInt > 141959) {
      return false;
    } else {
      return true;
    }
  } else if (day == 2) {
    if (currentTimeInt > 110759 && currentTimeInt < 122000 || currentTimeInt > 141959) {
      return false;
    } else {
      return true;
    }
  } else if (day == 3) {
    if (currentTimeInt > 103259 && currentTimeInt < 120900 || currentTimeInt > 124959) {
      return false;
    } else {
      return true;
    }
  }
}
if (shouldSiteBeBlocked()) {
  location.replace('/block');
}
