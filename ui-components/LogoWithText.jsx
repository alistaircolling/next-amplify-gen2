/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function LogoWithText(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Union: {},
        Vector39193044: {},
        Vector39193045: {},
        logo: {},
        LogoWithText: {},
      },
      variantValues: { color: "neutral" },
    },
    {
      overrides: {
        Union: {
          paths: [
            {
              d: "M13.5324 18.7577C13.5818 18.8432 13.6732 18.8959 13.7722 18.8959L15.926 18.8959C16.1391 18.8959 16.2723 18.6656 16.1658 18.4814L8.34201 4.95697C8.23545 4.77276 7.96904 4.77276 7.86247 4.95697C5.25995 9.45579 2.65123 13.9748 0.0374783 18.4951C-0.069038 18.6793 0.0641708 18.9095 0.277275 18.9095L10.3655 18.9095C10.5786 18.9095 10.7118 18.6793 10.6053 18.495L9.57336 16.7112C9.5239 16.6257 9.4325 16.5731 9.33359 16.5731L4.17381 16.5731C4.06724 16.5731 4.00064 16.4579 4.05392 16.3658L7.98142 9.5766C8.03471 9.4845 8.16791 9.4845 8.22119 9.5766L13.5324 18.7577Z",
              fill: "rgba(64,106,191,1)",
              fillRule: "nonzero",
            },
            {
              d: "M9.576 1.9949C9.52655 2.08039 9.52655 2.18572 9.576 2.27122L19.1133 18.7577C19.1627 18.8432 19.2541 18.8959 19.3531 18.8959L21.5013 18.8959C21.7144 18.8959 21.8476 18.6656 21.741 18.4814L11.1296 0.138158C11.0231 -0.0460529 10.7567 -0.0460525 10.6501 0.138158L9.576 1.9949Z",
              fill: "rgba(64,106,191,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Vector39193044: {
          paths: [
            {
              d: "M7.33161 7.87926L5.47663 2.22598L3.63931 7.87926L7.33161 7.87926ZM0.300331 12.5255C0.20611 12.5255 0.129555 12.5079 0.0706662 12.4725C0.0235554 12.4254 0 12.3665 0 12.2959C0 12.2488 0.0353331 12.1251 0.105999 11.9249L4.2223 0.671327C4.26941 0.529995 4.33419 0.429885 4.41664 0.370997C4.49908 0.312109 4.61097 0.282664 4.7523 0.282664L6.30696 0.282664C6.44829 0.282664 6.56018 0.312109 6.64262 0.370997C6.72506 0.429885 6.78984 0.529995 6.83695 0.671327L10.9356 11.9249C11.0063 12.1251 11.0416 12.2488 11.0416 12.2959C11.0416 12.3665 11.0121 12.4254 10.9533 12.4725C10.9061 12.5079 10.8355 12.5255 10.7413 12.5255L9.20427 12.5255C9.07471 12.5255 8.9746 12.502 8.90394 12.4549C8.84505 12.396 8.79205 12.3018 8.74494 12.1722L7.82628 9.45157L3.12698 9.45157L2.22598 12.1722C2.17887 12.3135 2.11999 12.4078 2.04932 12.4549C1.99043 12.502 1.89621 12.5255 1.76665 12.5255L0.300331 12.5255Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M13.8931 12.5255C13.6104 12.5255 13.4337 12.396 13.3631 12.1369L10.1124 0.865658C10.0653 0.700771 10.0418 0.588883 10.0418 0.529995C10.0418 0.365108 10.1419 0.282664 10.3421 0.282664L11.9497 0.282664C12.1971 0.282664 12.3502 0.400441 12.4091 0.635994L14.6881 10.1936L16.7904 1.00699C16.8375 0.747882 17.0083 0.618328 17.3027 0.618328L18.7514 0.618328C19.034 0.618328 19.2048 0.747882 19.2637 1.00699L21.3837 10.1759L23.6627 0.635994C23.7216 0.400441 23.8747 0.282664 24.122 0.282664L25.6413 0.282664C25.8415 0.282664 25.9416 0.365108 25.9416 0.529995C25.9416 0.588883 25.9181 0.700771 25.871 0.865658L22.638 12.1369C22.5673 12.396 22.3907 12.5255 22.108 12.5255L20.6064 12.5255C20.3237 12.5255 20.147 12.396 20.0764 12.1369L17.9917 3.3213L15.9247 12.1369C15.8541 12.396 15.6774 12.5255 15.3947 12.5255L13.8931 12.5255Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M30.5093 12.8259C29.9911 12.8259 29.4552 12.7788 28.9016 12.6845C28.3598 12.5903 27.877 12.4667 27.453 12.3135C27.2645 12.2547 27.1409 12.184 27.082 12.1015C27.0231 12.0191 26.9936 11.8895 26.9936 11.7129L26.9936 10.8472C26.9936 10.7412 27.0172 10.6588 27.0643 10.5999C27.1114 10.5292 27.1762 10.4939 27.2586 10.4939C27.3764 10.4939 27.5766 10.5351 27.8593 10.6176C28.2362 10.7236 28.672 10.8178 29.1666 10.9002C29.6613 10.9709 30.1088 11.0062 30.5093 11.0062C31.3455 11.0062 31.9874 10.859 32.4349 10.5646C32.8825 10.2583 33.1063 9.82257 33.1063 9.25724C33.1063 8.8568 32.9708 8.52703 32.6999 8.26792C32.429 8.00881 31.952 7.7497 31.2689 7.49059L29.6966 6.88993C28.7073 6.51305 27.9888 6.0655 27.5413 5.54728C27.0937 5.01728 26.87 4.35773 26.87 3.56863C26.87 2.47331 27.2527 1.60765 28.0183 0.971657C28.7956 0.323886 29.8379 0 31.1453 0C32.0286 0 32.9767 0.153109 33.9896 0.459329C34.178 0.518217 34.3017 0.588883 34.3606 0.671327C34.4195 0.753771 34.4489 0.883325 34.4489 1.05999L34.4489 1.90798C34.4489 2.01398 34.4254 2.10231 34.3782 2.17298C34.3311 2.23187 34.2664 2.26131 34.1839 2.26131C34.0779 2.26131 33.8777 2.22009 33.5833 2.13765C32.7706 1.92565 32.0168 1.81965 31.3219 1.81965C29.7555 1.81965 28.9723 2.34376 28.9723 3.39197C28.9723 3.79241 29.1136 4.12218 29.3963 4.38129C29.6789 4.6404 30.1795 4.89951 30.8979 5.15862L32.3996 5.70628C33.3889 6.07138 34.1015 6.51305 34.5372 7.03126C34.9848 7.54948 35.2086 8.20903 35.2086 9.00991C35.2086 10.1995 34.7905 11.1358 33.9543 11.8189C33.118 12.4902 31.9697 12.8259 30.5093 12.8259Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Vector39193045: {
          paths: [
            {
              d: "M7.33161 8.67424L5.47663 3.02097L3.63931 8.67424L7.33161 8.67424ZM0.300328 13.3205C0.206107 13.3205 0.129555 13.3029 0.0706668 13.2675C0.023556 13.2204 0 13.1615 0 13.0909C0 13.0438 0.0353318 12.9201 0.105998 12.7199L4.2223 1.46631C4.26941 1.32498 4.33419 1.22487 4.41664 1.16598C4.49908 1.1071 4.61097 1.07765 4.7523 1.07765L6.30695 1.07765C6.44829 1.07765 6.56018 1.1071 6.64262 1.16598C6.72506 1.22487 6.78984 1.32498 6.83695 1.46631L10.9356 12.7199C11.0063 12.9201 11.0416 13.0438 11.0416 13.0909C11.0416 13.1615 11.0121 13.2204 10.9533 13.2675C10.9061 13.3029 10.8355 13.3205 10.7413 13.3205L9.20427 13.3205C9.07471 13.3205 8.9746 13.297 8.90394 13.2499C8.84505 13.191 8.79205 13.0968 8.74494 12.9672L7.82628 10.2466L3.12698 10.2466L2.22598 12.9672C2.17887 13.1085 2.11999 13.2028 2.04932 13.2499C1.99043 13.297 1.89621 13.3205 1.76665 13.3205L0.300328 13.3205Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M12.5851 13.3205C12.326 13.3205 12.1964 13.191 12.1964 12.9319L12.1964 4.71695C12.1964 4.45784 12.326 4.32829 12.5851 4.32829L13.5214 4.32829C13.6745 4.32829 13.7864 4.35773 13.8571 4.41662C13.9277 4.46373 13.9748 4.55795 13.9984 4.69928L14.1221 5.22928C14.7109 4.82884 15.2645 4.5344 15.7827 4.34595C16.3127 4.15751 16.8427 4.06329 17.3727 4.06329C18.468 4.06329 19.2218 4.46962 19.634 5.28228C20.8118 4.46962 21.9424 4.06329 23.026 4.06329C23.8622 4.06329 24.51 4.29295 24.9693 4.75228C25.4286 5.19983 25.6583 5.85349 25.6583 6.71326L25.6583 12.9319C25.6583 13.191 25.5287 13.3205 25.2696 13.3205L23.9623 13.3205C23.7032 13.3205 23.5737 13.191 23.5737 12.9319L23.5737 7.22559C23.5737 6.68382 23.4677 6.29516 23.2557 6.0596C23.0437 5.82405 22.6962 5.70627 22.2133 5.70627C21.8482 5.70627 21.4596 5.77105 21.0473 5.9006C20.6351 6.01838 20.2759 6.17149 19.9697 6.35993L19.9697 12.9319C19.9697 13.191 19.8401 13.3205 19.581 13.3205L18.2737 13.3205C18.0146 13.3205 17.885 13.191 17.885 12.9319L17.885 7.22559C17.885 6.68382 17.779 6.29516 17.567 6.0596C17.355 5.82405 17.0076 5.70627 16.5247 5.70627C16.1831 5.70627 15.8122 5.76516 15.4117 5.88294C15.023 5.98894 14.6462 6.14793 14.281 6.35993L14.281 12.9319C14.281 13.191 14.1515 13.3205 13.8924 13.3205L12.5851 13.3205Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M27.9074 16.9598C27.6483 16.9598 27.5188 16.8303 27.5188 16.5712L27.5188 4.71695C27.5188 4.45784 27.6483 4.32829 27.9074 4.32829L28.8791 4.32829C29.1382 4.32829 29.2913 4.44606 29.3384 4.68162L29.4444 5.22928C29.8566 4.85239 30.3101 4.56384 30.8047 4.36362C31.3112 4.1634 31.8353 4.06329 32.3771 4.06329C33.4959 4.06329 34.3852 4.4814 35.0447 5.31761C35.716 6.15382 36.0517 7.27859 36.0517 8.69191C36.0517 9.66946 35.8868 10.5233 35.557 11.2536C35.239 11.9838 34.7915 12.5432 34.2144 12.9319C33.6373 13.3205 32.9777 13.5149 32.2357 13.5149C31.7411 13.5149 31.2641 13.4324 30.8047 13.2675C30.3454 13.0909 29.945 12.8494 29.6034 12.5432L29.6034 16.5712C29.6034 16.8303 29.4739 16.9598 29.2147 16.9598L27.9074 16.9598ZM31.7057 11.8719C32.4595 11.8719 33.0189 11.6187 33.384 11.1122C33.7492 10.594 33.9317 9.81079 33.9317 8.76258C33.9317 7.72614 33.7492 6.96059 33.384 6.46593C33.0307 5.95949 32.4772 5.70627 31.7234 5.70627C30.9578 5.70627 30.2512 5.93005 29.6034 6.3776L29.6034 11.1829C30.263 11.6422 30.9637 11.8719 31.7057 11.8719Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M39.7012 13.4265C39.0063 13.4265 38.4763 13.2322 38.1112 12.8435C37.7579 12.4431 37.5812 11.866 37.5812 11.1122L37.5812 0.635988C37.5812 0.37688 37.7108 0.247327 37.9699 0.247327L39.2772 0.247327C39.5363 0.247327 39.6659 0.37688 39.6659 0.635988L39.6659 10.9532C39.6659 11.2477 39.7189 11.4597 39.8249 11.5892C39.9427 11.7188 40.1311 11.7835 40.3902 11.7835C40.4491 11.7835 40.5139 11.7777 40.5845 11.7659C40.6552 11.7541 40.7141 11.7482 40.7612 11.7482C40.985 11.7482 41.0969 11.8719 41.0969 12.1192L41.0969 12.8435C41.0969 13.0909 40.9732 13.244 40.7259 13.3029C40.3725 13.3853 40.031 13.4265 39.7012 13.4265Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M42.8596 13.3205C42.6005 13.3205 42.4709 13.191 42.4709 12.9319L42.4709 4.71695C42.4709 4.45784 42.6005 4.32829 42.8596 4.32829L44.1669 4.32829C44.426 4.32829 44.5556 4.45784 44.5556 4.71695L44.5556 12.9319C44.5556 13.191 44.426 13.3205 44.1669 13.3205L42.8596 13.3205ZM43.5132 2.8443C43.1246 2.8443 42.8183 2.7383 42.5946 2.5263C42.3708 2.31431 42.2589 2.01986 42.2589 1.64298C42.2589 1.26609 42.3708 0.971652 42.5946 0.759654C42.8183 0.547656 43.1246 0.441657 43.5132 0.441657C43.9019 0.441657 44.2081 0.547656 44.4319 0.759654C44.6557 0.971652 44.7676 1.26609 44.7676 1.64298C44.7676 2.01986 44.6557 2.31431 44.4319 2.5263C44.2081 2.7383 43.9019 2.8443 43.5132 2.8443Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
            {
              d: "M47.4093 12.9319C47.4093 13.191 47.5389 13.3205 47.798 13.3205L49.1053 13.3205C49.3644 13.3205 49.4939 13.191 49.4939 12.9319L49.4939 5.91827L52.1446 5.91827L54.8476 13.4265L54.6179 14.0449C54.3823 14.6809 54.1409 15.0872 53.8936 15.2638C53.6462 15.4523 53.2693 15.5465 52.7629 15.5465C52.5745 15.5465 52.439 15.5406 52.3566 15.5288C52.2741 15.5171 52.2035 15.5112 52.1446 15.5112C51.9561 15.5112 51.8619 15.629 51.8619 15.8645L51.8619 16.4652C51.8619 16.6418 51.8855 16.7655 51.9326 16.8362C51.9797 16.9186 52.0798 16.9834 52.2329 17.0305C52.5391 17.1247 52.9101 17.1718 53.3459 17.1718C54.0644 17.1718 54.6473 16.9834 55.0949 16.6065C55.5424 16.2296 55.9311 15.6113 56.2609 14.7515L60.1122 4.85828C60.1593 4.74051 60.1829 4.64629 60.1829 4.57562C60.1829 4.41073 60.0769 4.32829 59.8649 4.32829L58.5222 4.32829C58.2749 4.32829 58.1218 4.44018 58.0629 4.66395L55.8369 11.4479L53.6462 4.66395C53.5874 4.44018 53.4342 4.32829 53.1869 4.32829L49.4939 4.32829L49.4939 2.91497C49.4939 2.46742 49.5941 2.14353 49.7943 1.94331C50.0063 1.74309 50.3478 1.64298 50.8189 1.64298C51.1016 1.64298 51.3313 1.66654 51.5079 1.71365C51.6846 1.74898 51.8318 1.76665 51.9496 1.76665C52.1498 1.76665 52.2499 1.64298 52.2499 1.39565L52.2499 0.741993C52.2499 0.565327 52.2205 0.441662 52.1616 0.370996C52.1027 0.288553 51.9849 0.223775 51.8083 0.176665C51.3607 0.0588882 50.8896 0 50.3949 0C48.4045 0 47.4093 1.05999 47.4093 3.17997L47.4093 4.38129L46.208 4.55795C46.0784 4.56973 45.9842 4.61095 45.9253 4.68162C45.8664 4.74051 45.837 4.8524 45.837 5.01728L45.837 5.51195C45.837 5.78283 45.9606 5.91827 46.208 5.91827L47.4093 5.91827L47.4093 12.9319Z",
              fill: "rgba(48,64,80,1)",
              fillRule: "nonzero",
            },
          ],
        },
        logo: {},
        LogoWithText: {},
      },
      variantValues: { color: "brand" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="127.88px"
      height="18.91px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogoWithText")}
      {...rest}
    >
      <View
        width="127.88px"
        height="18.91px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <Icon
          width="21.78px"
          height="18.91px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.77855110168457,
            height: 18.909521102905273,
          }}
          paths={[
            {
              d: "M13.5324 18.7577C13.5818 18.8432 13.6732 18.8959 13.7722 18.8959L15.926 18.8959C16.1391 18.8959 16.2723 18.6656 16.1658 18.4814L8.34201 4.95697C8.23545 4.77276 7.96904 4.77276 7.86247 4.95697C5.25995 9.45579 2.65123 13.9748 0.0374783 18.4951C-0.069038 18.6793 0.0641708 18.9095 0.277275 18.9095L10.3655 18.9095C10.5786 18.9095 10.7118 18.6793 10.6053 18.495L9.57336 16.7112C9.5239 16.6257 9.4325 16.5731 9.33359 16.5731L4.17381 16.5731C4.06724 16.5731 4.00064 16.4579 4.05392 16.3658L7.98142 9.5766C8.03471 9.4845 8.16791 9.4845 8.22119 9.5766L13.5324 18.7577Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M9.576 1.9949C9.52655 2.08039 9.52655 2.18572 9.576 2.27122L19.1133 18.7577C19.1627 18.8432 19.2541 18.8959 19.3531 18.8959L21.5013 18.8959C21.7144 18.8959 21.8476 18.6656 21.741 18.4814L11.1296 0.138158C11.0231 -0.0460529 10.7567 -0.0460525 10.6501 0.138158L9.576 1.9949Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Union")}
        ></Icon>
        <Icon
          width="35.21px"
          height="12.83px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 35.20857620239258,
            height: 12.825872421264648,
          }}
          paths={[
            {
              d: "M7.33161 7.87926L5.47663 2.22598L3.63931 7.87926L7.33161 7.87926ZM0.300331 12.5255C0.20611 12.5255 0.129555 12.5079 0.0706662 12.4725C0.0235554 12.4254 0 12.3665 0 12.2959C0 12.2488 0.0353331 12.1251 0.105999 11.9249L4.2223 0.671327C4.26941 0.529995 4.33419 0.429885 4.41664 0.370997C4.49908 0.312109 4.61097 0.282664 4.7523 0.282664L6.30696 0.282664C6.44829 0.282664 6.56018 0.312109 6.64262 0.370997C6.72506 0.429885 6.78984 0.529995 6.83695 0.671327L10.9356 11.9249C11.0063 12.1251 11.0416 12.2488 11.0416 12.2959C11.0416 12.3665 11.0121 12.4254 10.9533 12.4725C10.9061 12.5079 10.8355 12.5255 10.7413 12.5255L9.20427 12.5255C9.07471 12.5255 8.9746 12.502 8.90394 12.4549C8.84505 12.396 8.79205 12.3018 8.74494 12.1722L7.82628 9.45157L3.12698 9.45157L2.22598 12.1722C2.17887 12.3135 2.11999 12.4078 2.04932 12.4549C1.99043 12.502 1.89621 12.5255 1.76665 12.5255L0.300331 12.5255Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M13.8931 12.5255C13.6104 12.5255 13.4337 12.396 13.3631 12.1369L10.1124 0.865658C10.0653 0.700771 10.0418 0.588883 10.0418 0.529995C10.0418 0.365108 10.1419 0.282664 10.3421 0.282664L11.9497 0.282664C12.1971 0.282664 12.3502 0.400441 12.4091 0.635994L14.6881 10.1936L16.7904 1.00699C16.8375 0.747882 17.0083 0.618328 17.3027 0.618328L18.7514 0.618328C19.034 0.618328 19.2048 0.747882 19.2637 1.00699L21.3837 10.1759L23.6627 0.635994C23.7216 0.400441 23.8747 0.282664 24.122 0.282664L25.6413 0.282664C25.8415 0.282664 25.9416 0.365108 25.9416 0.529995C25.9416 0.588883 25.9181 0.700771 25.871 0.865658L22.638 12.1369C22.5673 12.396 22.3907 12.5255 22.108 12.5255L20.6064 12.5255C20.3237 12.5255 20.147 12.396 20.0764 12.1369L17.9917 3.3213L15.9247 12.1369C15.8541 12.396 15.6774 12.5255 15.3947 12.5255L13.8931 12.5255Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M30.5093 12.8259C29.9911 12.8259 29.4552 12.7788 28.9016 12.6845C28.3598 12.5903 27.877 12.4667 27.453 12.3135C27.2645 12.2547 27.1409 12.184 27.082 12.1015C27.0231 12.0191 26.9936 11.8895 26.9936 11.7129L26.9936 10.8472C26.9936 10.7412 27.0172 10.6588 27.0643 10.5999C27.1114 10.5292 27.1762 10.4939 27.2586 10.4939C27.3764 10.4939 27.5766 10.5351 27.8593 10.6176C28.2362 10.7236 28.672 10.8178 29.1666 10.9002C29.6613 10.9709 30.1088 11.0062 30.5093 11.0062C31.3455 11.0062 31.9874 10.859 32.4349 10.5646C32.8825 10.2583 33.1063 9.82257 33.1063 9.25724C33.1063 8.8568 32.9708 8.52703 32.6999 8.26792C32.429 8.00881 31.952 7.7497 31.2689 7.49059L29.6966 6.88993C28.7073 6.51305 27.9888 6.0655 27.5413 5.54728C27.0937 5.01728 26.87 4.35773 26.87 3.56863C26.87 2.47331 27.2527 1.60765 28.0183 0.971657C28.7956 0.323886 29.8379 0 31.1453 0C32.0286 0 32.9767 0.153109 33.9896 0.459329C34.178 0.518217 34.3017 0.588883 34.3606 0.671327C34.4195 0.753771 34.4489 0.883325 34.4489 1.05999L34.4489 1.90798C34.4489 2.01398 34.4254 2.10231 34.3782 2.17298C34.3311 2.23187 34.2664 2.26131 34.1839 2.26131C34.0779 2.26131 33.8777 2.22009 33.5833 2.13765C32.7706 1.92565 32.0168 1.81965 31.3219 1.81965C29.7555 1.81965 28.9723 2.34376 28.9723 3.39197C28.9723 3.79241 29.1136 4.12218 29.3963 4.38129C29.6789 4.6404 30.1795 4.89951 30.8979 5.15862L32.3996 5.70628C33.3889 6.07138 34.1015 6.51305 34.5372 7.03126C34.9848 7.54948 35.2086 8.20903 35.2086 9.00991C35.2086 10.1995 34.7905 11.1358 33.9543 11.8189C33.118 12.4902 31.9697 12.8259 30.5093 12.8259Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2.5px"
          left="27.14px"
          {...getOverrideProps(overrides, "Vector39193044")}
        ></Icon>
        <Icon
          width="60.18px"
          height="17.17px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 60.182865142822266,
            height: 17.171831130981445,
          }}
          paths={[
            {
              d: "M7.33161 8.67424L5.47663 3.02097L3.63931 8.67424L7.33161 8.67424ZM0.300328 13.3205C0.206107 13.3205 0.129555 13.3029 0.0706668 13.2675C0.023556 13.2204 0 13.1615 0 13.0909C0 13.0438 0.0353318 12.9201 0.105998 12.7199L4.2223 1.46631C4.26941 1.32498 4.33419 1.22487 4.41664 1.16598C4.49908 1.1071 4.61097 1.07765 4.7523 1.07765L6.30695 1.07765C6.44829 1.07765 6.56018 1.1071 6.64262 1.16598C6.72506 1.22487 6.78984 1.32498 6.83695 1.46631L10.9356 12.7199C11.0063 12.9201 11.0416 13.0438 11.0416 13.0909C11.0416 13.1615 11.0121 13.2204 10.9533 13.2675C10.9061 13.3029 10.8355 13.3205 10.7413 13.3205L9.20427 13.3205C9.07471 13.3205 8.9746 13.297 8.90394 13.2499C8.84505 13.191 8.79205 13.0968 8.74494 12.9672L7.82628 10.2466L3.12698 10.2466L2.22598 12.9672C2.17887 13.1085 2.11999 13.2028 2.04932 13.2499C1.99043 13.297 1.89621 13.3205 1.76665 13.3205L0.300328 13.3205Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M12.5851 13.3205C12.326 13.3205 12.1964 13.191 12.1964 12.9319L12.1964 4.71695C12.1964 4.45784 12.326 4.32829 12.5851 4.32829L13.5214 4.32829C13.6745 4.32829 13.7864 4.35773 13.8571 4.41662C13.9277 4.46373 13.9748 4.55795 13.9984 4.69928L14.1221 5.22928C14.7109 4.82884 15.2645 4.5344 15.7827 4.34595C16.3127 4.15751 16.8427 4.06329 17.3727 4.06329C18.468 4.06329 19.2218 4.46962 19.634 5.28228C20.8118 4.46962 21.9424 4.06329 23.026 4.06329C23.8622 4.06329 24.51 4.29295 24.9693 4.75228C25.4286 5.19983 25.6583 5.85349 25.6583 6.71326L25.6583 12.9319C25.6583 13.191 25.5287 13.3205 25.2696 13.3205L23.9623 13.3205C23.7032 13.3205 23.5737 13.191 23.5737 12.9319L23.5737 7.22559C23.5737 6.68382 23.4677 6.29516 23.2557 6.0596C23.0437 5.82405 22.6962 5.70627 22.2133 5.70627C21.8482 5.70627 21.4596 5.77105 21.0473 5.9006C20.6351 6.01838 20.2759 6.17149 19.9697 6.35993L19.9697 12.9319C19.9697 13.191 19.8401 13.3205 19.581 13.3205L18.2737 13.3205C18.0146 13.3205 17.885 13.191 17.885 12.9319L17.885 7.22559C17.885 6.68382 17.779 6.29516 17.567 6.0596C17.355 5.82405 17.0076 5.70627 16.5247 5.70627C16.1831 5.70627 15.8122 5.76516 15.4117 5.88294C15.023 5.98894 14.6462 6.14793 14.281 6.35993L14.281 12.9319C14.281 13.191 14.1515 13.3205 13.8924 13.3205L12.5851 13.3205Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M27.9074 16.9598C27.6483 16.9598 27.5188 16.8303 27.5188 16.5712L27.5188 4.71695C27.5188 4.45784 27.6483 4.32829 27.9074 4.32829L28.8791 4.32829C29.1382 4.32829 29.2913 4.44606 29.3384 4.68162L29.4444 5.22928C29.8566 4.85239 30.3101 4.56384 30.8047 4.36362C31.3112 4.1634 31.8353 4.06329 32.3771 4.06329C33.4959 4.06329 34.3852 4.4814 35.0447 5.31761C35.716 6.15382 36.0517 7.27859 36.0517 8.69191C36.0517 9.66946 35.8868 10.5233 35.557 11.2536C35.239 11.9838 34.7915 12.5432 34.2144 12.9319C33.6373 13.3205 32.9777 13.5149 32.2357 13.5149C31.7411 13.5149 31.2641 13.4324 30.8047 13.2675C30.3454 13.0909 29.945 12.8494 29.6034 12.5432L29.6034 16.5712C29.6034 16.8303 29.4739 16.9598 29.2147 16.9598L27.9074 16.9598ZM31.7057 11.8719C32.4595 11.8719 33.0189 11.6187 33.384 11.1122C33.7492 10.594 33.9317 9.81079 33.9317 8.76258C33.9317 7.72614 33.7492 6.96059 33.384 6.46593C33.0307 5.95949 32.4772 5.70627 31.7234 5.70627C30.9578 5.70627 30.2512 5.93005 29.6034 6.3776L29.6034 11.1829C30.263 11.6422 30.9637 11.8719 31.7057 11.8719Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M39.7012 13.4265C39.0063 13.4265 38.4763 13.2322 38.1112 12.8435C37.7579 12.4431 37.5812 11.866 37.5812 11.1122L37.5812 0.635988C37.5812 0.37688 37.7108 0.247327 37.9699 0.247327L39.2772 0.247327C39.5363 0.247327 39.6659 0.37688 39.6659 0.635988L39.6659 10.9532C39.6659 11.2477 39.7189 11.4597 39.8249 11.5892C39.9427 11.7188 40.1311 11.7835 40.3902 11.7835C40.4491 11.7835 40.5139 11.7777 40.5845 11.7659C40.6552 11.7541 40.7141 11.7482 40.7612 11.7482C40.985 11.7482 41.0969 11.8719 41.0969 12.1192L41.0969 12.8435C41.0969 13.0909 40.9732 13.244 40.7259 13.3029C40.3725 13.3853 40.031 13.4265 39.7012 13.4265Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M42.8596 13.3205C42.6005 13.3205 42.4709 13.191 42.4709 12.9319L42.4709 4.71695C42.4709 4.45784 42.6005 4.32829 42.8596 4.32829L44.1669 4.32829C44.426 4.32829 44.5556 4.45784 44.5556 4.71695L44.5556 12.9319C44.5556 13.191 44.426 13.3205 44.1669 13.3205L42.8596 13.3205ZM43.5132 2.8443C43.1246 2.8443 42.8183 2.7383 42.5946 2.5263C42.3708 2.31431 42.2589 2.01986 42.2589 1.64298C42.2589 1.26609 42.3708 0.971652 42.5946 0.759654C42.8183 0.547656 43.1246 0.441657 43.5132 0.441657C43.9019 0.441657 44.2081 0.547656 44.4319 0.759654C44.6557 0.971652 44.7676 1.26609 44.7676 1.64298C44.7676 2.01986 44.6557 2.31431 44.4319 2.5263C44.2081 2.7383 43.9019 2.8443 43.5132 2.8443Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
            {
              d: "M47.4093 12.9319C47.4093 13.191 47.5389 13.3205 47.798 13.3205L49.1053 13.3205C49.3644 13.3205 49.4939 13.191 49.4939 12.9319L49.4939 5.91827L52.1446 5.91827L54.8476 13.4265L54.6179 14.0449C54.3823 14.6809 54.1409 15.0872 53.8936 15.2638C53.6462 15.4523 53.2693 15.5465 52.7629 15.5465C52.5745 15.5465 52.439 15.5406 52.3566 15.5288C52.2741 15.5171 52.2035 15.5112 52.1446 15.5112C51.9561 15.5112 51.8619 15.629 51.8619 15.8645L51.8619 16.4652C51.8619 16.6418 51.8855 16.7655 51.9326 16.8362C51.9797 16.9186 52.0798 16.9834 52.2329 17.0305C52.5391 17.1247 52.9101 17.1718 53.3459 17.1718C54.0644 17.1718 54.6473 16.9834 55.0949 16.6065C55.5424 16.2296 55.9311 15.6113 56.2609 14.7515L60.1122 4.85828C60.1593 4.74051 60.1829 4.64629 60.1829 4.57562C60.1829 4.41073 60.0769 4.32829 59.8649 4.32829L58.5222 4.32829C58.2749 4.32829 58.1218 4.44018 58.0629 4.66395L55.8369 11.4479L53.6462 4.66395C53.5874 4.44018 53.4342 4.32829 53.1869 4.32829L49.4939 4.32829L49.4939 2.91497C49.4939 2.46742 49.5941 2.14353 49.7943 1.94331C50.0063 1.74309 50.3478 1.64298 50.8189 1.64298C51.1016 1.64298 51.3313 1.66654 51.5079 1.71365C51.6846 1.74898 51.8318 1.76665 51.9496 1.76665C52.1498 1.76665 52.2499 1.64298 52.2499 1.39565L52.2499 0.741993C52.2499 0.565327 52.2205 0.441662 52.1616 0.370996C52.1027 0.288553 51.9849 0.223775 51.8083 0.176665C51.3607 0.0588882 50.8896 0 50.3949 0C48.4045 0 47.4093 1.05999 47.4093 3.17997L47.4093 4.38129L46.208 4.55795C46.0784 4.56973 45.9842 4.61095 45.9253 4.68162C45.8664 4.74051 45.837 4.8524 45.837 5.01728L45.837 5.51195C45.837 5.78283 45.9606 5.91827 46.208 5.91827L47.4093 5.91827L47.4093 12.9319Z",
              fill: "rgba(137,148,159,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1.74px"
          left="67.7px"
          {...getOverrideProps(overrides, "Vector39193045")}
        ></Icon>
      </View>
    </View>
  );
}
