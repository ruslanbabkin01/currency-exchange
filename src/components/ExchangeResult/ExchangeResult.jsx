const ExchangeResult = ({ result, requestedExchange }) => {
  return (
    <div>
      {requestedExchange}: {result}
    </div>
  );
};

export default ExchangeResult;
