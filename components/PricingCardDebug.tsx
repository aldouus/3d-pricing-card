"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import Divider from "@/components/Divider";
import Model from "@/components/Model";
import useMousePosition from "@/app/utils/useMousePosition";

type PricingCardProps = {
  title?: string;
  articleNumber?: number;
  description?: string;
  currencyPrefix?: string;
  price?: number;
  unit?: string;
  modelPath?: string;
};

const PricingCard = (props: PricingCardProps) => {
  const [toggled, setToggled] = useState(false)
  const [play, setPlay] = useState(true);
  const [userSelect, setUserSelect] = useState(true);
  const { x, y } = useMousePosition();
  const size = 150;

  let selecableClassModel = userSelect
    ? "cursor-grab"
    : "select-none cursor-grabbing";

  let debugModeClassHover = toggled
    ? "outline-1 outline-red-500 bg-red-500"
    : null

  let debugModeClass = toggled
    ? "outline outline-1 outline-red-500"
    : null

  return (
    <div className="grid max-w-[700px] overflow-clip rounded-3xl shadow-lg outline outline-1 outline-zinc-400 md:grid-flow-col">
      <div className="absolute top-3 left-3 z-50 flex gap-3">
        <label htmlFor="debug">Debug Mode</label>
        <input onClick={() => setToggled(!toggled)} type="checkbox" name="debug" className="w-[20px] aspect-square outline-1" />
      </div>
      {!userSelect ? (
        <div
          onMouseUp={() => setUserSelect(true)}
          style={{ top: y - size / 2, left: x - size / 2 }}
          className={`absolute z-40 aspect-square h-[150px] cursor-grabbing rounded-full bg-transparent ${debugModeClassHover}`}
        />
      ) : null}
      <div
        onMouseDown={() => setUserSelect(false)}
        className={`relative aspect-square h-[300px] bg-zinc-100 md:h-[300px] ${selecableClassModel} ${debugModeClass}`}
      >
        <div className={`absolute bottom-5 right-5 z-50 flex gap-3 ${debugModeClass}`}>
          <button onClick={() => setPlay(!play)}>
            {!play ? (
              <Icon variant="play" fill="fill-zinc-500" />
            ) : (
              <Icon variant="pause" fill="fill-zinc-500" />
            )}
          </button>
        </div>
        <Model play={play} path={props.modelPath} />
      </div>
      <div className={`relative flex h-full w-[300px] flex-col justify-between bg-zinc-200 p-7 text-zinc-900 md:w-[400px] ${debugModeClass}`}>
        <div className={`flex flex-col gap-3 md:gap-2 ${debugModeClass}`}>
          <div className={`flex flex-col items-start justify-between md:flex-row md:items-center ${debugModeClass}`}>
            <h3 className={`text-4xl font-bold ${debugModeClass}`}>{props.title}</h3>
            <p className={`pt-1 text-xs md:text-sm ${debugModeClass}`}>
              Art. {props.articleNumber}
            </p>
          </div>
          <Divider />
        </div>
        <p className={`py-3 md:py-0 ${debugModeClass}`}>{props.description}</p>
        <div className={`flex items-center justify-between ${debugModeClass}`}>
          <div className={`flex items-center gap-3 ${debugModeClass}`}>
            <h4 className={`text-2xl font-bold ${debugModeClass}`}>
              {props.currencyPrefix}
              {props.price}
            </h4>
            <p className={`text-2xl ${debugModeClass}`}>/</p>
            <p>{props.unit}</p>
          </div>
          <button className={`flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-zinc-900 md:w-[100px] ${debugModeClass}`}>
            <Icon variant="bag" fill={`fill-white ${debugModeClass}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
