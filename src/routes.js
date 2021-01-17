import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CadastroVideo } from './pages/cadastro/Video';
import { CadastroCategoria } from './pages/cadastro/Categoria';
import { Home } from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };