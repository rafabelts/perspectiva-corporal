"use client";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Man1 } from "./bodies-men/Hombre-1";
import { Man2 } from "./bodies-men/Hombre-2";
import { Man3 } from "./bodies-men/Hombre-3";
import { Man4 } from "./bodies-men/Hombre-4";
import { Man5 } from "./bodies-men/Hombre-5";
import { Man6 } from "./bodies-men/Hombre-6";
import { Man7 } from "./bodies-men/Hombre-7";
import { Man8 } from "./bodies-men/Hombre-8";
import { Man9 } from "./bodies-men/Hombre-9";
import { Man10 } from "./bodies-men/Hombre-10";
import { Man11 } from "./bodies-men/Hombre-11";
import { Man12 } from "./bodies-men/Hombre-12";
import { Man13 } from "./bodies-men/Hombre-13";
import { useState } from "react";
import Button from "~/utils/button";

export default function RenderBodies({ dispatch, state, actions }) {
  const [bodySelected, setBody] = useState(null);

  const man_bodies = [
    { id: 1, model: <Man1 /> },
    { id: 2, model: <Man2 /> },
    { id: 3, model: <Man3 /> },
    { id: 4, model: <Man4 /> },
    { id: 5, model: <Man5 /> },
    { id: 6, model: <Man6 /> },
    { id: 7, model: <Man7 /> },
    { id: 8, model: <Man8 /> },
    { id: 9, model: <Man9 /> },
    { id: 10, model: <Man10 /> },
    { id: 11, model: <Man11 /> },
    { id: 12, model: <Man12 /> },
    { id: 13, model: <Man13 /> },
  ];

  function selectBody(dispatch, state, body) {
    console.log(body);
    dispatch({ type: actions.SET_USER_BODY, payload: body });
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2">
        {man_bodies.map((body, i) => (
          <div
            onClick={() => setBody(body.id)}
            key={1}
            className={`h-[40vh] w-[40vw] cursor-pointer ${bodySelected == body.id ? "border-2 border-blue-500" : ""}`}
          >
            <Canvas>
              <OrbitControls />
              <Environment preset="studio" />
              {body.model}
            </Canvas>
          </div>
        ))}
      </div>
      {bodySelected == null ? (
        <></>
      ) : (
        <Button onClick={() => selectBody(dispatch, state, bodySelected)} />
      )}
    </div>
  );
}
