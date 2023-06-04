import '../assets/sobre.css'

export default function Sobre(){
    return(
        <section className='sobre' id='sobre'>
            <h1 className='h1sobre'>SOBRE</h1>

            <hr style={{
                color: '#000000',
                 backgroundColor: '#000000',
                 height: 3,
                 width: "70%",
                borderColor : '#000000'}}/>

            <div className='containersobre'>
                <p className='psobre'>
                    Este é um momento especial para louvarmos a Deus, aprendermos mais sobre Sua Palavra e nos conectarmos com outros jovens cristãos. 
                    Não perca a oportunidade de crescer em sua fé e fazer novas amizades.
                </p>
                <p className='psobre'>
                    Nosso objetivo é organizar atividades que promovam comunhão, crescimento espiritual e ofereçam condições para o 
                    fortalecimento das identidades cristãs dos adolescentes.
                </p>          
            </div>
        </section>
    )
}