import img from "@/assets/footer.svg"
export const Footer = () => {
  return (
    <div className="text-center fixed bottom-0 w-full gap-1 items-center mb-1 flex justify-center">
      <p className="font-nunito text-[#000000] font-medium text-[13px]">A solution by </p>
      <img className="" src={img} alt="footer.image"/>
    
    </div>
  );
};
