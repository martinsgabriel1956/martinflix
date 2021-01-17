import { Menu } from '../Menu';
import { Footer } from '../Footer';

import { Main } from './styles';


function PageDefault({ children }) {
  return (
  <>
     <Menu />
      <Main>
      { children }
      </Main>
     <Footer />
  </>
  );
}

export { PageDefault };
