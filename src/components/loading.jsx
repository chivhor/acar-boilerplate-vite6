import logo from "@/assets/images/logo.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={logo} alt="Logo" className="w-40 h-40 p-[10px]" />
          <div className="absolute inset-0 rounded-full border-[6px] border-white/20 border-t-primary/80 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

