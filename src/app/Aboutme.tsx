import { motion } from "framer-motion";
import { CanvasRevealEffectDemo } from "./Canvas";

export function AboutMeSection() {
  return (
    <section id="target-section">
      <div
        className="h-screen mt-20 overflow-y-hidden overflow-x-hidden"
        style={{ width: "100vw" }}
      >
        <CanvasRevealEffectDemo />
      </div>
    </section>
  );
}
