 // access >> modify



 class BankAccount {
    public readonly userId : number; 
    public userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance (balance: number){
        this.userBalance = this.userBalance + balance;
    }
 }

 class StudentBankAccount extends BankAccount{

 }

 const nakibAccount = new BankAccount(111, "Nakib", 3000)



 nakibAccount.addBalance(111)

 console.log(nakibAccount);
 