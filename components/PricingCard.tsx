"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import Divider from "@/components/Divider";
import Model from "@/components/Model";
import useMousePosition from "@/app/utils/useMousePosition";

type PricingCardProps = {
  title?: string,
  articleNumber?: number,
  description?: string,
  currencyPrefix?: string,
  price?: number,
  unit?: string,
  modelPath?: string,
}

const PricingCard = (props: PricingCardProps) => {
  const [play, setPlay] = useState(true);
  const [userSelect, setUserSelect] = useState(true);
  const { x, y } = useMousePosition();
  const size = 150;

  let selecableClassModel = userSelect ? "cursor-grab" : "select-none cursor-grabbing";

  return (
    <div className="grid md:grid-flow-col rounded-3xl overflow-clip outline outline-1 outline-zinc-400 shadow-lg max-w-[700px]">
      {!userSelect ?
        <div onMouseUp={() => setUserSelect(true)} style={{ top: y - size / 2, left: x - size / 2 }} className="absolute h-[150px] aspect-square z-50 bg-transparent rounded-full cursor-grabbing" />
        : null}
      <div onMouseDown={() => setUserSelect(false)} className={`relative bg-zinc-100 md:h-[300px] h-[300px] aspect-square ${selecableClassModel}`}>
        <div className="absolute flex gap-3 bottom-5 right-5 z-10">
          <button onClick={() => setPlay(!play)}>
            {!play ? <Icon variant="play" fill="fill-zinc-500" /> : <Icon variant="pause" fill="fill-zinc-500" />}
          </button>
        </div>
        <Model play={play} path={props.modelPath} />
      </div>
      <div className="relative p-7 h-full md:w-[400px] w-[300px] bg-zinc-200 text-zinc-900 flex flex-col justify-between">
        <div className="flex flex-col md:gap-2 gap-3">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
            <h3 className="font-bold text-4xl">{props.title}</h3>
            <p className="md:text-sm text-xs pt-1">Art. {props.articleNumber}</p>
          </div>
          <Divider />
        </div>
        <p className="md:py-0 py-3">{props.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <h4 className="text-2xl font-bold">{props.currencyPrefix}{props.price}</h4>
            <p className="text-2xl">/</p>
            <p>{props.unit}</p>
          </div>
          <button className="bg-zinc-900 h-[50px] md:w-[100px] w-[50px] flex items-center justify-center rounded-lg">
            <Icon variant="bag" fill="fill-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingCard;