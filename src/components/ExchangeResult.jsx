export const ExchangeResult = ({ result, requestedExchange }) => {
  return (
    <div className="text-center text-lg">
      {requestedExchange}: {result.toFixed(2)}
    </div>
  );
};
