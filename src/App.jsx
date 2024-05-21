import { useState } from "react";
import Input from "./components/Input";
function App() {
  //States
  const [password, setPassword] = useState("");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const [copyText, setCopyText] = useState("Copiar");

  //Criando uma variável
  const passwordSize = showInput ? customSize : 8;

  //Função de gerar senhas
  const generate = () => {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    //Loop de 12x
    for (let i = 0; i < passwordSize; i++) {
      //Adiciona um caractere aleatório
      const position = Math.floor(Math.random() * characters.length);
      //Atribuir o novo carac na var newPassword
      newPassword += characters[position];
    }
    setPassword(newPassword);
    //Ao clicar gerar novamente o botão aparecer copiar
    setCopyText("Copiar");
  };
  //Função para copiar a senha
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  };

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((show) => !show)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="customSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      ) : null}
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>
  );
}

export default App;
