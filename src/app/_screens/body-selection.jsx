import BackButton from "~/utils/back-button";
import { actions } from "~/utils/reducer";
import { useAppContext } from "~/utils/context";
import RenderBodies from "../_components/render-bodies";

function BodySelection() {
  const { state, dispatch } = useAppContext();

  return (
    <>
      <BackButton action={actions.CHANGE_DATA_FILLED_STATE} />
      <div className="flex flex-col md:pt-[8vh]">
        <h1>Ahora por favor, selecciona el tipo de cuerpo que crees tener</h1>
        <RenderBodies dispatch={dispatch} actions={actions} state={state} />
        {/*            <RenderBodies dispatch={dispatch} state={state} /> */}
      </div>
    </>
  );
}

export default BodySelection;
