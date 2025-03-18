// Create a button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class "price"
    const prices = document.querySelectorAll(".price");
    let total = 0;

    // Loop through each price element and sum values
    prices.forEach(price => {
        total += parseFloat(price.textContent); // Convert text to number
    });

    // Check if the total row already exists, if yes, remove it
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow"; // Give an ID to avoid duplicate rows

    const totalLabel = document.createElement("td");
    const totalValue = document.createElement("td");

    // Set text content for total row
    totalLabel.textContent = "Total";
    totalValue.textContent = `Rs ${total.toFixed(2)}`;

    // Apply styles
    totalLabel.style.fontWeight = "bold";
    totalValue.style.fontWeight = "bold";

    // Append cells to row
    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalValue);

    // Append row to the table
    document.querySelector("table").appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);




