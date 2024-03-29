import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorAcritone from "@/assets/acritone.png";
import SponsorDrillco from "@/assets/drillco.png";
import SponsorEgeo from "@/assets/egeo.png";
import SponsorLeone from "@/assets/leone.png";
import SponsorMorelli from "@/assets/morelli.png";
import SponsorVeracril from "@/assets/veracril.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="inicio" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Servicios Dentales. Mecanica Dental. Proximamente venta de insumos en nuestra tienda. Antes de contactarnos mirá la sección de preguntas frecuentes. Gracias por elegirnos. Contactanos !
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contactanos!
            </ActionButton>

            {/* <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contacto)}
            >
              Contactanos!
            </AnchorLink> */}
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-4/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="Acritone-sponsor" src={SponsorAcritone} />
              <img alt="Drillco-sponsor" src={SponsorDrillco} />
              <img alt="Egeo-sponsor" src={SponsorEgeo} />
              <img alt="Leone-sponsor" src={SponsorLeone} />
              <img alt="Morelli-sponsor" src={SponsorMorelli} />
              <img alt="Veracril-sponsor" src={SponsorVeracril} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;