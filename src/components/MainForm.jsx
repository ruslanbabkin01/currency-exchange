export const MainForm = ({ setValue = () => {} }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = form.elements.cur.value;
    setValue(data);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="cur" />
      </label>
      <button type="submit">Currency Exchange</button>
    </form>
  );
};
