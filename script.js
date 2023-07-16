
var expensesList = document.getElementById("expenses");


function addExpense() {
    
    var amountInput = document.getElementById("amount");
    var categoryInput = document.getElementById("category");
    var amount = parseFloat(amountInput.value);
    var category = categoryInput.value;

    
    if (isNaN(amount) || amount <= 0 || category === "") {
        alert("Please enter a valid amount and category.");
        return;
    }

    
    var expense = {
        amount: amount,
        category: category
    };

    
    var expenseItem = document.createElement("li");
    expenseItem.innerHTML = createExpenseItemHTML(expense);

    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        expenseItem.remove();
        saveExpensesToLocalStorage();
    };
    expenseItem.appendChild(deleteButton);

    
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        var newAmount = prompt("Enter the new amount:", amount.toFixed(2));
        if (newAmount !== null) {
            var newCategory = prompt("Enter the new category:", category);
            if (newCategory !== null) {
                expense.amount = parseFloat(newAmount);
                expense.category = newCategory;
                expenseItem.innerHTML = createExpenseItemHTML(expense);
                expenseItem.appendChild(deleteButton);
                expenseItem.appendChild(editButton);
                saveExpensesToLocalStorage();
            }
        }
    };
    expenseItem.appendChild(editButton);

    
    expensesList.appendChild(expenseItem);

    
    amountInput.value = "";
    categoryInput.value = "";

    
    saveExpensesToLocalStorage();
}


function createExpenseItemHTML(expense) {
    return "Amount: $" + expense.amount.toFixed(2) + " | Category: " + expense.category;
}


function saveExpensesToLocalStorage() {
    var expenses = [];
    var expenseItems = expensesList.getElementsByTagName("li");
    for (var i = 0; i < expenseItems.length; i++) {
        var expenseText = expenseItems[i].innerHTML;
        expenses.push(expenseText);
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
}


function loadExpensesFromLocalStorage() {
    var expenses = localStorage.getItem("expenses");
    if (expenses) {
        expenses = JSON.parse(expenses);
        for (var i = 0; i < expenses.length; i++) {
            var expenseItem = document.createElement("li");
            expenseItem.innerHTML = expenses[i];
            expensesList.appendChild(expenseItem);
        }
    }
}


window.onload = function() {
    loadExpensesFromLocalStorage();
};
