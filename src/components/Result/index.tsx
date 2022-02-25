const Result = ({ value }: { value: string }) => {
  return (
    <div className="row" data-testid="result">
      <div className="col-8 offset-2 result">{value}</div>
    </div>
  );
};

export default Result;
