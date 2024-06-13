"use client";
import { useAppContext } from "~/utils/context";
import ConsentMessage from "./_screens/consent";
import UserForm from "./_screens/user-form";
import BodySelection from "./_screens/body-selection";
import FinalQuestions from "./_screens/final-questions";
import EndMessage from "./_screens/form-end";
import RenderBodies from "./_components/render-bodies";

export default function HomePage() {
  const { state } = useAppContext();
  return (
    <div className="p-4">
      {!state.agrees ? (
        <ConsentMessage />
      ) : !state.userDataFilled ? (
        <UserForm />
      ) : !state.bodySelected ? (
        <BodySelection />
      ) : !state.finalInfoAnswered ? (
        <FinalQuestions />
      ) : (
        <EndMessage />
      )}
    </div>
  );
}
