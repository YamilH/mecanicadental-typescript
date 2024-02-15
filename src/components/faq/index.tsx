import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";
import { useState } from "react";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Faq = ({ setSelectedPage }: Props) => {

  
// eslint-disable-next-line react-hooks/rules-of-hooks
const [open, setOpen] = useState<number | null>(null);

const toggle = (index: number | null) => {
  if (open === index) {
    return setOpen(null)
  }
  setOpen(index)
}

const accordionData = [
  {
    title: "¿Qué tipo de métodos de pagos hay?",
    desc: "Por el momento: efectivo y transferencias bancarias, en el futuro habrá otros métodos de pago.",
  },
  {
    title: "¿Hay descuentos para pagos adelantados?",
    desc: "Posiblemente, consulta disponibilidad.",
  },
  {
    title: "¿Cuándo debo realizar el pago completo?",
    desc: " Antes de la entrega final.",
  },
  // {
  //   title: "El director de cine Nolan, ¿es un idiota?",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eius quasi eveniet amet beatae! Ullam laborum suscipit molestiae, iure at provident totam in eaque cupiditate dignissimos repellat? Molestias nostrum ut, quisquam, qui laborum delectus impedit repellat reiciendis, labore quo distinctio.",
  // },
  // {
  //   title: "¿Acaso Rufi es la gata mas linda del mundo?",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eius quasi eveniet amet beatae! Ullam laborum suscipit molestiae, iure at provident totam in eaque cupiditate dignissimos repellat? Molestias nostrum ut, quisquam, qui laborum delectus impedit repellat reiciendis, labore quo distinctio.",
  // },
]
  return (
    <section id="preguntasfrecuentes" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Faq)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">PREGUNTAS</span> FRECUENTES
          </HText>
          <p className="my-5">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci libero magnam quos obcaecati dolore earum ad error nulla labore?
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            
            <section className="bg-gray-500 h-screen grid place-items-center">
              <div className="px-[10px] max-w-[1000px]">

              {accordionData.map((data, index) => {
                return (
                  <AccordionItem 
                  key={index} 
                  open={index === open} 
                  title={data.title} 
                  desc={data.desc} 
                  toggle={()=>toggle(index)}
                  />
                  );
                })}

              </div>
            </section>
            
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Faq