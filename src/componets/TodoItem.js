import { List, Button, Typography } from "antd";
import { useStoreActions } from "easy-peasy";


export default function TodoItem({ todo }) {
  const { Text } = Typography;
  const removeTodo = useStoreActions((state) => state.todoModel.removeTodo);
  return (
    <>
      <List.Item
        actions={[
          <Button 
          
          type="primary" danger onClick={() => removeTodo(todo.id)}>
            {" "}
            Sil
          </Button>
        ]}
      >
        <Text style={{ color:'green',fontSize:'28px', fontWeight:'bold',border: '1px solid',flex:1, marginLeft:'20px'}}> {todo.task} </Text>
      </List.Item>
    </>
  );
}
