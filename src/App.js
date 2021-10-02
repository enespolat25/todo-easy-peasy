import { StoreProvider } from "easy-peasy";
import "antd/dist/antd.css";
import TodoList from "./componets/TodoList";
import store from "./store/todoStore";
import AddTodo from "./componets/AddTodo";
export default function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
          <h2 style={{flex:1,textAlign: 'center', justifyContent: 'center',color: 'aqua', backgroundColor: 'black',margin:'20px',borderRadius:'15px'}}>YAPILACAKLAR LİSTESİ</h2>
          <h4 style={{flex:1,textAlign: 'center', justifyContent: 'center',borderRadius:'15px'}}>2 Ekim 2021</h4>
          <h6 style={{flex:1,textAlign: 'center', justifyContent: 'center',borderRadius:'15px'}}>@Enes Battal-Enes Polat-Tarık Karabey</h6>
        <AddTodo />
        <TodoList />
        
        
      </StoreProvider>
      
    </div>
  );
}
