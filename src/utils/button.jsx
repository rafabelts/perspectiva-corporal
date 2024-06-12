"use client";

function Button({ onClick }) {
  return (
    <div className="mt-auto flex justify-end">
      <button
        className="
        bg-buttonBg
        hover:bg-buttonBg/90
        mt-[10vh]
        rounded-lg
        px-10
        py-2
        text-base
        font-bold
        text-white
        drop-shadow-md
       "
        onClick={onClick}
      >
        Continuar
      </button>
    </div>
  );
}
export default Button;
