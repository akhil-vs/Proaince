import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from 'react-scroll';

type Product = {
  title: string;
  colors: string[]
  description: string;
  points: string[];
  link: string;
};

const products: Product[] = [
  {
    title: "Procure Aigent",
    colors: ["text-aigent", 'text-proaince'],
    description:
      "B2B marketplace powered by AI for efficient procurement.",
    points: ["Smart supplier matching", "Real-time analytics", "Sustainable sourcing"],
    link: "https://procureaigent.proaince.com/",
  },
  {
    title: "Recrui Trainer",
    colors: ["text-proaince", 'text-black'],
    description:
      "Unified AI platform for recruitment and continuous learning.",
    points: ["AI-powered candidate matching and resume screening", "Skill assessment and personalized training", "Predictive analytics for smarter hiring decisions"],
    link: "/"
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Products = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Element name="products">
      <section className="bg-white py-16 px-4 md:px-16">
        <div
          ref={ref}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Content */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gray-500 font-medium">Innovate</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explore Our Cutting-Edge <br /> B2B Solutions
              </h2>
            </div>

            <p className="text-gray-600 text-base max-w-3xl">
              Discover our innovative B2B products designed to enhance your business efficiency.
              Each solution is crafted with sustainability and AI technology at its core.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 * index }}
                  className="space-y-2"
                >
                  <h4 className="font-bold text-xl">
                    <span className={product.colors[0]}>{product.title.split(' ')[0]}</span>
                    <span className={product.colors[1]}>{product.title.split(' ')[1]}</span>
                  </h4>
                  <p className="text-md text-gray-600">{product.description}</p>
                  <ul className="list-disc list-inside text-md text-gray-600 space-y-1 pt-1">
                    {product.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 pt-6">
                    <a href={product.link} target="_blank" className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:text-black transition-transform duration-200">
                      Learn More
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </Element>
  );
}

export default Products;