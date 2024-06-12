function Input({ label, type, id, input, onChange }) {
  return (
    <div className="flex w-full flex-col">
      <label className="text-labelColor text-text pb-1"> {label} </label>
      <input
        required
        type={type}
        id={id}
        className="
        text-inputColor
        border-inputBorder
        hover:border-hoverInput
        focus:border-hoverInput
        rounded-lg
        border
        bg-transparent
        px-2
        py-1
        text-base
        hover:border-2
        focus:border-2
        focus:outline-none"
        inputMode={input}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
