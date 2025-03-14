import { X } from "lucide-react";
import { useVisibilityModal } from "./useVisibilityModal";

const ModalCloseButton = () => {
  const { setVisibility } = useVisibilityModal();
  return (
    <button
      onClick={() => setVisibility(false)}
      className="group cursor-pointer [&>svg]:w-5 absolute right-0 top-0"
    >
      <X className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500 " />
    </button>
  );
};

export { ModalCloseButton };
