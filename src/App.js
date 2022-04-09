import { Container } from 'postcss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="justify-items-stretch">
          {/* <div class="grid grid-cols-6 gap-4 place-items-center overflow-x-auto">
            <div class="col-start-2 col-span-4 flex mb-4">
              <img src="milvest.svg"></img>

            </div>
            <div class="col-start-1 col-end-7 pt-8">
            <Vesti nome="Tamires"></Vesti>

            </div>
            <div class="col-start-1 col-end-7">
            <Vesti nome="Brenda"></Vesti>

            </div>
            <div class="col-start-1 col-end-7 ">
            <Vesti nome="Fran"></Vesti>

            </div>
            <div class="col-start-1 col-end-7 ">
            <Vesti nome="Catálogo"></Vesti>

            </div>

          </div> */}
            <div class="flex justify-center mb-8">
              <img src="milvest.svg"></img>

            </div>
            <div class="flex justify-center mb-4">
            <Vesti nome="Tamires" link="https://wa.me/5511993703230"></Vesti>

            </div>
            <div class="flex justify-center mb-4">
            <Vesti nome="Brenda" link="https://wa.me/5511987067219"></Vesti>

            </div>
            <div class="flex justify-center mb-4">
            <Vesti nome="Fran" link="https://wa.me/5511987067140"></Vesti>

            </div>
            <div class="flex justify-center">
            <Vesti nome="Catálogo" link="https://milvest.vesti.mobi/"></Vesti>

            </div>


          </div>
      </header>
    </div>
  );
}

function Whatsapp(props){
  return(
    <>
    <button className='button-50'>{props.nome}</button>
    </>
  )
}

function Vesti(props){
  return(
    <>
    <button className="button-51"><a href={props.link}>{props.nome}</a></button>
    </>
  )
}
export default App;
