import './Header.css';
import BtnPart from './BtnPart';

function HeaderPart() {
    
    return(
        <div className='MainDiv'>
            <div className='MainDiv-Sub1'>
                Prueba 1 de React
            </div>
            <BtnPart infoButton='Change theme'/>
        </div>
    )
}

export default HeaderPart;