function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
};

function SavingsAccount(accountNumber, balance, minBalance) {
    BankAccount.call(this, accountNumber, balance);
    this.minBalance = minBalance;
}

Object.setPrototypeOf(SavingsAccount.prototype,BankAccount.prototype);
SavingsAccount.prototype.withdraw = function(amount) {
    if (this.balance - amount >= this.minBalance) {
        this.balance -= amount;
        console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
    } else {
        console.log(`Cannot withdraw: Minimum balance of ${this.minBalance} must be maintained.`);
    }
};

// Instance of SavingsAccount
const savingsAccount = new SavingsAccount("123456", 1000, 100);

savingsAccount.deposit(200); // Deposited: 200. New balance: 1200
savingsAccount.withdraw(500); // Withdrawn: 500. New balance: 700
savingsAccount.withdraw(650); // Cannot withdraw: Minimum balance of 100 must be maintained.