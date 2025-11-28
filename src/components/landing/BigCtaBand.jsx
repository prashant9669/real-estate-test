import AnimatedWrapper from "../AnimatedWrapper";

export default function BigCtaBand() {
  return (
    <section className=" bg-[url('./assets/contact.png')] bg-cover h-[100vh] py-16">
      <div className="container mx-auto px-6 relative flex flex-col gap-10 justify-center h-full">
      
        <div className="grid  items-center gap-6 lg:gap-12">
          <AnimatedWrapper>
            <div className="text-center ">
              <h2 className="text-[28px] md:text-[40px] lg:text-[46px] leading-[1.25] font-medium text-[#111111]">
                Let{" "}
                <span className="text-[#13A655]">
                  PROTIVA experts
                </span>{" "}
                help
                <br className="hidden md:block" /> you make the right
                <br className="hidden md:block" /> investment in Nigeria.
              </h2>

              <p className="mt-4 text-[14px] text-[#777777]">
                Backed by verified data, trusted agents, and NIN-approved checks
              </p>
            </div>
          </AnimatedWrapper>

        </div>

        
        <AnimatedWrapper>
          <div className="mt-10">
            <div className="flex items-center gap-6 md:min-w-[230px] mb-6 ml-3">
                <button className="w-10 h-10 rounded-full border border-[#D7D7D7] flex items-center justify-center bg-white">
                  
                  <span className="text-[18px]">✈️</span>
                </button>
                <span className="text-[14px] text-[#555555]">Telegram</span>

                <button className="w-10 h-10 rounded-full border border-[#D7D7D7] flex items-center justify-center bg-white">
                 
                  <span className="text-[18px]">🟢</span>
                </button>
                <span className="text-[14px] text-[#555555]">Whatsapp</span>
              </div>
            <div className="w-full bg-black/10 backdrop-blur-xl rounded-[19px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] px-6 md:px-10 py-5 flex flex-col gap-5 md:flex-row md:items-center">
           
              

           
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-[#000] pb-1 text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none focus:border-[#13A655]"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-[#000] pb-1 text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none focus:border-[#13A655]"
                  />
                </div>

                
                <div className="flex justify-start md:justify-end">
                  <button className="px-8 py-3 rounded-[999px] bg-[#13A655] text-white text-[14px] font-medium flex items-center gap-2 whitespace-nowrap hover:bg-[#0f8e45] transition-colors">
                    Get consultation
                    <span className="text-[18px]">➜</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#9A9A9A] text-center md:text-left">
              By submitting this form, you agree to PROTIVA&apos;s privacy policy and
              consent to being contacted.
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
