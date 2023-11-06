import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { Collapse } from "react-collapse"

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
}

const AccordionItem: React.FC<AccordionItemProps>  = ({open, toggle, title, desc}) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}>
          <p className="text-[22px] font-semibold">{title}</p>
          <div className="text-[30px]">
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[20px] pb-[20px]">{desc}</div>
      </Collapse>

    </div>
  )
}

export default AccordionItem