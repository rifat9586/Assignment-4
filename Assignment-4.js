// function calculateMoney(ticketSale) { //PROBLEM 1 -
//     let DarwanCosts = 500;
//     let StaffLunchCosts = 50;
//     let TotalStaff = 8;
//     let ticketPrice = 120;
//        let totalTicketPrice = ticketPrice * ticketSale;
//        let totalCosts =DarwanCosts+ (StaffLunchCosts * TotalStaff);
//     if(ticketSale<0){
//         return "Invalid Number";
//     }
//     let costs = totalTicketPrice - totalCosts;
//        return costs;
// }
// const result = calculateMoney(-130);
// console.log(result);




// function checkName(name) { //PROBLEM 2 -
//     if (typeof name !== "string") {
//         return "invalid";
//     }
//     const lastCheck = name[name.length - 1];
//     let listUperCass = lastCheck.toLowerCase();
//     const checkNames = ["a", "y", "i", "e", "o", "u", "w"];
//     if (checkNames.includes(listUperCass)) {
//         return "Good Name";
//     } else {
//         return "Bad Name";
//     }
// }
// const result = checkName(["gsg"]);
// console.log(result);


// function deleteInvalids(array) { //problem 3 -
//     if(!Array.isArray(array)){
//         return "Invalid Array";
//     }
//        let onlyNum=[];
//     for(const oneArray of array){
//      let numberArray = Number(oneArray);
//          if(typeof oneArray === "number" && !isNaN(numberArray)){
//             onlyNum.push(oneArray);
//          }
//     }
//     return onlyNum;
// }
// const result = deleteInvalids({ num: [1, 2, 3] });
// console.log(result);


// function password(obj) { //problem 4
//     if (
//         obj.name !== undefined &&
//         obj.birthYear !== undefined &&
//         obj.siteName !== undefined
//     ) {
//         if (String(obj.birthYear).length !== 4) {
//             return "invalid";
//         }
//         let webName = obj.siteName.charAt(0)
//         let firstWord = webName.toUpperCase();
//         let index1_all = obj.siteName.slice(1);
//         let endWord = index1_all.toLowerCase();
//         let ataset = firstWord + endWord;
//         let result = ataset + "#" + obj.name + "@" + obj.birthYear;
//         return result;
//     }
//     else {
//         return "invalid";
//     }

// }
// const result = password({ name: "maisha" , birthYear: 2002 });
// console.log(result);





// function monthlySavings(arr, livingCost) { //problem 5 -
//         if(typeof arr !== 'string' && typeof livingCost !== 'number'){
//             return 'invalid input';
//         }
//      let amunt=[];
//     for(const Payment of arr){
//         if(Payment >=3000){
//             let totalTax =Payment / 100 * 20;
//              let total = Payment - totalTax;
//             amunt.push(total);
//         }
//         else{
//             amunt.push(Payment);
//         }
//     }  
//          let sumPayment = 0;
//     for (const oneDayPayment of amunt) {
//         sumPayment = sumPayment + oneDayPayment;
//     }
//     let saving =sumPayment - livingCost;
//     if (saving < 0) {
//                 return "earn more";
//             }
//             else{
//                 return saving;
//             } 
// }
// const result = monthlySavings([900, 2700, 3400], 1000);
// console.log(result);