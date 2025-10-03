import { useState } from "react";
import Button from "./boton";

function Calculator() {
  const [input, setContador] = useState("");
  const [expression, setExpression] = useState("");

  function Valor(value) {
    setContador(input + value);
  }

  function escribirOperador(op) {
    if (input !== "") {
      setExpression(expression + input + op);
      setContador("");
    }
  }

  function Borrar() {
    setContador("");
  }

  // Calcula el resultado
  function calcular() {
    try {
      const operacion = expression + input; // junta todo
      const result = eval(operacion);
      setContador(result.toString());
      setExpression(""); // limpiar para nueva operación
    } catch (e) {
      setContador("Error");
      setExpression("");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{input === "" ? " " : input}</div>

      <div className="buttons">
        <Button onClick={Borrar} className="btn clear">
          C
        </Button>
        <Button onClick={() => escribirOperador("/")} className="operador">
          /
        </Button>
        <Button onClick={() => escribirOperador("*")} className="operador">
          *
        </Button>
        <Button onClick={() => escribirOperador("-")} className="operador">
          -
        </Button>

        <Button onClick={() => Valor("1")} className="numero">
          1
        </Button>
        <Button onClick={() => Valor("2")} className="numero">
          2
        </Button>
        <Button onClick={() => Valor("3")} className="numero">
          3
        </Button>
        <Button onClick={() => Valor("4")} className="numero">
          4
        </Button>
        <Button onClick={() => Valor("5")} className="numero">
          5
        </Button>
        <Button onClick={() => Valor("6")} className="numero">
          6
        </Button>
        <Button onClick={() => Valor("7")} className="numero">
          7
        </Button>
        <Button onClick={() => Valor("8")} className="numero">
          8
        </Button>
        <Button onClick={() => Valor("9")} className="numero">
          9
        </Button>
        <Button onClick={() => Valor("0")} className="numero">
          0
        </Button>

        <Button onClick={() => escribirOperador(".")} className="numero">
          .
        </Button>
        <Button onClick={() => escribirOperador("+")} className="operador">
          +
        </Button>

        <Button onClick={calcular} className="btn equal">
          =
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
