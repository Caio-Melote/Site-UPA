import '../assets/home.css'

function TextHome(){
    return(
        <div className='TextHome'>
            <h1>
                UPA - UNIÃO PRESBITERIANA DE ADOLESCENTES
            </h1>
            <p>
            A UPA é a União Presbiteriana de Adolescentes, uma sociedade interna da Igreja Presbiteriana do Brasil destinada ao trabalho com adolescentes
             entre 12 e 18 anos. O objetivo da UPA é organizar atividades que promovam comunhão, crescimento espiritual e ofereçam condições para o 
             fortalecimento das identidades cristãs dos adolescentes.
            <br></br>
            <br></br>
             A UPA é a União Presbiteriana de Adolescentes, uma sociedade interna da Igreja Presbiteriana do Brasil destinada ao trabalho com adolescentes
             entre 12 e 18 anos. O objetivo da UPA é organizar atividades que promovam comunhão, crescimento espiritual e ofereçam condições para o 
             fortalecimento das identidades cristãs dos adolescentes.
            </p>
        </div>
    )
}

export default function Home(){
    return(
        <section className="home">
            <TextHome/>
        </section>
    )
}