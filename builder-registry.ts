"use client";
import { builder, Builder } from "@builder.io/react";

import PricingCardDebug from "./components/PricingCardDebug";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(PricingCardDebug, {
  name: "PricingCardDebug",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "articleNumber",
      type: "number",
    },
    {
      name: "currencyPrefix",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "modelPath",
      type: "string",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "unit",
      type: "string",
    },
  ],
});
