function calculateMoney(ticketSale) {
    let DarwanCosts = 500;
    let StaffLunchCosts = 50;
    let TotalStaff = 8;
    let ticketPrice = 120;
       let totalTicketPrice = ticketPrice * ticketSale;
       let totalCosts =DarwanCosts+ (StaffLunchCosts * TotalStaff);
    if(ticketSale<0){
        return "Invalid Number"
    }
    let costs = totalTicketPrice - totalCosts;
       return costs;
}
const result = calculateMoney(0);
console.log(result);



