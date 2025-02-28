import{createPost} from './action'
export function Form() {
    return(
        <form action={createPost}>
            <input type="text" name="tittle" />
            <input type ="text" name="content"/>
            <button type="submit">Create</button>
        </form>
    )
}