const accounts = [
  { id: 1, owner: "Иван Иванов", accountNumber: "BY001", balance: 2500, accountType: "Сберегательный", isActive: true },
  { id: 2, owner: "Анна Петрова", accountNumber: "BY002", balance: 5000, accountType: "Кредитный", isActive: true },
  { id: 3, owner: "Пётр Сидоров", accountNumber: "BY003", balance: 1200, accountType: "Сберегательный", isActive: false }
];

export async function GET() {
  return Response.json(accounts);
}