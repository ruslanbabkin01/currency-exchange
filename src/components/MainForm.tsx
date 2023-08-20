interface MainFormProps {
  setValue: (data: string) => void;
}

export const MainForm: React.FC<MainFormProps> = ({ setValue }) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = (form.elements.namedItem('cur') as HTMLInputElement).value;
    setValue(data);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="mx-auto flex items-center  w-full bg-white rounded truncate max-w-lg"
    >
      <input
        type="text"
        name="cur"
        placeholder="please entry text as - 15 USD in UAH"
        className="my-2 py-1 inline-block w-full  px-1 border-2 border-black rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white justify-center items-center p-2 m-2 rounded-md ease-out duration-300 hover:bg-yellow-500"
      >
        Exchange
      </button>
    </form>
  );
};
