const mensagem = document.getElementById("mensagem");

const checaCaps = (event) => {
  if (event.shiftKey) {
    mensagem.innerHTML = "ATENÇÃO: SEGURANDO SHIFT";
  } else {
    mensagem.innerHTML = "";
  }
};

//Poderia usar if(event.key === "Shift"), mas não funciona pra parar de mostrar a mensagem quando solta a tecla de shift
