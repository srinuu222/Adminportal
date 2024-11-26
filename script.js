// Mock Data for Trainers and Clients
const trainers = [
  { name: "Trainer 1", specialization: "Strength Training", status: "Active" },
  { name: "Trainer 2", specialization: "Yoga", status: "Inactive" },
  { name: "Trainer 3", specialization: "Cardio", status: "Active" },
];

const clients = [
  { name: "Client 1", status: "Active" },
  { name: "Client 2", status: "Inactive" },
  { name: "Client 3", status: "Active" },
];

// Update Dashboard
document.getElementById("totalTrainers").innerText = trainers.length;
document.getElementById("totalClients").innerText = clients.length;
document.getElementById("activeSessions").innerText = `${Math.floor(
  Math.random() * 10
)} Active Sessions`; // Mock active sessions

// Display Trainers in Table
const trainerTable = document.getElementById("trainerTable");
trainers.forEach((trainer) => {
  const row = document.createElement("tr");
  row.innerHTML = `
                <td>${trainer.name}</td>
                <td>${trainer.specialization}</td>
                <td>${trainer.status}</td>
                <td><button>Edit</button> <button>Delete</button></td>
            `;
  trainerTable.appendChild(row);
});

