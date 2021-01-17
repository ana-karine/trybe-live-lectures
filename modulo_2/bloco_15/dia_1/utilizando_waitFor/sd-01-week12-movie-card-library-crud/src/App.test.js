import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

describe('Lista de filmes', () => {
  it('Renderiza um texto "Carregando..." logo após renderizar um elemento', () => {
    // Recupera os elementos que vamos testar
    const { getByText } = render(<App />);

    // Interage com eles (se for o caso)

    // Faz os testes!
    expect(getByText('Carregando...')).toBeDefined();
  });

  it('Renderiza os títulos dos filmes depois da página carregar', async () => {
    const { queryByText } = render(<App />);

    await waitFor(
      () => expect(queryByText('Carregando...')).toBeNull(), { timeout: 3000 },
    );

    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
    expect(queryByText('Ghost In The Shell')).not.toBeNull();
    expect(queryByText('Appleseed Alpha')).not.toBeNull();
    expect(queryByText('Resident Evil')).not.toBeNull();
  });

  it('Renderiza os detalhes do filme quando o botão "Ver detalhes" é clicado', async () => {
    const { queryByTestId, queryByText } = render(<App />);

    await waitFor(() => expect(queryByText('Kingsglaive')).not.toBeNull(), { timeout: 3000 });

    fireEvent.click(queryByTestId('KingsglaiveDetails'));

    await waitFor(() => expect(queryByTestId('genre')).not.toBeNull(), { timeout: 3000 });
    expect(queryByTestId('rating')).not.toBeNull();
  });
});
