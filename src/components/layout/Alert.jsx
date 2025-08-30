import { useContext } from "react";
import AlertContext from "../../context/alertContext/AlertContext";
import { FaBlind } from "react-icons/fa";
const Alert = () => {
  const { state } = useContext(AlertContext);

  return (
    state !== null && (
      <div className="flex align-middle mb-3 pl-2">
        <FaBlind className="mr-1.5 rounded-2xl text-2xl flex justify-center items-center" />{" "}
        <p className="tracking-wide">{state.msg}</p>
      </div>
    )
  );
};

export default Alert;
