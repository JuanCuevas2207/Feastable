import {Component} from 'react'
import infoContainerStyles from '../infoContainer/InfoContainer.module.css'
import SettingsTag from '../settingsTag/SettingsTag'

class InfoContainer extends Component{
    render(){
        return(
            <>
                <div className={infoContainerStyles.container}>
                    <div className={infoContainerStyles.column1}>
                        <SettingsTag name="Nombre" value="Gabriel Jose Nieves Cosson" type="text"></SettingsTag>
                        <SettingsTag name="Usuario" value="gabrielnieves2021" type="text"></SettingsTag>
                        <SettingsTag name="Contraseña" value="123456789gabriel" type="password"></SettingsTag>
                    </div>
                    <div className={infoContainerStyles.column2}>
                        <SettingsTag name="Correo Electrónico" value="gabrielnieves2000@gmail.com" type="text"></SettingsTag>
                        <SettingsTag name="Localidad" value="Bogotá, Colombia" type="text"></SettingsTag>
                        <SettingsTag name="Confirmar contraseña" value="123456789gabriel" type="password"></SettingsTag>
                    </div>
                </div>
                <div className={infoContainerStyles.buttonContainer}>
                    <button className={infoContainerStyles.button}>GUARDAR CAMBIOS</button>
                </div>
            </>
        );
    }
}

export default InfoContainer;