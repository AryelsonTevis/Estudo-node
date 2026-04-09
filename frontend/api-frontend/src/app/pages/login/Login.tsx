import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleClick = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form className="flex flex-col gap-4">
        <Input
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
          
        />

        <Input
          ref={inputPasswordRef}
          label="Senha"
          type="password"
          value={senha}
          onChange={(newValue) => setSenha(newValue)}
        />

        <Link
          to="/"
          className="text-center rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gray-400"
        >
          Voltar
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Logar
        </button>
      </form>
    </div>
  );
};
