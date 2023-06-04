import { Toolbar, Box } from "@mui/material";
import '../assets/nav.css'

export default function Nav(){
    return(
        <>
        <Toolbar sx={{ flexWrap: 'wrap', bgcolor: '#252525' }}>
          <nav>
            <ul>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#programacao">Programação</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
                <li>
                    <a href="#enquete">Enquete</a>
                </li>
            </ul>
          </nav> 
        </Toolbar>
        </>
    )
}