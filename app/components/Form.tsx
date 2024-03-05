"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Form() {
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacters = "0123456789";
  const symbolCharacters = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

  const [passwordString, setPasswordString] = useState(lowercaseCharacters);
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [result, setResult] = useState("Generated Password Goes Here");

  const handleLength = (event: any) => {
    setLength(event.target.value);
  };
  const handleUppercaseChange = (event: any) => {
    setUppercase(event.target.checked);
  };
  const handleNumbersChange = (event: any) => {
    setNumbers(event.target.checked);
  };
  const handleSymbolsChange = (event: any) => {
    setSymbols(event.target.checked);
  };

  // function passwordGeneratorFunction(string: string) {
  //   let resultString = "";
  //   for (let i = 0; i < length; i++) {
  //     resultString += string.charAt(Math.floor(Math.random() * string.length));
  //   }
  //   return resultString;
  // }

  useEffect(() => {
    if (!uppercase && !numbers && !symbols) {
      setPasswordString(lowercaseCharacters);
    } else if (uppercase && !numbers && !symbols) {
      setPasswordString(lowercaseCharacters + uppercaseCharacters);
    } else if (!uppercase && numbers && !symbols) {
      setPasswordString(lowercaseCharacters + numberCharacters);
    } else if (!uppercase && !numbers && symbols) {
      setPasswordString(lowercaseCharacters + symbolCharacters);
    } else if (uppercase && numbers && !symbols) {
      setPasswordString(
        lowercaseCharacters + uppercaseCharacters + numberCharacters
      );
    } else if (uppercase && !numbers && symbols) {
      setPasswordString(
        lowercaseCharacters + uppercaseCharacters + symbolCharacters
      );
    } else if (!uppercase && numbers && symbols) {
      setPasswordString(
        lowercaseCharacters + numberCharacters + symbolCharacters
      );
    } else {
      setPasswordString(
        lowercaseCharacters +
          uppercaseCharacters +
          numberCharacters +
          symbolCharacters
      );
    }
  }, [uppercase, numbers, symbols]);

  function generatePassword() {
    console.log(passwordString);

    let resultString = "";
    for (let i = 0; i < length; i++) {
      resultString += passwordString.charAt(
        Math.floor(Math.random() * passwordString.length)
      );
    }
    setResult(resultString);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(result);
  }

  return (
    <div className="flex flex-col bg-neutral-800 p-10 items-center">
      <div className="flex gap-6 items-center">
        <input
          type="number"
          id="quantity"
          min={6}
          max={30}
          className="bg-neutral-700 text-center pl-2"
          onChange={handleLength}
        />
        <label htmlFor="quantity"></label>
        <label htmlFor="uppercase">
          <input
            type="checkbox"
            id="uppercase"
            className="m-1"
            onChange={handleUppercaseChange}
          />
          Uppercase Letters
        </label>
        <label htmlFor="numbers">
          <input
            type="checkbox"
            id="numbers"
            className="m-1"
            onChange={handleNumbersChange}
          />
          Numbers
        </label>
        <label htmlFor="symbols">
          <input
            type="checkbox"
            id="symbols"
            className="m-1"
            onChange={handleSymbolsChange}
          />
          Symbols
        </label>
        <button
          className="border rounded py-1 px-2 hover:scale-105 transition-transform"
          onClick={generatePassword}>
          Generate
        </button>
      </div>
      <div className="relative">
        <p className="py-2 pl-2 pr-[50px] my-5 rounded bg-neutral-700 ">
          {result}
        </p>
        <button onClick={copyToClipboard}>
          <Image
            className="clipboard"
            src="/copy.png"
            width={20}
            height={20}
            alt="clipboard"
          />
        </button>
      </div>
    </div>
  );
}
