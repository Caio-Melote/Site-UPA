import '../assets/forms.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Forms(){
    return(
        <section className='forms' id='enquete'>
            <h1 className='h1forms'>ENQUETE DA SEMANA</h1>
            <hr style={{
                color: '#000000',
                 backgroundColor: '#000000',
                 height: 3,
                 width: "70%",
                borderColor : '#000000'}}/>

                <div className='containerforms'>                               
                <Button className='botao' variant="contained" sx={{ bgcolor : '#b8d200' }} href='https://forms.gle/aJDzHhvbkHJWCFNt8' target='_blank' endIcon={<SendIcon />}>
                 VOTAR          
                </Button>
                </div>
                    
        </section>
    )
}