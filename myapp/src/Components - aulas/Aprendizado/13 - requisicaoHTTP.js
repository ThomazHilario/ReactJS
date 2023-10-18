import {useState,useEffect} from 'react'

export default function Request(){
    // state - informações da minha Api
    const [infoApi,setInfoApi] = useState([])

    // antes do componente ser montado traga as informações da api para o state infoApi
    useEffect(()=>{
        async function loadApi(){
            let response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
            let data = await response.json()
            
            // Setando os valores da api para o state infoApi
            setInfoApi(data)
        }

        loadApi()
    },[])

    // return
    return(
        <div className='container'>
            {/* Percorrendo o meu state com as informações da Api */}
            {infoApi.map((item) => {
                return(
                    <div key={item.id} className='card'>
                        <h1>{item.categoria}</h1>
                        <img src={item.capa} alt='imagem da api'/>
                        <h3>{item.titulo}</h3>
                        <p>{item.subtitulo}</p>
                    </div>
                )
            })}
        </div>
    )
}

// style global 

/*
    *{
    font-family: Arial, Helvetica, sans-serif;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180vh;
    flex-direction: column;
}
h1,h2 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}
.card{
    border: 2px solid black;
    width: 350px;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 5px 10px;
}
.card > h1{
    text-align: center;
}
.card > img{
    border-radius: 5px;
}
.card > p{
    text-align: justify;
    padding: 2px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
*/