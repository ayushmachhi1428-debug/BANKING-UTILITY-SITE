// ==========================================
// FUNCTION 1: Calculate Interest
// ==========================================

function calculateInterest(amount, rate) {

    let interest = amount * rate / 100;

    return interest;
}


// ==========================================
// FUNCTION 2: Calculate Deposit
// ==========================================

function calculateDeposit(balance, depositAmount) {

    return balance + depositAmount;
}


// ==========================================
// FUNCTION 3: Calculate Withdrawal
// ==========================================

function calculateWithdrawal(balance, withdrawalAmount) {

    if (balance >= withdrawalAmount) {

        return balance - withdrawalAmount;

    } else {

        return balance;
    }
}


// ==========================================
// MAIN BANKING FUNCTION
// ==========================================

function startBanking() {


    // ==========================================
    // 1. USER INPUT
    // ==========================================

    let accountHolder =
        document.getElementById("name").value.trim();

    let balance =
        Number(document.getElementById("balance").value);

    let deposit =
        Number(document.getElementById("deposit").value);

    let withdrawal =
        Number(document.getElementById("withdrawal").value);


    // ==========================================
    // 2. INPUT VALIDATION
    // ==========================================

    // Check account holder name
    if (accountHolder === "") {

        document.getElementById("result").innerHTML =
            "Please enter the account holder name.";

        return;
    }


    // Check valid numbers
    if (isNaN(balance) ||
        isNaN(deposit) ||
        isNaN(withdrawal)) {

        document.getElementById("result").innerHTML =
            "Please enter valid numbers.";

        return;
    }


    // Check negative values
    if (balance < 0 ||
        deposit < 0 ||
        withdrawal < 0) {

        document.getElementById("result").innerHTML =
            "Balance and transaction amounts cannot be negative.";

        return;
    }


    // Check withdrawal amount
    if (withdrawal > balance + deposit) {

        document.getElementById("result").innerHTML =
            "Withdrawal amount is greater than the available balance.";

        return;
    }


    // ==========================================
    // 3. VARIABLES
    // ==========================================

    var accountType = "Savings";

    const bankName = "CHARUSAT Bank";

    let accountActive = true;


    // ==========================================
    // 4. ARITHMETIC OPERATIONS
    // ==========================================

    let afterDeposit =
        calculateDeposit(balance, deposit);

    let afterWithdrawal =
        calculateWithdrawal(afterDeposit, withdrawal);


    // ==========================================
    // 5. RELATIONAL OPERATOR
    // ==========================================

    let hasMinimumBalance =
        afterWithdrawal >= 1000;


    // ==========================================
    // 6. LOGICAL OPERATOR
    // ==========================================

    let canWithdraw =
        accountActive && hasMinimumBalance;


    // ==========================================
    // 7. ASSIGNMENT OPERATOR
    // ==========================================

    let finalBalance =
        afterWithdrawal;

    finalBalance += 500;


    // ==========================================
    // 8. TERNARY / CONDITIONAL OPERATOR
    // ==========================================

    let balanceStatus =
        balance >= 1000
            ? "Minimum balance maintained"
            : "Minimum balance not maintained";


    // ==========================================
    // 9. IF STATEMENT
    // ==========================================

    let accountMessage = "";

    if (balance > 0) {

        accountMessage =
            "Account has a valid balance.";
    }


    // ==========================================
    // 10. IF-ELSE STATEMENT
    // ==========================================

    let balanceMessage = "";

    if (balance >= 1000) {

        balanceMessage =
            "Minimum balance requirement is satisfied.";

    } else {

        balanceMessage =
            "Minimum balance requirement is not satisfied.";
    }


    // ==========================================
    // 11. NESTED IF STATEMENT
    // ==========================================

    let withdrawalMessage = "";

    if (accountActive) {

        if (balance >= withdrawal) {

            withdrawalMessage =
                "Withdrawal can be processed.";

        } else {

            withdrawalMessage =
                "Insufficient balance for withdrawal.";
        }

    } else {

        withdrawalMessage =
            "Account is inactive.";
    }


    // ==========================================
    // 12. SWITCH STATEMENT
    // ==========================================

    let selectedAccount = "";

    switch (accountType) {

        case "Savings":

            selectedAccount =
                "You have selected a Savings Account.";

            break;


        case "Current":

            selectedAccount =
                "You have selected a Current Account.";

            break;


        case "Salary":

            selectedAccount =
                "You have selected a Salary Account.";

            break;


        default:

            selectedAccount =
                "Unknown account type.";
    }


    // ==========================================
    // 13. FOR LOOP
    // ==========================================

    let interestRate = 5;

    let interestTable = "";

    for (let year = 1; year <= 3; year++) {

        let interest =
            calculateInterest(balance, interestRate);

        interestTable +=
            "Year " + year +
            " - Interest: ₹" + interest +
            "<br>";
    }


    // ==========================================
    // 14. WHILE LOOP
    // ==========================================

    let count = 1;

    let whileMessage = "";

    while (count <= 3) {

        whileMessage +=
            "Account summary " +
            count +
            " generated.<br>";

        count++;
    }


    // ==========================================
    // 15. DO-WHILE LOOP
    // ==========================================

    let transactionNumber = 1;

    let transactionMessage = "";

    do {

        transactionMessage +=
            "Transaction " +
            transactionNumber +
            " checked.<br>";

        transactionNumber++;

    } while (transactionNumber <= 3);


    // ==========================================
    // 16. DISPLAY OUTPUT
    // ==========================================

    document.getElementById("result").innerHTML =

        "Bank: " + bankName + "<br>" +

        "Account Holder: " +
        accountHolder + "<br>" +

        "Account Type: " +
        accountType + "<br><br>" +

        "Initial Balance: ₹" +
        balance + "<br>" +

        "Deposit: ₹" +
        deposit + "<br>" +

        "Balance after Deposit: ₹" +
        afterDeposit + "<br>" +

        "Withdrawal: ₹" +
        withdrawal + "<br>" +

        "Balance after Withdrawal: ₹" +
        afterWithdrawal + "<br>" +

        "Minimum Balance Maintained: " +
        hasMinimumBalance + "<br>" +

        "Balance Status: " +
        balanceStatus + "<br>" +

        "Can Withdraw: " +
        canWithdraw + "<br>" +

        "Final Balance: ₹" +
        finalBalance + "<br><br>" +

        "Account Check: " +
        accountMessage + "<br>" +

        "Balance Check: " +
        balanceMessage + "<br>" +

        "Withdrawal Check: " +
        withdrawalMessage + "<br>" +

        "Account Selection: " +
        selectedAccount + "<br><br>" +

        "<b>Interest Table (For Loop)</b><br>" +

        interestTable + "<br>" +

        "<b>Account Summary (While Loop)</b><br>" +

        whileMessage + "<br>" +

        "<b>Transaction Check (Do-While Loop)</b><br>" +

        transactionMessage;
}
