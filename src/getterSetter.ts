// getter 
// setter



 class BankAccount {
    public readonly userId : number; 
    public userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // addBalance (balance: number){
    //     this.userBalance = this.userBalance + balance;
    // }

    // setter user kore korte chai

    set addBalance (amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    //get korbo
    // getBalance () {
    //     return this.userBalance;
    // }

    // getter user kore get korte chai

    get getBalance (){
        return this.userBalance;
    }
 }

 class StudentBankAccount extends BankAccount{

 }

 const nakibAccount = new BankAccount(111, "Nakib", 3000)

//  nakibAccount.addBalance(111)

//  console.log(nakibAccount.getBalance());

//  nakibAccount.getBalance


nakibAccount.addBalance = 10000;

 