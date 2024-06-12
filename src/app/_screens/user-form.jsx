import { useState } from "react";
import DropDown from "../_components/dropdown";
import Input from "../_components/input";
import Button from "~/utils/button";
import { useAppContext } from "~/utils/context";
import { actions } from "~/utils/reducer";
import BackButton from "~/utils/back-button";

function UserForm() {
  const { dispatch } = useAppContext();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  function onChangeFunc(set, e, regex) {
    set(e.target.value.replace(regex, ""));
  }

  function onSubmit(e) {
    e.preventDefault();

    const userData = {
      name: name,
      gender: gender,
      height: height,
      weight: weight,
    };

    dispatch({ type: actions.SET_USER_DATA, payload: userData });
  }

  const dropDownOptions = ["Femenino", "Masculino"];

  return (
    <>
      <BackButton action={actions.CHANGE_USER_AGREES_STATE} />
      <div className="flex flex-col md:pt-[25vh]">
        <h1 className="mb-5 text-3xl font-bold">Datos basicos</h1>
        <form onSubmit={onSubmit} className="flex flex-col">
          <div className="flex flex-col gap-x-10 gap-y-10 md:grid md:grid-cols-2">
            <Input
              label="Nombre"
              type="text"
              id="name"
              input="text"
              onChange={(e) => onChangeFunc(setName, e, /[^a-zA-Z\s]/g)}
            />
            <DropDown
              label={"Género"}
              placeholder={"Seleccione su género"}
              option={gender}
              setOption={setGender}
              options={dropDownOptions}
            />
            <Input
              label="Altura en centímetros"
              type="numeric"
              id="height"
              input="numeric"
              onChange={(e) => onChangeFunc(setHeight, e, /[^0-9.]/g)}
            />
            <Input
              label="Peso en kilogramos"
              type="numeric"
              id="weight"
              input="numeric"
              onChange={(e) => onChangeFunc(setWeight, e, /[^0-9.]/g)}
            />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
}

export default UserForm;
