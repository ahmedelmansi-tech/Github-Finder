import loadingSpinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <img
        width={200}
        src={loadingSpinner}
        alt="Loading..."
        className="sm:w-150"
      />
    </div>
  );
};

export default Spinner;
