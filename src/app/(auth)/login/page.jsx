
import { handleGithubLogin } from "@/lib/action"


const Loginpage =  () => {

 
  
  return (
    <form action={handleGithubLogin}>
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}

export default Loginpage