import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TextInput from "./text-input";

export type TextInputFieldType = {
  className?: string;
  label?: string;
  showTextInput?: boolean;

  /** Style props */
  textInputFieldAlignSelf?: CSSProperties["alignSelf"];
  textInputFieldWidth?: CSSProperties["width"];
  controlElementsFlex?: CSSProperties["flex"];
  labelTextDecoration?: CSSProperties["textDecoration"];
  labelHeight?: CSSProperties["height"];
  labelColor?: CSSProperties["color"];
};

const TextInputField: NextPage<TextInputFieldType> = ({
  className = "",
  textInputFieldAlignSelf,
  textInputFieldWidth,
  controlElementsFlex,
  label,
  labelTextDecoration,
  labelHeight,
  labelColor,
  showTextInput,
}) => {
  const textInputFieldStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: textInputFieldAlignSelf,
      width: textInputFieldWidth,
    };
  }, [textInputFieldAlignSelf, textInputFieldWidth]);

  const controlElementsStyle: CSSProperties = useMemo(() => {
    return {
      flex: controlElementsFlex,
    };
  }, [controlElementsFlex]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: labelTextDecoration,
      height: labelHeight,
      color: labelColor,
    };
  }, [labelTextDecoration, labelHeight, labelColor]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-4 text-left text-sm text-primary font-body-small ${className}`}
      style={textInputFieldStyle}
    >
      <div
        className="flex-1 flex flex-row items-center justify-start gap-2"
        style={controlElementsStyle}
      >
        <a
          className="[text-decoration:none] w-[138px] relative tracking-[-0.02em] leading-[19px] text-[inherit] inline-block shrink-0"
          style={labelStyle}
        >
          {label}
        </a>
        <TextInput
          property1="Dropdown"
          showTextInput
          valueSet="自由記入"
          showChevronDownIcon={false}
        />
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
  );
};

export default TextInputField;
