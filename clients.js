// Sample data for demo purposes
let clientsData = [
    { name: 'John Doe', joinDate: '2023-01-01', mobile: '123-456-7890', plan: 'Monthly', moneyPaid: 50, active: true },
    { name: 'Jane Smith', joinDate: '2023-03-15', mobile: '987-654-3210', plan: 'Annual', moneyPaid: 500, active: false },
    { name: 'Alice Johnson', joinDate: '2023-05-20', mobile: '555-123-4567', plan: 'Quarterly', moneyPaid: 120, active: true }
];

// Load the client data and display in table
function loadClientList() {
    const clientTable = document.getElementById('clientData');
    clientTable.innerHTML = '';

    clientsData.forEach((client, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.joinDate}</td>
            <td>${client.mobile}</td>
            <td>${client.plan}</td>
            <td>$${client.moneyPaid}</td>
            <td>${client.active ? 'Active' : 'Inactive'}</td>
            <td>
                <button onclick="editClient(${index})">Edit</button>
                <button onclick="deleteClient(${index})">Delete</button>
            </td>
        `;
        clientTable.appendChild(row);
    });
}

// Handle adding a new client
document.getElementById('addClientForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('clientName').value;
    const joinDate = document.getElementById('joinDate').value;
    const mobile = document.getElementById('clientMobile').value;
    const plan = document.getElementById('clientPlan').value;
    const moneyPaid = parseFloat(document.getElementById('moneyPaid').value);
    const activeStatus = document.getElementById('activeStatus').checked;

    const newClient = {
        name: name,
        joinDate: joinDate,
        mobile: mobile,
        plan: plan,
        moneyPaid: moneyPaid,
        active: activeStatus
    };

    clientsData.push(newClient);
    loadClientList();  // Reload the client list
    clearForm(); // Clear the form after adding
});
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
}

// Edit a client's details
function editClient(index) {
    const client = clientsData[index];
    const name = prompt("Edit client name:", client.name);
    if (name) {
        client.name = name;
        loadClientList();
    }
}

// Delete a client
function deleteClient(index) {
    if (confirm("Are you sure you want to delete this client?")) {
        clientsData.splice(index, 1);
        loadClientList();
    }
}

// Clear the form after adding a client
function clearForm() {
    document.getElementById('clientName').value = '';
    document.getElementById('joinDate').value = '';
    document.getElementById('clientMobile').value = '';
    document.getElementById('clientPlan').value = '';
    document.getElementById('moneyPaid').value = '';
    document.getElementById('activeStatus').checked = false;
}

// Initial load of client data
loadClientList();
