import { List, Typography } from "antd";
import TodoItem from "./TodoItem";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Title } = Typography;
export default function TodoList() {
  const todos = useStoreState((state) => state.todoModel.todos);
  const numberOfItems = useStoreState((state) => state.todoModel.numberOfItems);
  return (
    <div>
      <Title level={3} style={{color: 'blue',fontWeight: 'bold',textAlign: 'center',fontSize:'36px'}}> Yapılacak toplam {numberOfItems} iş var</Title>
      {todos && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item) => <TodoItem todo={item} />}
        />
      )}
    </div>
  );
}