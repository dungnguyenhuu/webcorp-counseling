import type { NextPage } from "next";
import Image from "next/image";
import MenuCon from "./menu-con";
import MenuItem from "./menu-item";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[672px] flex flex-col items-start justify-start pt-0 px-3 pb-6 box-border relative gap-[6.6px] mt-[-1216px] text-left text-base text-primary font-body-small ${className}`}
    >
      <MenuCon
        property1
        menuConHeight="30px"
        menuName="User検索"
        menuNameFontFamily="Inter"
      />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
          <MenuItem
            property1="Mở"
            menuItemHeight="unset"
            menu="監視・チェック関連"
            menuTextDecoration="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuNameFontFamily="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="退会申請一覧"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="ブロック一覧"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="Perfomer通知ログ"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="User通知ログ"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="h-[52px] w-[234px] relative rounded-lg overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px] inline-block min-w-[68px]">
            Statistics
          </div>
          <Image
            className="absolute top-[calc(50%_-_12px)] left-[16px] w-6 h-6 overflow-hidden"
            width={24}
            height={24}
            alt=""
            src="/chartsquarebar.svg"
          />
          <Image
            className="absolute top-[16px] right-[8px] w-5 h-5 overflow-hidden"
            width={20}
            height={20}
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <MenuItem
        property1="Mở"
        menuItemHeight="38px"
        menu="各種設定関連"
        menuTextDecoration="unset"
      />
      <MenuCon
        property1={false}
        menuConHeight="30px"
        menuName="Perfomerお知らせ設定"
        menuNameFontFamily="Inter"
      />
      <MenuCon
        property1={false}
        menuConHeight="30px"
        menuName="Userお知らせ設定"
        menuNameFontFamily="Inter"
      />
      <MenuCon
        property1={false}
        menuConHeight="30px"
        menuName="Userバナー設定"
        menuNameFontFamily="Inter"
      />
      <MenuCon
        property1={false}
        menuConHeight="30px"
        menuName="消費/獲得設定"
        menuNameFontFamily="Inter"
      />
      <MenuCon
        property1={false}
        menuConHeight="30px"
        menuName="ボーナス設定"
        menuNameFontFamily="Inter"
      />
      <div className="w-full !m-[0] absolute right-[0px] bottom-[1px] left-[0px] bg-aliceblue border-secondary border-t-[1px] border-solid box-border flex flex-row items-start justify-start z-[1]">
        <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-end justify-between py-3.5 pl-4 pr-[7px] gap-5">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/usercircle.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[22px]">
            ログアウト
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <Image
              className="w-5 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
