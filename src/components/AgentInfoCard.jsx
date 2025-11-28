import Button from "./Button";

export default function AgentInfoCard() {
  return (
    <div className="bg-darkCard p-6 rounded-lg border border-white/10 space-y-4">
      <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
        <img
          src="https://via.placeholder.com/100"
          alt="agent"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-black">
        John Doe
      </h3>

      <p className="text-lightText text-sm">
        +234-9876543210  
        <br />
        johndoe@example.com
      </p>

      <Button className="w-full mt-3">Contact Now</Button>
    </div>
  );
}
