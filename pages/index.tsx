import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Radio } from "antd";
import Image from "next/image";
import SidebarList from "../components/sidebar-list";
import Navigation1 from "../components/navigation1";
import Breadcrumbs from "../components/breadcrumbs";
import TextInputField from "../components/text-input-field";
import TextInput from "../components/text-input";

const Screen1: NextPage = () => {
  return (
    <div className="relative bg-aliceblue w-full overflow-hidden flex flex-row items-start justify-start pt-2.5 px-0 pb-px box-border leading-[normal] tracking-[normal] [row-gap:20px] mq1825:flex-wrap">
      <div className="mt-[-11px] bg-aliceblue border-secondary border-r-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-4 px-0 pb-0">
        <div className="flex flex-row items-start justify-start py-0 px-3">
          <SidebarList />
        </div>
        <Navigation1 />
      </div>
      <div className="h-0 w-[1920px] relative hidden max-w-full" />
      <footer className="flex flex-col items-start justify-start gap-2 max-w-full shrink-0 text-left text-sm text-cornflowerblue font-body-small">
        <div className="flex flex-row items-start justify-start py-0 px-5">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <Breadcrumbs property1="Thu gọn" />
            <div className="h-[22px] flex flex-row items-center justify-center">
              <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[22px] font-bold text-[inherit]">
                User検索
              </a>
            </div>
          </div>
        </div>
        <section className="flex flex-col items-end justify-start gap-[82px] max-w-full text-left text-sm text-primary font-body-small mq450:gap-5 mq925:gap-[41px]">
          <div className="w-[1728px] overflow-x-auto flex flex-row items-start justify-between pt-3 px-6 pb-0 box-border max-w-full gap-5">
            <div className="flex flex-col items-start justify-start gap-4 max-w-full">
              <TextInputField label="CODE" showTextInput={false} />
              <div className="w-[495px] flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    メールアドレス
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 max-w-full mq450:flex-wrap">
                  <div className="h-[38px] w-[138px] relative tracking-[-0.02em] leading-[19px] flex items-center shrink-0">
                    アカウント状態
                  </div>
                  <input
                    className="border-lightsteelblue border-[1px] border-solid [outline:none] bg-lightsteelblue flex-1 rounded-md box-border flex flex-row items-center justify-center p-1.5 font-body-small text-sm text-primary min-w-[227px] min-h-[38px] max-w-full"
                    type="text"
                  />
                </div>
                <TextInput
                  property1="Dropdown"
                  showTextInput={false}
                  valueSet="データ有り"
                  showChevronDownIcon
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    ハンドルネーム
                  </div>
                  <div className="w-[222px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 gap-1 text-secondary">
                    <Image
                      className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      自由記入
                    </div>
                    <Image
                      className="w-[22px] relative h-[22px] overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
              </div>
              <div className="flex flex-row items-center justify-start gap-2 max-w-full mq925:flex-wrap">
                <div className="w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                  性別
                </div>
                <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[136px] box-border gap-2 max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border">
                  <Image
                    className="h-6 w-6 relative rounded-10xs"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[19px] inline-block min-w-[29px]">
                    男性
                  </div>
                  <Image
                    className="h-6 w-6 relative rounded-10xs"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[19px] inline-block min-w-[29px]">
                    女性
                  </div>
                  <Radio className="h-6 w-6 relative" />
                  <div className="relative tracking-[-0.02em] leading-[19px] text-lightcoral-200">
                    その他
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    地域
                  </div>
                  <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
                </div>
                {showTextInput && (
                  <TextInput
                    property1="Dropdown"
                    showTextInput={false}
                    textInputFlex="unset"
                    textInputWidth="111px"
                    valueSet="データ有り"
                    valueSetFlex="unset"
                    valueSetHeight="22px"
                    valueSetWidth="70px"
                    valueSetDisplay="inline-block"
                    valueSetColor="#9ba5b7"
                    valueSetTextDecoration="unset"
                    showChevronDownIcon
                  />
                )}
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="w-[368px] flex flex-row items-center justify-start gap-2 max-w-full mq450:flex-wrap">
                  <div className="w-[138px] flex flex-row items-center justify-start">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                      生年月日
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px] text-center text-secondary">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] font-body-small text-sm text-primary min-w-[72px] min-h-[38px]" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full text-center text-secondary mq450:flex-wrap">
                <div className="w-[368px] flex flex-row items-center justify-start gap-2 max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[138px]" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px]">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] font-body-small text-sm text-primary min-w-[72px] min-h-[38px]" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right">
                      歳
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right">
                      歳
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <TextInputField
                textInputFieldAlignSelf="stretch"
                textInputFieldWidth="unset"
                controlElementsFlex="unset"
                label="全体備考１"
                labelTextDecoration="unset"
                labelHeight="unset"
                labelColor="#545f71"
                showTextInput
              />
              <TextInputField
                textInputFieldAlignSelf="stretch"
                textInputFieldWidth="unset"
                controlElementsFlex="unset"
                label="全体備考２(注意)"
                labelTextDecoration="unset"
                labelHeight="unset"
                labelColor="#545f71"
                showTextInput
              />
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    広告CODE
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
              </div>
              <div className="flex flex-row items-center justify-start gap-2 max-w-full text-aliceblue mq925:flex-wrap">
                <div className="w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                  性別
                </div>
                <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[219px] box-border gap-2 max-w-full text-primary mq450:flex-wrap mq450:pr-5 mq450:box-border">
                  <Image
                    className="h-6 w-6 relative rounded-10xs"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/radio-button.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[19px]">
                    あり
                  </div>
                  <Image
                    className="h-6 w-6 relative rounded-10xs"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/radio-button-4.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[19px]">
                    なし
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    <p className="m-0">現在ポイント</p>
                    <p className="m-0">（合計）</p>
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <div className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 gap-1">
                  <Image
                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                    width={24}
                    height={24}
                    alt=""
                    src="/eye.svg"
                  />
                  <input
                    className="[border:none] [outline:none] font-body-small text-sm bg-[transparent] flex-1 relative tracking-[-0.02em] leading-[22px] text-primary text-left"
                    type="text"
                  />
                  <Image
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    width={22}
                    height={22}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="h-[19px] w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    <p className="m-0">現在ポイント</p>
                    <p className="m-0">（通常のみ）</p>
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="h-[19px] w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    <p className="m-0">現在ポイント</p>
                    <p className="m-0">（ボーナスのみ）</p>
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="h-[19px] w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    累計購入ポイント
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="h-[19px] w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 text-aliceblue">
                <div className="flex-1 flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    アカウント状態
                  </div>
                  <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
                </div>
                {showTextInput && (
                  <TextInput
                    property1="Dropdown"
                    showTextInput={false}
                    textInputFlex="unset"
                    textInputWidth="111px"
                    valueSet="データ有り"
                    valueSetFlex="unset"
                    valueSetHeight="22px"
                    valueSetWidth="70px"
                    valueSetDisplay="inline-block"
                    valueSetColor="#9ba5b7"
                    valueSetTextDecoration="unset"
                    showChevronDownIcon
                  />
                )}
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    累計購入金額（税込）
                  </div>
                  <input
                    className="border-primary border-[1px] border-solid [outline:none] bg-white w-[222px] rounded-md box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary"
                    type="text"
                  />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <TextInputField
                textInputFieldAlignSelf="stretch"
                textInputFieldWidth="unset"
                controlElementsFlex="unset"
                labelTextDecoration="unset"
                labelHeight="19px"
                labelColor="#545f71"
                showTextInput
              />
              <div className="self-stretch flex flex-row items-center justify-start gap-4 text-aliceblue">
                <div className="flex-1 flex flex-row items-center justify-start gap-2">
                  <div className="w-[138px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0">
                    アカウント状態
                  </div>
                  <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start p-2 font-body-small text-sm text-secondary" />
                </div>
                {showTextInput && (
                  <TextInput
                    property1="Dropdown"
                    showTextInput={false}
                    textInputFlex="unset"
                    textInputWidth="111px"
                    valueSet="データ有り"
                    valueSetFlex="unset"
                    valueSetHeight="22px"
                    valueSetWidth="70px"
                    valueSetDisplay="inline-block"
                    valueSetColor="#9ba5b7"
                    valueSetTextDecoration="unset"
                    showChevronDownIcon
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="w-[138px] flex flex-row items-center justify-start">
                    <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[19px] text-[inherit]">
                      登録日
                    </a>
                  </div>
                  <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px] text-center text-sm text-secondary font-body-small">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1 text-left">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[19px] text-[inherit]">
                        年
                      </a>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[19px] text-[inherit]">
                        日
                      </a>
                    </div>
                  </nav>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full text-center text-secondary mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[138px]" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px]">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1 text-left">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[19px] text-[inherit]">
                        年
                      </a>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[19px] text-[inherit]">
                        日
                      </a>
                    </div>
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right inline-block min-w-[43px]">
                      日経過
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <select className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 font-body-small text-sm text-secondary min-w-[144px] min-h-[38px]" />
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="w-[138px] flex flex-row items-center justify-start">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                      初回購入日
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px] text-center text-secondary">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full text-center text-secondary mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[138px]" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px]">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[22px] inline-block min-w-[65px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right">
                      登録日からの経過日数
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[22px] inline-block min-w-[65px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right">
                      登録日からの経過日数
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="w-[138px] flex flex-row items-center justify-start">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                      最終ログイン日
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px] text-center text-secondary">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full text-center text-secondary mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[138px]" />
                  <div className="flex-1 flex flex-row items-center justify-start gap-1 min-w-[144px]">
                    <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        ----
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        年
                      </div>
                    </div>
                    <div className="w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-center justify-center p-1.5 gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        月
                      </div>
                    </div>
                    <div className="h-[38px] w-10 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[5px] gap-1">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        width={24}
                        height={24}
                        alt=""
                        src="/eye.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        --
                      </div>
                    </div>
                    <div className="w-6 flex flex-row items-center justify-center text-primary">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[19px]">
                        日
                      </div>
                    </div>
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-secondary">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      数字入力
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[22px] text-primary text-right inline-block min-w-[43px]">
                      日経過
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[239px] max-w-full mq450:flex-wrap">
                  <div className="h-[19px] w-[139px] relative tracking-[-0.02em] leading-[19px] inline-block shrink-0" />
                  <div className="flex-1 rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-1 gap-1 min-w-[144px] min-h-[38px] text-right">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/eye.svg"
                    />
                    <input
                      className="[border:none] [outline:none] font-body-small text-sm bg-[transparent] flex-1 relative tracking-[-0.02em] leading-[22px] text-secondary text-left"
                      type="text"
                    />
                    <div className="relative tracking-[-0.02em] leading-[22px] inline-block min-w-[43px]">
                      日経過
                    </div>
                    <Image
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                      width={22}
                      height={22}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <select className="w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 font-body-small text-sm text-primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 px-6 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-4 max-w-full mq925:flex-wrap">
              <button className="cursor-pointer border-primary border-[1px] border-solid py-[11px] px-[18px] bg-white flex-1 rounded-md box-border overflow-hidden flex flex-row items-start justify-start gap-2.5 min-w-[115px] min-h-[48px]">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  width={24}
                  height={24}
                  alt=""
                  src="/pluscircle.svg"
                />
                <div className="relative text-sm tracking-[-0.02em] leading-[22px] font-body-small text-primary text-left">
                  もっと検索条件を見る
                </div>
              </button>
              <button className="cursor-pointer border-primary border-[1px] border-solid py-[11px] pl-[47px] pr-11 bg-white flex-[0.6043] rounded-md box-border overflow-hidden flex flex-row items-start justify-start gap-2.5 min-w-[115px] min-h-[48px] mq450:flex-1">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  width={24}
                  height={24}
                  alt=""
                  src="/pluscircle1.svg"
                />
                <div className="relative text-sm tracking-[-0.02em] leading-[22px] font-body-small text-primary text-left">
                  条件をクリア
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3 px-4 bg-primary rounded-md overflow-hidden flex flex-row items-start justify-start gap-2.5">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  width={24}
                  height={24}
                  alt=""
                  src="/pluscircle1.svg"
                />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/search.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative text-sm tracking-[-0.02em] leading-[22px] font-semibold font-body-small text-white text-left">
                    この条件で検索
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Screen1;
