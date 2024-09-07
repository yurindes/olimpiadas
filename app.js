function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for vazio, não faz nada
    if (campoPesquisa == "") {
      section.innerHTML = "<p>busca vazia</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Cria uma string vazia para armazenar os resultados
    let resultados = "";

    let nome = "";
    let descricao = "";
    let tag = "";
  
    // Itera sobre cada banda no array de bandas
    for (let dado of bandas) {
      nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tag = dado.tag.toLocaleLowerCase()

      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href= ${dado.informacoes} target="_blank">Mais informações</a>
        </div>
        `;
      }

      //console.log(dado.nome.includes(campoPesquisa))
      // Cria um novo elemento HTML para cada banda e adiciona à string de resultados

    }
    
    if (!resultados){
      resultados = "<p>busca não encontrada</p>"
    }


    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }