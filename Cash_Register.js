function StaffMember(name,discountPercent){ //Constructor of the class StaffMember, giving each staff member a discount in percent
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5); //creation of objects of the class StaffMember
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Bernard", 20);

var cashRegister = {    //creation of the object cashRegister, having 2 properties, total and lastTransactionAmount
    total:0,
    lastTransactionAmount: 0,
    
    add: function(itemCost){    //method to add an itemcost, if total is undefined, then total = 0
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    
    scan: function(item,quantity){  //method to scan an item, linking any item to its itemCost
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    
    voidLastTransaction: function(){    //method to remove the last transaction (itemCost*quantity)
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee){ //method to apply the discount of an employee
        this.total -= this.total * employee.discountPercent / 100;
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me)

// Show the total bill
console.log('Your bill is '+cashRegister.total);
