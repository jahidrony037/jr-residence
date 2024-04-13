import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-min-[calc(100vh-219px)] flex flex-col justify-center items-center">
      <div className="mt-40">
        <ScaleLoader color="#267188" size={40} />
      </div>
    </div>
  );
};

export default Loader;
