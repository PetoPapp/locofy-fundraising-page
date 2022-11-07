import { FunctionComponent } from "react";
import MainButton from "../components/MainButton";

const ContinuousFundraisingInvestm: FunctionComponent = () => {
  return (
    <div className="relative rounded-[12px] bg-white w-full flex flex-row items-start justify-start gap-[0px] text-left text-[28px] text-black font-dm-sans">
      <nav className="self-stretch relative bg-white border-t-[0px_solid_#f5f5f5] border-r-[1px_solid_#f5f5f5] border-b-[0px_solid_#f5f5f5] border-l-[0px_solid_#f5f5f5] box-border w-[280px] shrink-0 overflow-hidden lg:hidden">
        <div className="absolute w-[calc(100%_-_60px)] top-[125px] right-[30px] left-[30px] h-[288px]">
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[180px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
            <div className="rounded-[8px] w-[220px] flex flex-col p-[10px_12px] box-border items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[25px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../user.svg"
                />
                <div className="relative text-base capitalize font-medium font-dm-sans text-black text-left inline-block">
                  Account
                </div>
              </div>
            </div>
            <div className="rounded-[8px] flex flex-col p-[10px_12px] box-border items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[25px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../power.svg"
                />
                <div className="relative text-base capitalize font-medium font-dm-sans text-black text-left inline-block">
                  Log Out
                </div>
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[32px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
            <div className="rounded-[8px] w-[220px] flex flex-col p-[10px_12px] box-border items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[25px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../dashboard.svg"
                />
                <div className="relative text-base capitalize font-medium font-dm-sans text-black text-left inline-block">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="rounded-[8px] [background:linear-gradient(90deg,_#f5fcf7,_rgba(245,_252,_247,_0.98)_1.56%,_#fff)] w-[220px] flex flex-col p-[10px_12px] box-border items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[25px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../seeding.svg"
                />
                <b className="relative text-base capitalize inline-block font-dm-sans text-green-200 text-left">
                  Fundraising
                </b>
              </div>
            </div>
          </button>
          <b className="absolute top-[0px] left-[0px] text-xs capitalize inline-block font-dm-sans text-gray-500 text-left">
            Menu
          </b>
          <div className="absolute top-[154.5px] left-[-0.5px] border-t-[1px_solid_#000] box-border w-[193px] h-[1px] opacity-[0.05]" />
        </div>
        <div className="absolute top-[30px] left-[30px] flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative rounded-[12px] w-[40px] h-[40px] shrink-0 object-cover"
            alt=""
            src="../image@2x.png"
          />
          <img
            className="relative w-[115px] h-[20.15px] shrink-0"
            alt=""
            src="../button.svg"
          />
        </div>
        <div className="absolute bottom-[0px] left-[0px] w-[279px] h-[405px] overflow-hidden">
          <img
            className="absolute bottom-[0px] left-[0px] w-[280px] h-[337px] overflow-hidden hidden opacity-[0.2]"
            alt=""
            src="../text-input.svg"
          />
          <div className="absolute bottom-[44px] left-[43px] flex flex-col items-start justify-center gap-[25px]">
            <b className="relative text-lg leading-[160%] capitalize flex font-dm-sans text-black text-left items-center w-[214px] h-[38px] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`Explore seeds from `}</p>
                <p className="m-[0]">other Founders</p>
              </span>
            </b>
            <button className="cursor-pointer [border:none] p-[10px_20px] bg-[transparent] rounded-[12px] [background:linear-gradient(-59.35deg,_#40bc5d,_#50d76f)] shadow-[0px_5px_20px_rgba(64,_188,_93,_0.4)] h-[46px] shrink-0 flex flex-row box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../seeding1.svg"
              />
              <b className="relative text-lg tracking-[-0.02em] leading-[150%] inline-block font-dm-sans text-white text-center">
                Explore Seeds
              </b>
            </button>
          </div>
          <img
            className="absolute bottom-[124.91px] left-[0px] w-[279px] h-[280.09px] object-cover"
            alt=""
            src="../image1@2x.png"
          />
        </div>
      </nav>
      <div className="flex-1 h-[982px] flex flex-col items-start justify-start gap-[7px]">
        <div className="self-stretch flex flex-col p-[30px] box-border items-start justify-start gap-[45px]">
          <div className="self-stretch flex flex-row items-start justify-between">
            <button className="cursor-pointer [border:none] p-[9px_12px] bg-[transparent] rounded-[12px] [background:linear-gradient(90deg,_#f5fcf7,_rgba(245,_252,_247,_0.98)_1.56%,_#fff)] flex flex-row box-border items-center justify-start gap-[12px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../seeding2.svg"
              />
              <b className="relative text-base capitalize inline-block font-dm-sans text-black text-left">
                Explore growing Seeds
              </b>
              <img
                className="relative w-[5.5px] h-[9.73px] shrink-0"
                alt=""
                src="../arrow.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[45px]">
              <img
                className="relative w-[28px] h-[28px] shrink-0"
                alt=""
                src="../vertical-container.svg"
              />
              <button className="cursor-pointer [border:none] p-[3px_3px_3px_16px] bg-[transparent] rounded-[12px] [background:linear-gradient(90deg,_#f5fcf7,_rgba(245,_252,_247,_0.98)_1.56%,_#fff)] flex flex-row box-border items-center justify-start gap-[12px]">
                <img
                  className="relative w-[9.73px] h-[5.5px] shrink-0"
                  alt=""
                  src="../arrow1.svg"
                />
                <img
                  className="relative w-[26px] h-[26px] shrink-0 overflow-hidden"
                  alt=""
                  src="../walleticon.svg"
                />
                <b className="relative text-base tracking-[-0.02em] leading-[150%] inline-block font-dm-sans text-gray-700 text-left">
                  1.2 ETH
                </b>
                <b className="relative text-base tracking-[-0.02em] leading-[150%] inline-block font-dm-sans text-gray-700 text-left">
                  johndoe.eth
                </b>
                <img
                  className="relative rounded-[10px] w-[37px] h-[36px] shrink-0 object-cover"
                  alt=""
                  src="../image2@2x.png"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between Macbook:flex-col Macbook:gap-[15px]">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../vertical-container1.svg"
              />
              <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                Continuous Fundraising
              </b>
              <div className="rounded-[10px] bg-gray-200 flex flex-row p-[8px_14px] box-border items-start justify-start text-base text-orange">
                <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  10 Oct. - now
                </b>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-row items-start justify-start gap-[20px]">
              <MainButton title="Pause Fundraising" icon="../playerpause.svg" />
              <div className="rounded-[10px] bg-gray-100 flex flex-row p-[10px_14px] box-border items-center justify-start gap-[6px]">
                <img
                  className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                  alt=""
                  src="../code.svg"
                />
                <b className="relative text-base tracking-[-0.02em] leading-[150%] capitalize inline-block font-dm-sans text-black text-left">
                  Generate Embed
                </b>
              </div>
              <div className="rounded-[10px] bg-gray-100 flex flex-row p-[10px_14px] box-border items-center justify-start gap-[6px]">
                <img
                  className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                  alt=""
                  src="../link.svg"
                />
                <b className="relative text-base tracking-[-0.02em] leading-[150%] capitalize inline-block font-dm-sans text-black text-left">
                  Copy Shareable Link
                </b>
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row p-[0px_30px_30px] box-border items-start justify-start gap-[53px] text-base">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-center">
              <div className="h-[48px] flex flex-col p-[0px_22px] box-border items-center justify-center">
                <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  Details
                </b>
              </div>
              <div className="rounded-[12px] [background:linear-gradient(90deg,_#f5fcf7,_rgba(245,_252,_247,_0.98)_1.56%,_#fff)] h-[48px] flex flex-col p-[0px_22px] box-border items-center justify-center text-green-200">
                <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  Investments
                </b>
              </div>
              <div className="h-[48px] flex flex-col p-[0px_22px] box-border items-center justify-center">
                <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  Private Investors
                </b>
              </div>
              <div className="h-[48px] flex flex-col p-[0px_22px] box-border items-center justify-center">
                <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  Updates
                </b>
              </div>
            </div>
            <div className="self-stretch relative h-[16px] shrink-0 overflow-hidden text-xs text-gray-600">
              <div className="absolute top-[0px] left-[0px] capitalize flex items-center w-[35.19px]">
                Wallet
              </div>
              <div className="absolute top-[0px] right-[235.26px] capitalize flex items-center w-[80.43px]">
                Tokens Minted
              </div>
              <div className="absolute top-[0px] right-[133.72px] capitalize flex items-center w-[47.25px]">
                Invested
              </div>
              <div className="absolute top-[0px] right-[0px] capitalize text-right flex items-center w-[56.3px]">
                Etherscan
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[108.88px] tracking-[-0.02em] leading-[150%] capitalize flex text-gray-700 items-center w-[72.58px]">
                  + 1200 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  2430 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button1.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user1.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon1.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0x39680...eB6597
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[106.46px] tracking-[-0.02em] leading-[150%] capitalize inline-block text-gray-700">
                  + 2360 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  3220 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button2.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user2.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus1.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon2.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0x19C1E...11F8c
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[108.88px] tracking-[-0.02em] leading-[150%] capitalize flex text-gray-700 items-center w-[72.58px]">
                  + 950 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  490 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user3.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus2.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon3.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0x56734...03447
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[108.88px] tracking-[-0.02em] leading-[150%] capitalize flex text-gray-700 items-center w-[72.58px]">
                  + 120 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  90 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button4.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user4.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus3.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon2.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0xD8a53...69f97
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[100.46px] tracking-[-0.02em] leading-[150%] capitalize inline-block text-gray-700">
                  + 16500 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  4460 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button5.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user5.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus4.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon1.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0xD5449...e0f4f
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[107.46px] tracking-[-0.02em] leading-[150%] capitalize inline-block text-gray-700">
                  + 1000 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  1390 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button6.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user6.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus5.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon6.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0x927ae...44209
                  </b>
                </div>
              </div>
              <div className="self-stretch relative h-[70px] shrink-0 overflow-hidden">
                <div className="absolute top-[69.5px] left-[2.52px] border-t-[1px_solid_#f5f5f5] box-border w-[742.98px] h-[1px]" />
                <b className="absolute top-[12.86%] right-[108.88px] tracking-[-0.02em] leading-[150%] capitalize flex text-gray-700 items-center w-[72.58px]">
                  + 1330 EUR
                </b>
                <b className="absolute top-[calc(50%_-_26px)] right-[241.95px] tracking-[-0.02em] leading-[150%] capitalize flex items-center w-[74.6px]">
                  1820 TKN
                </b>
                <div className="absolute top-[0px] right-[0px] w-[38.31px] flex flex-row items-center justify-end">
                  <img
                    className="relative rounded-[10px] w-[38px] h-[38px] shrink-0 overflow-hidden"
                    alt=""
                    src="../button7.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_6px)] left-[0px] w-[386.11px] flex flex-row p-[0px_0px_0px_55px] box-border items-center justify-start gap-[24px] text-sm text-gray-600">
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../user7.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Owned 0.32%
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                      alt=""
                      src="../calendarminus6.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                      Invested at 28 February 2023
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1px] left-[0px] w-[190.53px] flex flex-row items-center justify-start gap-[18px] text-lg">
                  <div className="rounded-[8px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[22px] h-[22px] shrink-0 overflow-hidden"
                      alt=""
                      src="../walleticon6.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    0x326gs...os829
                  </b>
                </div>
              </div>
            </div>
          </div>
          <aside className="flex flex-col items-start justify-start gap-[25px] text-left text-lg text-black font-dm-sans md:hidden">
            <div className="rounded-[12px] bg-gray-300 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[45px]">
              <div className="relative w-[314px] h-[150px] shrink-0">
                <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                  Totaly Raised
                </div>
                <b className="absolute top-[169px] left-[0px] text-base tracking-[-0.02em] leading-[150%] capitalize hidden text-green-100">
                  <span>+ 12 899€</span>
                  <span className="text-black"> in last 14 days</span>
                </b>
                <b className="absolute top-[22px] left-[0px] text-xl tracking-[-0.02em] leading-[150%] capitalize inline-block">{`223 855 EUR `}</b>
                <div className="absolute top-[82px] left-[0px] w-[314px] flex flex-row items-end justify-start gap-[14px]">
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[18px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[51px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[15px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[41px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[68px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[28px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[68px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[18px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[51px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[20px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[41px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[58px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[33px]" />
                  <div className="flex-1 relative rounded-[8px] bg-green-200 h-[68px]" />
                </div>
              </div>
              <div className="relative w-[325px] h-[148px] shrink-0">
                <div className="absolute top-[0px] left-[0.5px] tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                  Tokens Minted
                </div>
                <b className="absolute top-[169px] left-[0.5px] text-base tracking-[-0.02em] leading-[150%] capitalize hidden text-green-100">
                  <span>+ 23 120 TKN</span>
                  <span className="text-black"> in last 30 days</span>
                </b>
                <b className="absolute top-[22px] left-[0.5px] text-xl tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  489 233 TKN
                </b>
                <img
                  className="absolute top-[75.51px] left-[-0.95px] rounded-[100px] w-[326.13px] h-[73.65px]"
                  alt=""
                  src="../vector-2.svg"
                />
              </div>
              <div className="relative w-[105px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[150%] capitalize font-medium inline-block">
                  total Investors
                </div>
                <b className="absolute top-[169px] left-[0px] text-base tracking-[-0.02em] leading-[150%] capitalize hidden text-green-100">
                  <span>+ 23 120 TKN</span>
                  <span className="text-black"> in last 30 days</span>
                </b>
                <b className="absolute top-[22px] left-[0px] text-xl tracking-[-0.02em] leading-[150%] capitalize inline-block">
                  36
                </b>
              </div>
            </div>
            <div className="rounded-[12px] bg-gray-400 flex flex-col p-[18px_0px] box-border items-start justify-start text-base">
              <div className="w-[375px] flex flex-row p-[0px_20px] box-border items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-[26px]">
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>Maximum amount to buy:</span>
                    </p>
                    <p className="m-[0]">
                      <b>8000 EUROC</b>
                    </p>
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>Price per Token:</span>
                    </p>
                    <p className="m-[0]">
                      <b>1.20 EUROC</b>
                    </p>
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>Currency:</span>
                    </p>
                    <p className="m-[0]">
                      <b>EUROC</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[26px]">
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>Minimal amount to Buy:</span>
                    </p>
                    <p className="m-[0]">
                      <b>100 EUROC</b>
                    </p>
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>pre-Money Valuation:</span>
                    </p>
                    <p className="m-[0]">
                      <b>200.000 EUROC</b>
                    </p>
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] capitalize inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span>Stage:</span>
                    </p>
                    <p className="m-[0]">
                      <b>Pre-seed</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContinuousFundraisingInvestm;
