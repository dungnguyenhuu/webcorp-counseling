import type { NextPage } from "next";
import Image from "next/image";
import MenuItem from "./menu-item";
import MenuCon from "./menu-con";

export type SidebarListType = {
  className?: string;
};

const SidebarList: NextPage<SidebarListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[168px] h-[1450px] flex flex-col items-start justify-start gap-2 text-left text-base text-primary font-body-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-sm">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <MenuItem property1="Mở" menu="成績関連" />
          <MenuCon property1={false} menuName="全体成績（Dashboad）" />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="ランキング（全体）"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="日別売上"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="w-[168px] relative rounded-lg h-[52px] overflow-hidden shrink-0 hidden text-base">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px]">
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
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <MenuItem
            property1="Mở"
            menuItemHeight="unset"
            menu="検索関連"
            menuTextDecoration="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="Perfomer検索"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="w-[234px] relative rounded-lg h-[52px] overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px]">
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
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="入会特典設定"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="アイテム設定"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="紹介制度設定"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="メンテナンス設定"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="検索トレンド管理"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="単価・税・精算の設定"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="w-[234px] relative rounded-lg h-[52px] overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px]">
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
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <MenuItem
            property1="Mở"
            menuItemHeight="unset"
            menu="Adminアカウント管理"
            menuTextDecoration="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="新規追加/編集/削除"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="w-[234px] relative rounded-lg h-[52px] overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px]">
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
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <MenuItem
            property1="Mở"
            menuItemHeight="unset"
            menu="アプリバージョン管理"
            menuTextDecoration="unset"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="User_iOS"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="User_Android"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="Performer_iOS"
            menuNameFontFamily="Inter"
          />
          <MenuCon
            property1={false}
            menuConHeight="unset"
            menuName="Performer_Android"
            menuNameFontFamily="Inter"
          />
        </div>
        <div className="w-[234px] relative rounded-lg h-[52px] overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[64px] tracking-[-0.02em] leading-[22px]">
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
    </div>
  );
};

export default SidebarList;
