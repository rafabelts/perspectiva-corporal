import Button from "~/utils/button";
import { useAppContext } from "~/utils/context";
import { actions } from "~/utils/reducer";
function ConsentMessage() {
  const { dispatch } = useAppContext();
  function userAgrees() {
    dispatch({ type: actions.CHANGE_USER_AGREES_STATE, payload: true });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Mensaje de consentimiento</h1>
      <p className="text-balance">Lorem impsum</p>
      <Button onClick={() => userAgrees()}>Aceptar</Button>
    </div>
  );
}

export default ConsentMessage;
