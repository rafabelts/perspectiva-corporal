import { useState } from "react";

function DropDown({ label, placeholder, option, setOption, options }) {
  const [show_elements, setShowElements] = useState(false);

  function showElements() {
    setShowElements(!show_elements);
  }

  function chooseOption(choosedOption) {
    setOption(choosedOption);
    setShowElements(!show_elements);
  }

  return (
    <div className="flex w-full flex-col">
      <div className="relative flex flex-col">
        <label className="text-labelColor text-text pb-1">{label}</label>
        <button
          onClick={() => showElements()}
          type="button"
          className="text-inputColor hover:ring-hoverInput ring-inputBorder relative w-full rounded-md py-1 text-left text-base shadow-sm ring-1 hover:ring-2"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <span className="ml-2 block truncate">
              {option == "" ? placeholder : option}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              className="text-labelColor h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {show_elements ? (
          <ul
            className="text-inputColor ring-inputBorder/20 absolute z-10 mt-[75px] max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 sm:text-sm"
            tabindex="0"
            role="listbox"
          >
            {options.map((option) => (
              <li
                onClick={() => chooseOption(option)}
                className="relative cursor-pointer select-none py-2 hover:bg-blue-100"
                id={`listbox-option-${option}`}
                role="option"
                aria-selected="false"
              >
                <div className="flex items-center">
                  <span className="ml-2 block truncate font-normal hover:font-bold">
                    {option}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default DropDown;
