import { useState } from "react";
import BackButton from "~/utils/back-button";
import Button from "~/utils/button";
import { useAppContext } from "~/utils/context";
import { actions } from "~/utils/reducer";
import DropDown from "../_components/dropdown";
import { v4 as uuidv4 } from "uuid";
import { addUserData } from "~/server/queries";

function FinalQuestions() {
  const [issue, setIssue] = useState("");
  const [inTreatment, setInTreatment] = useState("");

  const issuesDropDown = [
    "Anorexia nerviosa",
    "Bulimia nerviosa",
    "Dismorfia muscular (vigorexia)",
    "Transtorno por atracón",
    "Ortorexia",
    "Otra",
    "No, ninguna",
  ];

  const inTreatmentAnswers = ["Sí", "No"];

  const { state, dispatch } = useAppContext();

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({
      type: actions.SET_FINAL_INFO,
      payload: { issue: issue, inTreatment: inTreatment },
    });

    const userData = {
      id: uuidv4(),
      ...state.userData,
      issue: issue,
      inTreatment: inTreatment,
    };

    await addUserData(userData);
  }
  return (
    <>
      <BackButton action={actions.CHANGE_BODY_SELECTED_STATE} />
      <div className="flex flex-col md:pt-[25vh]">
        <h1 className="mb-5 text-3xl font-bold">Para finalizar...</h1>
        <form onSubmit={onSubmit} className="flex flex-col">
          <div className="flex flex-col gap-x-10 gap-y-10 md:grid md:grid-cols-2">
            <DropDown
              label={"¿Tiene alguna enfermedad de salud mental diagnosticada?"}
              placeholder={"Seleccione la enfermedad"}
              option={issue}
              setOption={setIssue}
              options={issuesDropDown}
            />
            <DropDown
              label={"¿Se encuentra en tratamiento para la obesidad?"}
              placeholder={"Seleccione una respuesta"}
              option={inTreatment}
              setOption={setInTreatment}
              options={inTreatmentAnswers}
            />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
}

export default FinalQuestions;
