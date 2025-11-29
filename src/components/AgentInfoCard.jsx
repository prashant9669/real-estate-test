import Button from "./Button";
import agent from "../assets/dream1.jpg";

export default function AgentInfoCard() {
  return (
    <div className="bg-white p-6 rounded-lg border border-white/10 space-y-4">
      <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
        <img
          src={agent}
          alt="agent"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-black">
        John Doe
      </h3>

      <p className="text-black text-sm">
        +234-9876543210  
        <br />
        johndoe@example.com
      </p>

      <Button className="w-full mt-3">Contact Now</Button>
    </div>
  );
}
