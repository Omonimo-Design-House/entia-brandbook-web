const imgReglaLateral = "https://www.figma.com/api/mcp/asset/9d9b6d1d-1161-47fe-85e6-c7f636e3ebed.svg";
const imgEntiaLogotipo = "https://www.figma.com/api/mcp/asset/abcbd4d3-7df8-4814-868d-0e7382ab705c.svg";

export default function Component07DivisorDeSeccion() {
  return (
    <div className="bg-[#eec000] relative size-full" data-node-id="30:904" data-name="07 · Divisor de sección">
      <div className="absolute h-[38px] left-[365px] top-[72px] w-[244px]" data-node-id="30:907" data-name="Meta" />
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="30:914" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#400] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="30:915" data-name="Regla lateral" />
      <div className="absolute h-[492px] left-[81px] overflow-clip top-[284px] w-[1759px]" data-node-id="31:917" data-name="Capa_1">
        <div className="absolute h-[492.026px] left-[213.67px] top-0 w-[1331.688px]" data-node-id="2009:594" data-name="Entia · Logotipo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEntiaLogotipo} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] overflow-clip top-[72px] whitespace-nowrap" data-node-id="31:925" data-name="Meta">
        <p className="font-['Source_Code_Pro:Medium'] font-medium leading-[0] relative shrink-0 text-[#400] text-[0px]" data-node-id="31:926">
          <span className="leading-[normal] text-[32px]">Entia</span>
          <span className="leading-[normal] text-[20.64px]">®</span>
        </p>
        <p className="font-['Source_Code_Pro:Light'] font-light leading-[normal] relative shrink-0 text-[32px] text-[rgba(68,0,0,0.45)]" data-node-id="31:927">{`Brand guidelines `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Source_Code_Pro:Medium'] font-medium leading-[normal] left-[80px] text-[#400] text-[15px] top-[74px] whitespace-nowrap" data-node-id="31:928">{`By Omónimo Design House `}</p>
      <p className="[word-break:break-word] absolute font-['Source_Code_Pro:Medium'] font-medium leading-[normal] left-[80px] text-[15px] text-[rgba(68,0,0,0.45)] top-[93px] whitespace-nowrap" data-node-id="31:929">{`(2026)© `}</p>
    </div>
  );
}
