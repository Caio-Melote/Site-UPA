import '../assets/contato.css'

export default function Sobre(){
    return(
        <section className='contato' id='contato'>
            <h1 className='h1contato'>CONTATO</h1>

            <hr style={{
                color: '#000000',
                 backgroundColor: '#000000',
                 height: 3,
                 width: "70%",
                borderColor : '#000000'}}/>

                <div className='containercontato'>
                <p className='pcontato'>

                <iframe
                title="Survey"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfaHAPIvUVY4r9qhBUYR9bqk2WhcFUBRno1RPhnCk0m8xrpzg/viewform?embedded=true"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{ width: '500px', height: '300px' }}
                >
                Loading…
                </iframe>

                </p>
                <p className='pcontato'>
                    Informações de contato
                </p>
                </div>
                    
        </section>
    )
}