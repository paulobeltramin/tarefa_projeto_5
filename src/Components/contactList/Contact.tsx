import { useSelector } from "react-redux"
import Contato from "../Contato"
import { rootReducer } from "../../Store"


const ContactList =()=>{

    const {itens} =useSelector((state:rootReducer)=> state.contact)

    return(
        <>
         <div>
            <h1>Meus contatos</h1>
             <ul>
             {itens.map((item)=>(
                    <li>
                        <Contato name={item.name} email={item.email} contato={item.contato} id={item.id}/>
                    </li>
             ))}
             </ul>
         </div>
        </>
    )
}

export default ContactList