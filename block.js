// Blocks website access from certain time ranges
const currentDate = Date();
const currentDateArray = currentDate.split(' ');
const currentTime = currentDateArray[4];
const currentTimeInt = currentTime.replaceAll(':', '');
console.log(`Time: ${currentTimeInt}`);
