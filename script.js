const prefix = 'ks.'
const commands = [
  {
    name: `${prefix}avatar`,
    description: 'Retorna  os links dos avatares das pessoas mencionadas',
    usage: [
      `${prefix}avatar - Mostra o link da pessoa usou o comando`,
      `${prefix}avatar [@user] - Mostra os links dos avatares das pessoas mencionadas`
    ]
  },
  {
    name: `${prefix}invite`,
    description: 'Manda no chat uma mensagem com o link de adicionar a Kurisu ao servidor e alguns outros links importantes',
    usage: [
      `${prefix}invite`,
    ]
  },
  {
    name: `${prefix}roleinfo`,
    description: 'Mostra informações sobre um determinado cargo do servidor',
    usage: [
      `${prefix}roleinfo <nome-do-cargo>`,
    ]
  },
  {
    name: `${prefix}serverinfo`,
    description: 'Mostra informações sobre o servidor atual',
    usage: [
      `${prefix}serverinfo`,
    ]
  },
  {
    name: `${prefix}ping`,
    description: 'Joga aquele ping pong maroto com a Kurisu',
    usage: [
      `${prefix}ping`,
    ]
  },
  {
    name: `${prefix}beep`,
    description: 'Mostra que você também sabe falar a lingua dos robôs, isso mesmo, nem todos usam binário pra se comunicar',
    usage: [
      `${prefix}beep`,
    ]
  },
  {
    name: `${prefix}ban`,
    description: 'Comando pra botar medo nos usuários',
    usage: [
      `${prefix}ban @user`,
    ]
  },
  {
    name: `${prefix}hug`,
    description: 'Abraça um outro usuário',
    usage: [
      `${prefix}hug @user`,
    ]
  },
  {
    name: `${prefix}kiss`,
    description: 'Manda um beijinho pra outro usuário',
    usage: [
      `${prefix}kiss @user`,
    ]
  },
  {
    name: `${prefix}highfive`,
    description: 'Faz um highfive com algum consagrado/consagrada do servidor',
    usage: [
      `${prefix}highfive @user`,
    ]
  },
  {
    name: `${prefix}corona`,
    description: 'Mostra dados a cerca do COVID-19 no Brasil e no mundo',
    usage: [
      `${prefix}corona`,
    ]
  },
  {
    name: `${prefix}weather`,
    description: 'Mostra dados de como está o tempo na cidade que você pesquisou',
    usage: [
      `${prefix}weather <nome-da-cidade>`,
    ]
  },
  {
    name: `${prefix}8ball`,
    description: 'Simula o funcionamento da toda poderosa BOLA OITO',
    usage: [
      `${prefix}8ball <pergunta>`,
    ]
  },
  {
    name: `${prefix}search`,
    description: 'Busca notícias e mostra no discord, com seus respectivos links',
    usage: [
      `${prefix}search - Mostra as manchetes`,
      `${prefix}search <busca> - Mostra os resultados da busca, caso exista`,
    ]
  },
  {
    name: `${prefix}coinflip`,
    description: 'Gira uma moeda uma ou mais vezes e mostra quantas vezes cada uma foi sorteada',
    usage: [
      `${prefix}coinflip - Gira a moeda uma vez`,
      `${prefix}coinflip <vezes> - Gira a moeda x vezes`,
    ]
  },
  {
    name: `${prefix}roll`,
    description: 'Rola um dado específico uma ou mais vezes, mostra os resultados de cada rodada e o total somado',
    usage: [
      `${prefix}roll <tipo-de-dado> <vezes>`,
      `${prefix}roll - Rola o dado d6 uma vez`,
      `${prefix}roll <tipo-de-dado> - Rola o tipo de dado apenas uma vez`,
      `${prefix}roll <vezes> - Rola o dado d6 x vezes`,
    ]
  },
  {
    name: `${prefix}random-number`,
    description: 'Te mostra um número aleatório com base no intervalo que você decidiu',
    usage: [
      `${prefix}random-number <inicio-intervalo> <fim-intervalo>`,
    ]
  },
  {
    name: `${prefix}gif`,
    description: 'Manda um gif',
    usage: [
      `${prefix}gif - Retorna um gif aleatório`,
      `${prefix}gif <busca> - Retorna um gif com base no que você pesquisou`,
    ]
  },
  {
    name: `${prefix}filter`,
    description: 'Aplica filtros em uma imagem e manda a imagem de volta pra o discord',
    usage: [
      `${prefix}filter <url> [<filtros>]`,
      `${prefix}filter [<filtros>] - Adicione esse comando na descrição de uma imagem que você está enviando para o discord`,
    ]
  },
  {
    name: `${prefix}base64`,
    description: 'Codifica ou decodifica um código base64',
    usage: [
      `${prefix}base64 <code/encode> <frase>`,
    ]
  },
  {
    name: `${prefix}morse`,
    description: 'Codifica ou decodifica um código morse',
    usage: [
      `${prefix}morse <code/encode> <frase>`,
    ]
  },
  {
    name: `${prefix}make-meme`,
    description: 'Faz um meme com base no template escolhido e as frases que você indicou',
    usage: [
      `${prefix}make-meme <tempalte> [<frase>]`,
    ]
  },
  {
    name: `${prefix}pokedex`,
    description: 'Busca informações sobre um pokemon com base no numero na pokedex ou no seu nome',
    usage: [
      `${prefix}pokedex <busca>`,
    ]
  },
]


function addCommands() {
  const list = document.querySelector('.list-commands')

  

  commands.forEach(command => {
    const commandElement = document.createElement('li')
    commandElement.classList.add('command')

    const commandName = document.createElement('strong')
    commandName.innerText = command.name
    
    const rightDiv = document.createElement('div')
    const descriptionElement = document.createElement('p')
    descriptionElement.innerText = command.description

    rightDiv.appendChild(descriptionElement)
    
    const usageTitle = document.createElement('h3')
    usageTitle.innerText = 'Modos de usar'
    
    
    const usageDiv = document.createElement('div')
    
    usageDiv.appendChild(usageTitle)
    command.usage.forEach(mode => {
      const usageMode = document.createElement('p')
      usageMode.innerText = mode
      
      usageDiv.appendChild(usageMode) 
      rightDiv.appendChild(usageDiv)
    })

    commandElement.appendChild(commandName)
    commandElement.appendChild(rightDiv)
    list.appendChild(commandElement)
  })
}

addCommands()