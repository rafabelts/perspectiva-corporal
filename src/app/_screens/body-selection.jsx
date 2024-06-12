import BackButton from "~/utils/back-button";

import { useAppContext } from "~/utils/context";
import { actions } from "~/utils/reducer";

function RenderBodies({ dispatch, state }) {
  const bodies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function selectBody(dispatch, state, body) {
    console.log(body);
    dispatch({ type: actions.SET_USER_BODY, payload: body });
  }

  return (
    <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2">
      {bodies.map((i) => (
        <button
          id={i}
          onClick={() => selectBody(dispatch, state, i)}
          className="h-[80vh] w-full cursor-pointer p-[110px] hover:bg-blue-400 md:h-[48vh] md:w-[48vw]"
        >
          cuerpo {i}
        </button>
      ))}
    </div>
  );
}

function BodySelection() {
  const { state, dispatch } = useAppContext();

  return (
    <>
      <BackButton action={actions.CHANGE_DATA_FILLED_STATE} />
      <div className="flex flex-col md:pt-[8vh]">
        <h1>Ahora por favor, selecciona el tipo de cuerpo que crees tener</h1>
        <RenderBodies dispatch={dispatch} state={state} />
      </div>
    </>
  );
}

export default BodySelection;
