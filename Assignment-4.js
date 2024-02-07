// function calculateMoney(ticketSale) {
//     let DarwanCosts = 500;
//     let StaffLunchCosts = 50;
//     let TotalStaff = 8;
//     let ticketPrice = 120;
//        let totalTicketPrice = ticketPrice * ticketSale;
//        let totalCosts =DarwanCosts+ (StaffLunchCosts * TotalStaff);
//     if(ticketSale<0){
//         return "Invalid Number"
//     }
//     let costs = totalTicketPrice - totalCosts;
//        return costs;
// }
// const result = calculateMoney(-10);
// console.log(result);




// function checkName(name) { //problem 2
//     let endWord = ['A, y, i , e , o , u, w'];
   
    
//     return name;
// }
// const result =checkName("rakib");


function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "“Invalid Array”";
    }
       let onlyNum=[];
    for(const oneArray of array){
     let numberArray = Number(oneArray);
         if(typeof oneArray === "number" && !isNaN(numberArray) ){
            onlyNum.push(oneArray);
         }
    }
    return onlyNum;
}
const result = deleteInvalids({ num: [1, 2, 3] });
console.log(result);


// function password(obj) { //problem 4

//     const name = obj.name;
//     const birthYear = obj.birthYear;
//     const siteName = obj.siteName;
//     let user = Math.random(name + birthYear + siteName);
//     // const result = name + birthYear + siteName;
//     return user;
// }
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));



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
//                 return "“earn more”";
//             }
//             else{
//                 return saving;
//             } 
// }
// const result = monthlySavings(100, [900, 2700, 3400]);
// console.log(result);