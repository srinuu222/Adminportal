// Check if the user is logged in before loading the page
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
}

// Sample client data (for demo purposes)
const clientsData = [
    { name: 'John Doe', joinDate: '2023-01-01', mobile: '123-456-7890', plan: 'Monthly', moneyPaid: 50, active: true },
    { name: 'Jane Smith', joinDate: '2023-03-15', mobile: '987-654-3210', plan: 'Annual', moneyPaid: 500, active: false },
    { name: 'Alice Johnson', joinDate: '2023-05-20', mobile: '555-123-4567', plan: 'Quarterly', moneyPaid: 120, active: true },
];

// Populate the dashboard stats
function loadDashboardData() {
    const totalClients = clientsData.length;
    const newClients = clientsData.filter(client => new Date(client.joinDate).getFullYear() === new Date().getFullYear()).length;
    const activeClients = clientsData.filter(client => client.active).length;
    const membershipExpiry = clientsData.filter(client => !client.active).length;

    document.getElementById('totalClients').textContent = totalClients;
    document.getElementById('newClients').textContent = newClients;
    document.getElementById('activeClients').textContent = activeClients;
    document.getElementById('membershipExpiry').textContent = membershipExpiry;
}

// Populate the clients table
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

// Edit client
function editClient(index) {
    const client = clientsData[index];
    const name = prompt("Edit client name:", client.name);
    if (name) {
        client.name = name;
        loadClientList();
    }
}
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
}

// Delete client
function deleteClient(index) {
    if (confirm("Are you sure you want to delete this client?")) {
        clientsData.splice(index, 1);
        loadClientList();
    }
}

// Initial load
loadDashboardData();
loadClientList();
