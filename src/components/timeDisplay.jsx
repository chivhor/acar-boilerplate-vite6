import { useEffect, useState } from "react";
import moment from "moment";
import { toLocaleNumber } from "../utils/KhmerDateHelpers";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm:ss A"));

  useEffect(() => {
    let frameId;

    const updateTime = () => {
      setCurrentTime(moment().format("hh:mm:ss A"));
      frameId = requestAnimationFrame(updateTime); // Request the next animation frame
    };

    // Start updating the time
    frameId = requestAnimationFrame(updateTime);

    // Cleanup when the component unmounts
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="text-xl font-bold">
      {toLocaleNumber(parseInt(currentTime.split(":")[0]), "km")}:
      {toLocaleNumber(parseInt(currentTime.split(":")[1]), "km", 2)}:
      {toLocaleNumber(parseInt(currentTime.split(":")[2]), "km", 2)} នាទី{" "}
      {currentTime.split(":")[2].split(" ")[1] === "AM" ? "ព្រឹក" : "ល្ងាច"}
    </div>
  );
};

export default TimeDisplay;
