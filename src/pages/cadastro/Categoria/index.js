import { Link } from 'react-router-dom';
import { PageDefault } from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <>
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
 </>
  );
}

export { CadastroCategoria };
