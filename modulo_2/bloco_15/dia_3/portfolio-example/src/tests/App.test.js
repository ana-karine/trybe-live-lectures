import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'; // do JS
import { Router } from 'react-router-dom';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('checa as rotas', () => {
  test('navega da home para comentários', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
      );
    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Deixe um comentário/i));
    // - na desestruturação pegamos o objeto 'history';
    // - no objeto 'history' temos a chave 'location';
    // - dentro do 'location' pego apenas o 'pathname'.
    const { pathname } = history.location
    expect(pathname).toBe('/comments');

    const comment = getByText(/Comente!/i);
    expect(comment).toBeInTheDocument();
  });

  test('navega da home para projetos', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const personalInfo = getByText(/Página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Projetos/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');

    const projects = getByText(/Página de projetos/i);
    expect(projects).toBeInTheDocument();
  })

  test('tenta entrar com o pathname xablau', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const route = '/xablau';
    history.push(route);

    const pageNotFound = getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  })
})

describe('formulário de comentários', () => {
  test('comenta e mostra o comentário na tela', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Deixe um comentário/i));
    const input = getByTestId('input-comment');

    userEvent.type(input, 'meu comentário');
    fireEvent.click(getByTestId('button-comment'));
    expect(getByText(/meu comentário/i)).toBeInTheDocument();
  })
})