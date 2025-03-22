// Create a button dynamically
window.onload = function() {
    function calculateTotal() {
        var prices = document.querySelectorAll('.price'); // Select all price elements
        var total = 0;

        // Loop through price elements and sum them up
        for (var i = 0; i < prices.length; i++) {
            total += parseFloat(prices[i].innerText); // Convert text to number and add
        }

        var table = document.querySelector('table'); // Get the table
        var existingTotalRow = document.getElementById("totalRow"); // Check if total row exists

        // If a total row already exists, remove it before adding a new one
        if (existingTotalRow) {
            existingTotalRow.remove();
        }

        // Create new row for total price
        var row = table.insertRow(-1); // Insert at the end
        row.id = "totalRow"; // Assign ID for easy reference

        var cell = row.insertCell(0); // Insert new cell
        cell.colSpan = "2"; // Make cell span two columns
        cell.style.fontWeight = "bold"; // Make text bold
        cell.style.textAlign = "center"; // Center the text
        cell.innerText = 'Total Price: ₹' + total; // Set total price in the cell
    }

    calculateTotal(); // Call function on page load
};


