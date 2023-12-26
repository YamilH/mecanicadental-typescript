import btnWsp from "@/assets/WhatsApp.svg";

const Whatsapp: React.FC = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=5493413052720" className="btn-wsp" target="_blank">
        <i className="icon-whatsapp"><img className="icon-whatsapp" src={btnWsp} /></i>
      </a>
    </div>
  )
}

export default Whatsapp