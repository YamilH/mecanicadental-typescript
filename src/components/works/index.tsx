import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/protesisacrilica.jpg";
import image2 from "@/assets/placaderelajacion.jpg";
import image3 from "@/assets/ortodoncia.jpg";
import image4 from "@/assets/placasdecontencion.jpg";
import image5 from "@/assets/protectores.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Prótesis Acrílica",
    description:
      "Diseñadas para brindar comodidad y funcionalidad, nuestras prótesis acrílicas garantizan durabilidad.",
    image: image1,
  },
  {
    name: "Placa de Relajación",
    description:
    "Experimenta alivio instantáneo con nuestras placas de relajación personalizadas y ergonómicas.",
    image: image2,
  },
  {
    name: "Ortodoncia",
    description:
      "Logra una sonrisa perfecta con nuestro tratamiento de ortodoncia avanzado y discreto.",
    image: image3,
  },
  {
    name: "Placa de Contención",
    description:
      "Manten la forma de tu sonrisa con nuestras placas de contención cómodas y efectivas.",
    image: image4,
  },
  {
    name: "Protectores",
    description:
      "Protege tu salud bucal con nuestros protectores diseñados para garantizar seguridad y confort.",
    image: image5,
  },
];


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Works = ({ setSelectedPage }: Props) => {
  return (
    <section id="trabajos" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Works)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>TRABAJOS</HText>
            <p className="py-5">
            Todo en acrílicos y alambres

            Prótesis acrílicas e inyectadas

            Todo tipo de placas de relajación y protectores bucales

            Ortodoncia

            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[1400px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Works