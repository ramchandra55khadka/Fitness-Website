import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and tone your muscles with our guided weight training sessions. Perfect for beginners and advanced lifters looking to improve form and power.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility and find inner peace with our relaxing yoga sessions. Designed to rejuvenate your mind and body while enhancing balance and posture.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your abdominal muscles with targeted exercises designed for a strong core. These sessions enhance stability, improve posture, and help sculpt your midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Unleash your inner adventurer with our high-energy Adventure Classes! Designed to push your limits, these sessions combine fun challenges with intense workouts for an unforgettable fitness experience.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
   
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
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
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Discover a wide range of fitness classes designed for all levels and preferences. From yoga and Pilates to high-energy cardio and strength training, there’s something for everyone.

          Join our expert-led sessions and make every workout a step closer to achieving your fitness goals!.


            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
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

export default OurClasses;