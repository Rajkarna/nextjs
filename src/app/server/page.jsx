import { addPost, deletePost } from "@/lib/action"


const ServerActionTest = () => {


  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="enter name" name="title" />
        <input type="text" placeholder="enter desc" name="desc" />
        <input type="text" placeholder="enter id" name="userId" />
        <input type="text" placeholder="enter slug" name="slug" />
        <button>click</button>



      </form>

      <form action={deletePost}>
        <input type="text" placeholder="enter id" name="id" />
        <button>delete</button>
      </form>
    </div>
  )
}

export default ServerActionTest