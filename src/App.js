import { Container } from 'postcss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="justify-items-stretch">
            <div class="flex justify-center mb-8">
              <img src="milvest.svg"></img>
            </div>
            <div class="flex justify-center mb-4">
              <Vesti nome="Tamires" link="https://wa.me/5511993703230">
              </Vesti>
            </div>
            <div class="flex justify-center mb-4">
              <Vesti nome="Brenda" link="https://wa.me/5511987067219"></Vesti>
            </div>
            <div class="flex justify-center mb-4">
              <Vesti nome="Fran" link="https://wa.me/5511987067140"></Vesti>
            </div>
            <div class="flex justify-center">
              <Cata nome="Catálogo" link="https://milvest.vesti.mobi/"></Cata>
            </div>
          </div>
      </header>
    </div>
  );
}

function Cata(props){
  return(
    <>
    <button className='button-51'>
      <div class="flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z"/><path stroke-linecap="round" d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"/></g></svg>
        {props.nome}

      </div>
    </button>
    </>
  )
}

function Vesti(props){
  return(
    <>
    <button className="button-51">
      <div class="flex justify-between">

        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></svg>
        <a href={props.link}>{props.nome}</a>
      </div>
    </button>
    </>
  )
}
export default App;
