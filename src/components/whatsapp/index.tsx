import btnWsp from "@/assets/WhatsApp.svg";

type Props = {}

const Whatsapp = (props: Props) => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=5493413306633" className="btn-wsp" target="_blank">
        <i className="icon-whatsapp"><img className="icon-whatsapp" src={btnWsp} /></i>
      </a>
    </div>
  )
}

export default Whatsapp