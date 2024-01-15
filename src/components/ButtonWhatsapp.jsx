import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export function ButtonWhatsapp() {
  return (
    <a className='btnTop2' href='https://wa.me/573123556221?text=Hola, puedes ayudarme con mi página web?' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faWhatsapp} size='2x' /></a>
  )
}