import AccountCard from "../components/AccountCard";

type Account = {
  id: number;
  owner: string;
  accountNumber: string;
  balance: number;
  accountType: string;
  isActive: boolean; // Добавили статус
};

async function getAccounts(): Promise<Account[]> {
  const response = await fetch("http://localhost:3000/api/accounts", {
    cache: "no-store"
  });
  return response.json();
}

export default async function Accounts() {
  const accounts = await getAccounts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Банковские счета</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        (Данные получены из API)
      </p>
      
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          owner={account.owner}
          accountNumber={account.accountNumber}
          balance={account.balance}
          accountType={account.accountType}
          isActive={account.isActive} // Передаем статус
        />
      ))}
    </main>
  );
}