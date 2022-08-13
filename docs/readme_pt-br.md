# Frontend Mentor - solução de cartão de acordeão de perguntas frequentes

<p align="left">
	<a href="/README.md">Em inglês</a>   
</p>

Esta é uma solução para o [desafio do cartão de acordeão de perguntas frequentes no Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Os desafios do Frontend Mentor me ajudam a melhorar minhas habilidades de codificação criando projetos reais.
## Índice

- [Visão Geral](#visáo-geral)  
  - [O Desafio](#o-desafio)  
  - [Screenshot](#screenshot)   
- [Meu Processo](#meu-processo)  
  - [Construído Com](#construído-com)  
  - [O Que Aprendi](#o-que-aprendi)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- Visualize o layout ideal para o componente, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Ocultar/Mostrar a resposta a uma pergunta quando a pergunta é clicada
### Screenshot

Desktop 1920px  
![](/screenshots/screencapture-desktop.gif)

Mobile 375px  
![](/screenshots/screencapture-mobile.gif)

## Meu Processo

### Construído Com
- HTML5 semântico
- Variáveis CSS
- CSS com seletores adjacentes
- Layout responsivo
- Interação com JavaScript puro

### O Que Aprendi

Eu aprendi a usar os seletores adjacentes no CSS para adcionar ações no container de pergunta e no container de reposta, utilizando apenas uma classe "active".  
E no javascript utilizar apenas a classe "active" para fazer toda interatividade do acordeon.  

Classe CSS e seletore adjacente
```css
.active{
	font-weight: 700;
}

.active::after{
	transform: rotate(180deg);
}

.container-question.active + .container-answer{
	max-height: 8rem;
	padding: 0 0 1rem 0;
	border-bottom: .063rem solid var(--divires-color-light-grayish-blue);
}
```
## Autor
- Frontend Mentor - [@andrebdasilva](https://www.frontendmentor.io/profile/andrebdasilva)

## Agradecimentos
- Muito obrigado a todos do Frontend Mentor