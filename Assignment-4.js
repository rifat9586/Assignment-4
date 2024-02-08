// function calculateMoney(ticketSale) { //PROBLEM 1 -
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




// function checkName(name) { //PROBLEM 2 -
//     if (typeof name !== "string") {
//         return "invalid";
//     }
//     const lastChar = name[name.length - 1].toLowerCase();

//     const checkName = ["a", "y", "i", "e", "o", "u", "w"];

//     if (checkName.includes(lastChar)) {
//         return "Good Name";
//     } else {
//         return "Bad Name";
//     }
// }
// const result = checkName("jony");
// console.log(result);


// function deleteInvalids(array) { //problem 3 -
//     if(!Array.isArray(array)){
//         return "“Invalid Array”";
//     }
//        let onlyNum=[];
//     for(const oneArray of array){
//      let numberArray = Number(oneArray);
//          if(typeof oneArray === "number" && !isNaN(numberArray) ){
//             onlyNum.push(oneArray);
//          }
//     }
//     return onlyNum;
// }
// const result = deleteInvalids({ num: [1, 2, 3] });
// console.log(result);


function password(obj) { //problem 4
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
        let objValu=" ";
    if (typeof name === 'string' && typeof name === 'string' && typeof birthYear === 'number'){
        let first=siteName.charAt(0)
        // console.log(first);
        let firstWord=first.toUpperCase();
        // console.log(firstWord);
        let ram=siteName.slice(1);
        // console.log(ram);
        let firstUp = first.toUpperCase() + siteName.slice(1);
        // console.log(firstUp)
        if (String(birthYear).length !== 4){
            return "invelut";
        }
        else{
            objValu = firstUp + "#" + name + "@" + birthYear;
        }
   }
      
    return objValu;
   
}
console.log(password({ name: "toky" , birthYear: 2001, siteName: "Facebook" }));
// { name: "kolimuddin", birthYear: 1999, siteName: "google" }
// { name: "rahat", birthYear: 2002, siteName: "Facebook" }



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