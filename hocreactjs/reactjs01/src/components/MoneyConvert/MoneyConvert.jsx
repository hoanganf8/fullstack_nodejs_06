import { useState } from "react";
import EurToUsd from "./EurToUsd";
import UsdToEur from "./UsdToEur";

export default function MoneyConvert() {
  const [eur, setEur] = useState(0);
  const [usd, setUsd] = useState(0);
  const getValue = async (from, to, amount) => {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    );
    const { rates } = await response.json();
    if (rates.USD) {
      setUsd(rates.USD);
    } else {
      setEur(rates.EUR);
    }
  };
  const handleChangeEur = (e) => {
    setEur(e.target.value);
    getValue("EUR", "USD", e.target.value);
  };
  const handleChangeUsd = (e) => {
    setUsd(e.target.value);
    getValue("USD", "EUR", e.target.value);
  };
  return (
    <div>
      <EurToUsd onChange={handleChangeEur} eur={eur} />
      <UsdToEur onChange={handleChangeUsd} usd={usd} />
    </div>
  );
}

//React Ref
