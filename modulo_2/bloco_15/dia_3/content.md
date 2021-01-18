---
presentation:
  theme: "black.css"
---

<!-- slide -->

React Testing Library

<!-- slide vertical=true -->

RTL - Testando React Router
- Anteriormente, em Front-End...
  - RTL - Queries, eventos e componentes assíncronos
  - RTL - Mocks
- Hoje
  - RTL - Teste de Apps com React Router
- Em um futuro bem próximo...
  - Projetin :)
  - Redux

<!-- slide vertical=true -->
Formalizando...

- history
  Serve como uma ferramenta para guardar o histórico de navegação. Usamos para navegar entre url's e para leitura dos endereços atuais.

<!-- slide vertical=true -->
- Router
  Basicamente, altera o que a gente vê baseado numa url base, inicialmente a raiz do app. Esse componente precisa de uma prop history.

<!-- slide vertical=true -->
- renderWithRouter
  O renderWithRouter serve para renderizar um componente a partir de seu histórico. Retorna as queries e o seu histórico.

<!-- slide -->

Como testar apps com React Router? 🤔

<!-- slide -->

React router, para relembrar...
<img src="https://media.giphy.com/media/1oEttHTW7Dh6WFabZd/giphy.gif"
     alt="router"
     />
url => componente

<!-- slide -->

O plano
<img src="https://media.giphy.com/media/Dps6uX4XPOKeA/giphy.gif"
     alt="testing"
     />

<!-- slide -->

Usar o histórico de navegação
```javascript
import { createMemoryHistory } from 'history'
```

<!-- slide -->

E o componente Router
```javascript
import { Router } from 'react-router-dom'
```

<!-- slide -->

Para formar...
<img src="https://media.giphy.com/media/P4TqKx6NHyLnO/giphy.gif"
     alt="testing"
     />

<!-- slide -->

Funcão RenderWithRouter!
```jsx
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    ),
    history,
  };
};

export default renderWithRouter;
```

<!-- slide -->

Bons testes! 🚀