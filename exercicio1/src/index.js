import React from "react";
import ReactDOM  from "react-dom";
import './style.css'
import medico1 from './images/medico1.jpeg'

const App = () => {
    const textoElemento1 = "Profissionais de Saude"
    const elemento1= {margin:'auto', width: 868, backgroundColor: '#EEE', padding: 12, borderRadius: 2, 
    border: 'solid black', borderWidth: 2, disply: 'block', textAlign: 'center', fontWeigth: 'bold'};
    const profissionais = {nome: "Marcelo", nome2: "Manuel", nome3: "Maria"}
    return (
        <div style={elemento1}>{textoElemento1}
            <div style={{marginTop: 5, marginBottom: 5, backgroundColor: '#EEE', padding: 12, border:'solid', 
              borderWidth: 1, borderRadius: 5, borderColor: '#cfcfcf', display:'block', textAlign: 'center', fontWeight:'bold'}}>
                <table>
                    <tr>
                        {/*medico1*/}
                        <div className="elemento3">
                            <img src={medico1} alt='fotomedico' style={{width:160, height:130, borderRadius: 10, marginTop: 10}}/> 
                            <p>{profissionais.nome}</p>
                        </div>
                    </tr>
                    <tr>
                        {/*medico2*/}
                        <div className="elemento3">
                            <img src={process.env.PUBLIC_URL+'./medico2.webp'} alt='fotomedico' style={{width:160, height:130, borderRadius: 10, marginTop: 10}}/> 
                            <p>{profissionais.nome2}</p>
                        </div>
                    </tr>
                    <tr>
                        {/*medico2*/}
                        <div className="elemento3">
                            <img src="https://files.websitebuilder.prositehosting.co.uk/f6/06/f606e03c-0896-4d2b-8dde-1fe213b36d8f.jpg" alt='fotomedico' style={{width:160, height:130, borderRadius: 10, marginTop: 10}}/> 
                            <p>{profissionais.nome3}</p>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)