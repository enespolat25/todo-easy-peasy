import { useForm, Controller } from "react-hook-form";
import { useStoreActions } from "easy-peasy";
import { Input } from "antd";

export default function AddTodo() {
  const addTodo = useStoreActions((state) => state.todoModel.addTodo);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    addTodo(data);
    reset();
  };
  return (
    <div
      style={{ padding: "10px", justifyContent: "right", alignItems: "right", flex:1 }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          padding: "10px",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <Controller
          name="task"
          control={control}
          defaultValue=""
          render={({ field }) => <Input autoComplete="off" {...field} />}
        />
        <div
          style={{
            flex: 1,
            
            alignItems: "right",
            justifyContent: "right",
          }}
        >
        
          <input
            type="submit"
            value="Ekle"
            style={{ marginTop: "10px",
            padding: "10px 50px 10px 50px",
            borderRadius: "10px"
            }}
          />
        </div>
      </form>
    </div>
  );
}
