type AccountCardProps = {
  owner: string;
  accountNumber: string;
  balance: number;
  accountType: string;
  isActive: boolean; // Добавили статус
};

export default function AccountCard({ owner, accountNumber, balance, accountType, isActive }: AccountCardProps) {
  return (
    <article style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h2>{owner}</h2>
      <p>Номер счёта: {accountNumber}</p>
      <p>Баланс: <strong>{balance} BYN</strong></p>
      <p>Тип: {accountType}</p>
      
      {/* Статус счета */}
      <p>
        Статус: {isActive ? 
          <span style={{ color: 'green', fontWeight: 'bold' }}>Активен</span> : 
          <span style={{ color: 'red', fontWeight: 'bold' }}>Заблокирован</span>
        }
      </p>
      
      <button style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
        Подробнее
      </button>
    </article>
  );
}