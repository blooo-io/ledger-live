import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  height: number;
  width: number;
};

const Sepa: React.FC<Props> = ({ height = 12, width = 35 }) => (
  <Svg viewBox="0 0 35 12" width={width} height={height}>
    <Path
      d="M0.717529 10.9139L1.06005 10.8785C1.07053 10.9753 1.11473 11.0652 1.1849 11.1326C1.25694 11.1896 1.34731 11.2183 1.43901 11.2133C1.53025 11.2204 1.62105 11.1949 1.69535 11.1415C1.72164 11.122 1.74308 11.0967 1.75802 11.0676C1.77297 11.0384 1.78101 11.0063 1.78152 10.9735C1.78386 10.9334 1.77083 10.8939 1.74506 10.8631C1.71035 10.8272 1.66696 10.801 1.6191 10.7868C1.57822 10.7736 1.48431 10.7481 1.33846 10.7117C1.19534 10.6853 1.06009 10.6268 0.942927 10.5404C0.892389 10.4973 0.851947 10.4435 0.824455 10.383C0.796964 10.3225 0.783101 10.2567 0.783832 10.1902C0.783635 10.102 0.809792 10.0159 0.858956 9.9427C0.912637 9.86267 0.989851 9.80129 1.07993 9.76703C1.18879 9.72374 1.30532 9.70305 1.42244 9.70626C1.5986 9.69354 1.77348 9.74452 1.91522 9.8499C1.97012 9.89778 2.0141 9.95687 2.04422 10.0232C2.07433 10.0895 2.08987 10.1615 2.08978 10.2344L1.73733 10.2488C1.73016 10.1744 1.69549 10.1055 1.6401 10.0554C1.57514 10.0116 1.49728 9.99092 1.41913 9.99684C1.33457 9.99199 1.25063 10.014 1.17937 10.0598C1.16129 10.0718 1.14667 10.0883 1.13698 10.1077C1.12728 10.1271 1.12285 10.1487 1.12413 10.1703C1.1233 10.1915 1.12758 10.2127 1.13662 10.2319C1.14565 10.2511 1.15918 10.2679 1.17605 10.2808C1.27557 10.3378 1.38508 10.3753 1.49868 10.3913C1.62949 10.4178 1.7567 10.4597 1.87764 10.5161C1.95669 10.5569 2.02317 10.6183 2.0699 10.694C2.11788 10.7784 2.14159 10.8743 2.1384 10.9713C2.13859 11.0713 2.10981 11.1691 2.05554 11.2531C1.99925 11.3408 1.91698 11.4088 1.8202 11.4475C1.69917 11.493 1.57044 11.5143 1.44122 11.5105C1.25912 11.5227 1.07883 11.4681 0.934092 11.3569C0.80826 11.2421 0.730827 11.0837 0.717529 10.9139Z"
      fill="#0054A5"
    />
    <Path
      d="M2.49878 10.0497V9.74255H2.83024V10.0497H2.49878ZM2.49878 11.486V10.2265H2.83024V11.486H2.49878Z"
      fill="#0054A5"
    />
    <Path
      d="M4.39582 11.4828H4.06436V10.8387C4.06915 10.7497 4.06209 10.6605 4.04337 10.5735C4.03068 10.5359 4.00629 10.5034 3.97376 10.4807C3.94117 10.4586 3.90262 10.4471 3.86328 10.4475C3.80799 10.4466 3.75385 10.4633 3.70859 10.495C3.66415 10.5254 3.63111 10.5697 3.61468 10.621C3.5935 10.7159 3.58496 10.8133 3.58927 10.9105V11.4828H3.25781V10.2232H3.55502V10.4078C3.6223 10.3122 3.72033 10.2426 3.83274 10.2106C3.94515 10.1787 4.06513 10.1862 4.17263 10.2321C4.22679 10.2533 4.27442 10.2883 4.31074 10.3337C4.34226 10.3753 4.3645 10.4231 4.37594 10.474C4.38956 10.5469 4.39548 10.6209 4.39361 10.695L4.39582 11.4828Z"
      fill="#0054A5"
    />
    <Path
      d="M4.77016 11.5657L5.14913 11.6077C5.15075 11.6443 5.16663 11.6788 5.19334 11.7038C5.23775 11.733 5.29059 11.7466 5.34358 11.7425C5.4115 11.7468 5.47936 11.7331 5.54025 11.7027C5.57157 11.6834 5.59506 11.6537 5.60656 11.6187C5.61993 11.5687 5.62514 11.5168 5.62201 11.4652V11.2817C5.58098 11.3438 5.52517 11.3946 5.4596 11.4297C5.39403 11.4648 5.32075 11.4831 5.24637 11.4828C5.16644 11.4845 5.08742 11.4657 5.01683 11.4281C4.94624 11.3906 4.88644 11.3357 4.84309 11.2685C4.76414 11.1415 4.72561 10.9936 4.7326 10.8442C4.72056 10.6691 4.77501 10.4959 4.88507 10.3592C4.93242 10.3053 4.99095 10.2623 5.05659 10.2333C5.12223 10.2043 5.19339 10.1899 5.26514 10.1912C5.34147 10.1912 5.4166 10.2101 5.48388 10.2461C5.55115 10.2822 5.60848 10.3343 5.65074 10.3979V10.2233H5.96232V11.3558C5.96633 11.4675 5.95366 11.5792 5.92474 11.6872C5.90547 11.7527 5.87016 11.8123 5.822 11.8607C5.77062 11.9063 5.70991 11.9403 5.6441 11.9601C5.55247 11.9859 5.45753 11.9978 5.36238 11.9955C5.20264 12.0096 5.04269 11.9707 4.90717 11.885C4.86472 11.8517 4.83056 11.8091 4.80736 11.7604C4.78417 11.7117 4.77258 11.6583 4.77348 11.6044C4.77017 11.5955 4.77016 11.5834 4.77016 11.5657ZM5.06958 10.8254C5.06121 10.9297 5.08847 11.0337 5.14691 11.1204C5.16933 11.1495 5.19814 11.1729 5.2311 11.189C5.26406 11.2051 5.30027 11.2134 5.33695 11.2132C5.37614 11.2139 5.41498 11.2056 5.45056 11.1892C5.48614 11.1727 5.51756 11.1485 5.54246 11.1182C5.60356 11.0367 5.63336 10.9359 5.62644 10.8343C5.63472 10.7306 5.60616 10.6273 5.54578 10.5426C5.52177 10.5121 5.491 10.4877 5.4559 10.4712C5.42081 10.4547 5.38235 10.4466 5.34358 10.4476C5.30587 10.4469 5.26853 10.4549 5.23442 10.471C5.20031 10.4871 5.17035 10.5108 5.14691 10.5404C5.09078 10.6243 5.0647 10.7248 5.0729 10.8254H5.06958Z"
      fill="#0054A5"
    />
    <Path d="M6.3623 11.4827V9.74255H6.69377V11.4827H6.3623Z" fill="#0054A5" />
    <Path
      d="M7.84514 11.0861L8.1766 11.1413C8.14121 11.2533 8.0702 11.3507 7.9744 11.4186C7.87094 11.4854 7.7494 11.5186 7.62638 11.5136C7.53354 11.5206 7.4404 11.5046 7.35523 11.467C7.27006 11.4294 7.19545 11.3715 7.13801 11.2982C7.05096 11.1702 7.00722 11.0176 7.01317 10.8629C7.00262 10.6836 7.06158 10.5071 7.17779 10.3701C7.2299 10.3119 7.29404 10.2657 7.36578 10.2348C7.43752 10.2039 7.51514 10.189 7.59322 10.1911C7.6762 10.1878 7.75887 10.2029 7.83529 10.2354C7.91172 10.2679 7.97999 10.3169 8.03517 10.3789C8.14566 10.5038 8.19537 10.6938 8.19095 10.9513H7.35237C7.34855 11.0361 7.37742 11.1191 7.43302 11.1833C7.45791 11.2098 7.48806 11.2307 7.52155 11.2448C7.55505 11.2589 7.59115 11.2658 7.62748 11.2651C7.67556 11.267 7.72281 11.2521 7.76117 11.2231C7.80282 11.1873 7.8322 11.1394 7.84514 11.0861ZM7.86281 10.748C7.86538 10.6676 7.83869 10.5891 7.78768 10.527C7.76511 10.5023 7.73763 10.4825 7.707 10.469C7.67637 10.4555 7.64326 10.4485 7.60979 10.4485C7.57631 10.4485 7.5432 10.4555 7.51257 10.469C7.48194 10.4825 7.45449 10.5023 7.43192 10.527C7.38108 10.589 7.35578 10.668 7.36119 10.748H7.86281Z"
      fill="#0054A5"
    />
    <Path
      d="M9.29028 11.4827V9.74255H10.5775V10.0365H9.64276V10.4232H10.5156V10.7159H9.64605V11.1899H10.6161V11.4827H9.29028Z"
      fill="#0054A5"
    />
    <Path
      d="M11.8093 11.4829V11.294C11.763 11.3618 11.7008 11.4172 11.6281 11.4553C11.5548 11.4937 11.4733 11.5138 11.3905 11.5139C11.3109 11.515 11.2322 11.496 11.1619 11.4586C11.0972 11.4239 11.0459 11.3687 11.016 11.3017C10.9817 11.2127 10.9663 11.1175 10.9707 11.0222V10.2234H11.3022V10.8024C11.2968 10.9132 11.3027 11.0242 11.3198 11.1338C11.3313 11.172 11.355 11.2054 11.3872 11.2288C11.4235 11.2538 11.467 11.2662 11.511 11.2642C11.5657 11.2649 11.6194 11.2487 11.6645 11.2178C11.7071 11.1895 11.7396 11.1485 11.7574 11.1007C11.7797 10.9887 11.7878 10.8744 11.7817 10.7604V10.2289H12.1131V11.4885L11.8093 11.4829Z"
      fill="#0054A5"
    />
    <Path
      d="M12.8556 11.4829H12.5242V10.2233H12.8358V10.4023C12.8715 10.3371 12.92 10.2796 12.9783 10.2333C13.0213 10.2053 13.0717 10.1907 13.123 10.1913C13.2012 10.192 13.2776 10.2141 13.344 10.2554L13.2423 10.5471C13.196 10.5139 13.1412 10.4947 13.0843 10.4918C13.0414 10.4909 12.9993 10.5045 12.965 10.5305C12.9262 10.5687 12.8997 10.6175 12.8888 10.6708C12.8639 10.8104 12.8542 10.9523 12.8601 11.094L12.8556 11.4829Z"
      fill="#0054A5"
    />
    <Path
      d="M13.4746 10.8355C13.4751 10.7229 13.5032 10.6121 13.5564 10.5129C13.6082 10.412 13.689 10.3289 13.7884 10.2742C13.8901 10.2191 14.0042 10.1905 14.1199 10.1914C14.2068 10.1886 14.2933 10.2037 14.3741 10.2358C14.4549 10.268 14.5282 10.3164 14.5895 10.3781C14.7075 10.5075 14.7729 10.6764 14.7729 10.8515C14.7729 11.0267 14.7075 11.1955 14.5895 11.325C14.5293 11.387 14.4568 11.4358 14.3767 11.4683C14.2967 11.5009 14.2107 11.5164 14.1243 11.5139C14.0091 11.5145 13.8955 11.4876 13.7928 11.4354C13.6908 11.3858 13.607 11.3054 13.5531 11.2056C13.4969 11.0906 13.47 10.9634 13.4746 10.8355ZM13.8161 10.8532C13.8089 10.9571 13.8408 11.0599 13.9055 11.1415C13.9331 11.173 13.9671 11.1982 14.0052 11.2155C14.0433 11.2327 14.0847 11.2417 14.1265 11.2417C14.1683 11.2417 14.2097 11.2327 14.2478 11.2155C14.2859 11.1982 14.3199 11.173 14.3475 11.1415C14.4116 11.0588 14.4431 10.9554 14.4359 10.851C14.4426 10.748 14.4111 10.6461 14.3475 10.5648C14.3201 10.533 14.2862 10.5075 14.248 10.4901C14.2099 10.4726 14.1684 10.4635 14.1265 10.4635C14.0845 10.4635 14.0431 10.4726 14.005 10.4901C13.9668 10.5075 13.9329 10.533 13.9055 10.5648C13.8408 10.6464 13.8089 10.7493 13.8161 10.8532Z"
      fill="#0054A5"
    />
    <Path
      d="M15.8665 11.4829V9.74276H16.4299C16.5701 9.73706 16.7104 9.74595 16.8487 9.76928C16.9488 9.79615 17.0368 9.85613 17.0984 9.93943C17.1693 10.0379 17.2051 10.1574 17.2 10.2786C17.2029 10.3719 17.1828 10.4645 17.1415 10.5482C17.1068 10.6165 17.056 10.6753 16.9934 10.7195C16.9392 10.7589 16.8776 10.7871 16.8122 10.8023C16.6917 10.8214 16.5696 10.8295 16.4476 10.8266H16.2189V11.4829H15.8665ZM16.2189 10.0367V10.5338H16.4112C16.5041 10.5394 16.5974 10.5301 16.6874 10.5062C16.7321 10.4894 16.7707 10.4594 16.7979 10.42C16.824 10.3796 16.8374 10.3323 16.8365 10.2841C16.8395 10.2263 16.8197 10.1695 16.7813 10.1262C16.7446 10.0853 16.6951 10.058 16.641 10.0488C16.5571 10.0379 16.4725 10.0338 16.3879 10.0367H16.2189Z"
      fill="#0054A5"
    />
    <Path
      d="M17.8077 10.6057L17.5083 10.5504C17.5326 10.4421 17.5949 10.3461 17.684 10.2797C17.7956 10.2135 17.9246 10.1827 18.0541 10.1914C18.1671 10.1858 18.28 10.2039 18.3856 10.2444C18.4497 10.272 18.5034 10.3192 18.5392 10.3792C18.5764 10.4744 18.5919 10.5767 18.5844 10.6786V11.0686C18.5823 11.1507 18.5878 11.2328 18.601 11.3139C18.614 11.3725 18.634 11.4292 18.6607 11.4829H18.3292C18.3204 11.462 18.3104 11.4288 18.2972 11.3857C18.2939 11.3726 18.2899 11.3597 18.285 11.347C18.2327 11.4001 18.1708 11.4428 18.1027 11.473C18.037 11.5006 17.9663 11.5145 17.895 11.5139C17.7832 11.52 17.6735 11.4823 17.589 11.4089C17.5525 11.3746 17.5238 11.3329 17.5048 11.2866C17.4857 11.2403 17.4768 11.1905 17.4785 11.1404C17.4777 11.0736 17.4953 11.0079 17.5293 10.9504C17.5633 10.894 17.6133 10.849 17.6729 10.8211C17.7578 10.7846 17.8469 10.7586 17.9381 10.7438C18.0487 10.7265 18.1575 10.6988 18.2629 10.6609V10.6278C18.2654 10.6024 18.2623 10.5769 18.2539 10.5528C18.2455 10.5288 18.232 10.5069 18.2143 10.4886C18.1605 10.4552 18.0971 10.4408 18.0342 10.4477C17.9853 10.4444 17.9365 10.4568 17.895 10.483C17.8538 10.5138 17.8233 10.5567 17.8077 10.6057ZM18.2574 10.8786C18.1906 10.8994 18.1227 10.9167 18.0541 10.9305C17.9909 10.9401 17.9298 10.9599 17.8729 10.9891C17.8531 11.0015 17.8367 11.0188 17.8253 11.0393C17.8139 11.0597 17.8079 11.0828 17.8077 11.1062C17.8074 11.1291 17.812 11.1517 17.8212 11.1727C17.8303 11.1936 17.8438 11.2124 17.8608 11.2277C17.8782 11.2449 17.8989 11.2584 17.9217 11.2674C17.9445 11.2763 17.9689 11.2805 17.9933 11.2797C18.0554 11.2789 18.1155 11.258 18.1646 11.22C18.2021 11.1924 18.2299 11.1538 18.2441 11.1095C18.2553 11.0558 18.2598 11.0008 18.2574 10.946V10.8786Z"
      fill="#0054A5"
    />
    <Path
      d="M18.8198 10.2234H19.1756L19.4772 11.1172L19.7733 10.2234H20.118L19.6761 11.4387L19.5954 11.6597C19.5733 11.7188 19.5452 11.7755 19.5115 11.8288C19.4867 11.8653 19.4557 11.8971 19.4198 11.9227C19.3809 11.9487 19.338 11.9682 19.2927 11.9801C19.2367 11.994 19.1792 12.0007 19.1215 12C19.0579 12.0001 18.9946 11.9934 18.9325 11.9801L18.9016 11.7183C18.9484 11.7284 18.9962 11.7335 19.0441 11.7337C19.0762 11.7362 19.1084 11.7313 19.1382 11.7194C19.1681 11.7076 19.1949 11.689 19.2165 11.6652C19.2571 11.6129 19.2864 11.5527 19.3027 11.4885L18.8198 10.2234Z"
      fill="#0054A5"
    />
    <Path
      d="M20.3799 10.2233H20.687V10.3946C20.7323 10.3325 20.7914 10.2818 20.8597 10.2465C20.928 10.2112 21.0035 10.1923 21.0804 10.1913C21.1539 10.1898 21.2266 10.2073 21.2914 10.2421C21.3534 10.2776 21.4043 10.3296 21.4384 10.3924C21.4871 10.3306 21.548 10.2794 21.6173 10.2421C21.6807 10.2088 21.7512 10.1914 21.8228 10.1913C21.9051 10.1885 21.9865 10.2083 22.0582 10.2488C22.1233 10.2866 22.1741 10.3449 22.2029 10.4145C22.23 10.4986 22.2416 10.587 22.2372 10.6752V11.4829H21.9057V10.7614C21.9127 10.6789 21.901 10.5958 21.8715 10.5183C21.8561 10.495 21.8348 10.4762 21.8097 10.4637C21.7847 10.4513 21.7568 10.4458 21.7289 10.4476C21.6816 10.4476 21.6355 10.4627 21.5974 10.4907C21.5536 10.5203 21.5219 10.5646 21.5079 10.6156C21.4864 10.7007 21.4771 10.7885 21.4803 10.8763V11.4829H21.1489V10.7912C21.153 10.7116 21.1471 10.6318 21.1312 10.5537C21.1222 10.5215 21.1028 10.4931 21.076 10.473C21.0454 10.4546 21.0099 10.4458 20.9743 10.4476C20.9252 10.4469 20.877 10.4612 20.8362 10.4885C20.7944 10.518 20.7634 10.5603 20.7478 10.609C20.7263 10.6941 20.7174 10.782 20.7213 10.8697V11.4829H20.3898L20.3799 10.2233Z"
      fill="#0054A5"
    />
    <Path
      d="M23.373 11.0861L23.7044 11.1413C23.6687 11.2534 23.5973 11.3508 23.5011 11.4186C23.3981 11.4855 23.2769 11.5187 23.1542 11.5136C23.0613 11.5206 22.9682 11.5046 22.8831 11.467C22.7979 11.4294 22.7233 11.3715 22.6658 11.2982C22.5788 11.1702 22.5351 11.0176 22.541 10.8629C22.5305 10.6836 22.5894 10.5071 22.7056 10.3701C22.7577 10.3119 22.8219 10.2657 22.8936 10.2348C22.9653 10.2039 23.043 10.189 23.1211 10.1911C23.204 10.1878 23.2867 10.2029 23.3631 10.2354C23.4395 10.2679 23.5078 10.3169 23.563 10.3789C23.6735 10.5038 23.7232 10.6938 23.7188 10.9513H22.8802C22.8764 11.0361 22.9052 11.1191 22.9608 11.1833C22.9857 11.2098 23.0159 11.2307 23.0494 11.2448C23.0829 11.2589 23.119 11.2658 23.1553 11.2651C23.203 11.2671 23.25 11.2522 23.2879 11.2231C23.3303 11.1877 23.3601 11.1397 23.373 11.0861ZM23.3906 10.748C23.3932 10.6676 23.3665 10.5891 23.3155 10.527C23.2929 10.5023 23.2655 10.4825 23.2348 10.469C23.2042 10.4555 23.1711 10.4485 23.1376 10.4485C23.1041 10.4485 23.071 10.4555 23.0404 10.469C23.0098 10.4825 22.9823 10.5023 22.9597 10.527C22.9085 10.5887 22.8832 10.6679 22.889 10.748H23.3906Z"
      fill="#0054A5"
    />
    <Path
      d="M25.2104 11.4828H24.879V10.8387C24.8836 10.7497 24.8762 10.6605 24.8569 10.5735C24.845 10.5358 24.8209 10.5031 24.7884 10.4807C24.7541 10.4579 24.7135 10.4463 24.6724 10.4475C24.6171 10.4469 24.5631 10.4635 24.5177 10.495C24.4736 10.5258 24.4406 10.57 24.4238 10.621C24.4026 10.7159 24.394 10.8133 24.3984 10.9105V11.4828H24.0669V10.2232H24.3774V10.4078C24.4446 10.3122 24.5427 10.2426 24.6551 10.2106C24.7675 10.1787 24.8875 10.1862 24.995 10.2321C25.0492 10.2533 25.0968 10.2883 25.1331 10.3337C25.1646 10.3753 25.1868 10.4231 25.1983 10.474C25.2124 10.5468 25.2187 10.6209 25.2171 10.695L25.2104 11.4828Z"
      fill="#0054A5"
    />
    <Path
      d="M26.2049 10.2232V10.4884H25.9773V10.9989C25.9751 11.059 25.9773 11.1192 25.9839 11.179C25.9877 11.1961 25.998 11.2112 26.0126 11.2209C26.0287 11.2323 26.0481 11.2382 26.0679 11.2375C26.1132 11.2345 26.1577 11.2237 26.1993 11.2055L26.2292 11.464C26.1462 11.4981 26.0571 11.5151 25.9673 11.5137C25.9118 11.5146 25.8565 11.5045 25.8049 11.4839C25.7614 11.4688 25.7231 11.4416 25.6944 11.4055C25.6697 11.3659 25.6538 11.3214 25.648 11.2751C25.6394 11.1969 25.6361 11.1183 25.6381 11.0397V10.4873H25.4856V10.2221H25.6381V9.96913L25.9695 9.77246V10.2221L26.2049 10.2232Z"
      fill="#0054A5"
    />
    <Path
      d="M26.3892 11.1271L26.7206 11.0752C26.7307 11.133 26.7613 11.1852 26.8068 11.2221C26.86 11.2593 26.9244 11.2772 26.9891 11.273C27.0574 11.2777 27.1255 11.2606 27.1836 11.2243C27.1975 11.2139 27.2087 11.2004 27.2164 11.1849C27.224 11.1693 27.2279 11.1522 27.2278 11.1348C27.2282 11.1232 27.2263 11.1117 27.2221 11.1008C27.2179 11.09 27.2116 11.0802 27.2035 11.0719C27.1704 11.0491 27.1326 11.034 27.093 11.0277C26.9141 10.9993 26.7405 10.9442 26.5781 10.8642C26.5306 10.8339 26.4918 10.7918 26.4654 10.7421C26.4391 10.6923 26.4261 10.6365 26.4278 10.5802C26.4271 10.5273 26.4385 10.4749 26.4611 10.427C26.4837 10.3792 26.5169 10.3371 26.5582 10.304C26.6752 10.2204 26.8182 10.1812 26.9615 10.1935C27.0957 10.1846 27.2298 10.2137 27.3482 10.2775C27.4341 10.3364 27.4961 10.4242 27.5228 10.525L27.2079 10.5846C27.1969 10.5394 27.1692 10.5 27.1305 10.4741C27.0817 10.4446 27.025 10.4307 26.9681 10.4344C26.9022 10.4291 26.836 10.4421 26.777 10.4719C26.7653 10.4789 26.7556 10.4888 26.7489 10.5006C26.7421 10.5124 26.7385 10.5257 26.7383 10.5393C26.7385 10.5515 26.7416 10.5635 26.7473 10.5743C26.7531 10.5851 26.7614 10.5943 26.7714 10.6012C26.8717 10.6456 26.9771 10.6771 27.0852 10.6951C27.219 10.7174 27.3464 10.7683 27.4587 10.8443C27.4949 10.8748 27.5236 10.9131 27.5427 10.9564C27.5619 10.9996 27.5709 11.0467 27.5692 11.094C27.5689 11.1515 27.5558 11.2083 27.5307 11.2601C27.5057 11.3119 27.4694 11.3574 27.4244 11.3934C27.3013 11.4854 27.149 11.5298 26.9957 11.5182C26.8524 11.5259 26.7102 11.4897 26.588 11.4144C26.4878 11.3472 26.4168 11.2446 26.3892 11.1271Z"
      fill="#0054A5"
    />
    <Path
      d="M30.2497 11.4827H29.8707L29.7205 11.0894H29.0189L28.8753 11.4827H28.5029L29.1769 9.74255H29.547L30.2497 11.4827ZM29.6045 10.7955L29.3614 10.1503L29.1261 10.7955H29.6045Z"
      fill="#0054A5"
    />
    <Path
      d="M30.8254 11.4829H30.4939V10.2233H30.8043V10.4023C30.8401 10.3367 30.889 10.2792 30.948 10.2333C30.9906 10.2053 31.0406 10.1906 31.0916 10.1913C31.1698 10.192 31.2462 10.2141 31.3126 10.2554L31.2109 10.5471C31.165 10.5141 31.1105 10.4949 31.054 10.4918C31.011 10.4906 30.9689 10.5042 30.9347 10.5305C30.8952 10.5682 30.8682 10.6172 30.8574 10.6708C30.833 10.8105 30.8238 10.9523 30.8298 11.094L30.8254 11.4829Z"
      fill="#0054A5"
    />
    <Path
      d="M32.2583 11.0862L32.5898 11.1415C32.554 11.2536 32.4826 11.351 32.3865 11.4188C32.2834 11.4856 32.1622 11.5187 32.0396 11.5138C31.9467 11.5208 31.8536 11.5048 31.7684 11.4672C31.6833 11.4296 31.6086 11.3716 31.5512 11.2984C31.4641 11.1703 31.4204 11.0178 31.4264 10.8631C31.4153 10.6837 31.4744 10.507 31.591 10.3703C31.6431 10.3121 31.7072 10.2659 31.779 10.235C31.8507 10.2041 31.9283 10.1892 32.0064 10.1913C32.0895 10.1873 32.1723 10.2022 32.2488 10.2347C32.3254 10.2672 32.3936 10.3166 32.4483 10.3791C32.5588 10.504 32.6097 10.694 32.6052 10.9515H31.7656C31.7626 11.0363 31.7918 11.1192 31.8473 11.1835C31.8722 11.2099 31.9024 11.2309 31.9359 11.245C31.9694 11.2591 32.0054 11.266 32.0418 11.2652C32.0895 11.2672 32.1364 11.2523 32.1743 11.2232C32.2159 11.1875 32.2453 11.1396 32.2583 11.0862ZM32.276 10.7481C32.2786 10.6678 32.2519 10.5893 32.2009 10.5272C32.1782 10.5024 32.1506 10.4827 32.1199 10.4691C32.0892 10.4556 32.056 10.4486 32.0224 10.4486C31.9889 10.4486 31.9557 10.4556 31.9249 10.4691C31.8942 10.4827 31.8667 10.5024 31.844 10.5272C31.7936 10.5893 31.7687 10.6683 31.7744 10.7481H32.276Z"
      fill="#0054A5"
    />
    <Path
      d="M33.1964 10.6057L32.8959 10.5504C32.9211 10.4425 32.9832 10.3467 33.0716 10.2797C33.1832 10.2135 33.3122 10.1827 33.4417 10.1914C33.5547 10.1857 33.6676 10.2038 33.7732 10.2444C33.8377 10.2718 33.8918 10.319 33.9279 10.3792C33.9646 10.4745 33.9797 10.5768 33.9721 10.6786V11.0686C33.9702 11.1507 33.9754 11.2327 33.9875 11.3139C34.0004 11.3726 34.0208 11.4294 34.0483 11.4829H33.7168C33.7043 11.4512 33.6936 11.4187 33.6848 11.3857C33.6848 11.3669 33.6749 11.3537 33.6726 11.347C33.6199 11.3996 33.5581 11.4423 33.4903 11.473C33.4246 11.5005 33.3539 11.5144 33.2826 11.5139C33.1705 11.52 33.0604 11.4824 32.9755 11.4089C32.9163 11.3498 32.8783 11.2729 32.8673 11.19C32.8563 11.1071 32.873 11.0229 32.9147 10.9504C32.9484 10.8942 32.998 10.8492 33.0572 10.8211C33.1424 10.7844 33.2319 10.7585 33.3235 10.7438C33.4338 10.7267 33.5423 10.6989 33.6472 10.6609V10.6278C33.6499 10.6025 33.6469 10.577 33.6387 10.553C33.6305 10.5289 33.6172 10.507 33.5997 10.4886C33.5459 10.4553 33.4825 10.4409 33.4196 10.4477C33.3703 10.4446 33.3213 10.457 33.2793 10.483C33.2397 10.5144 33.2108 10.5572 33.1964 10.6057ZM33.645 10.8786C33.6019 10.8929 33.5345 10.9106 33.4428 10.9305C33.3796 10.9398 33.3183 10.9596 33.2616 10.9891C33.2417 11.0014 33.2252 11.0186 33.2137 11.0391C33.2023 11.0596 33.1964 11.0827 33.1964 11.1062C33.1962 11.129 33.2006 11.1515 33.2096 11.1724C33.2185 11.1934 33.2317 11.2122 33.2484 11.2277C33.2658 11.2449 33.2865 11.2584 33.3093 11.2674C33.3321 11.2763 33.3565 11.2805 33.381 11.2797C33.4433 11.2788 33.5038 11.2579 33.5533 11.22C33.5911 11.193 33.6187 11.1541 33.6318 11.1095C33.6429 11.0558 33.6474 11.0008 33.645 10.946V10.8786Z"
      fill="#0054A5"
    />
    <Path
      d="M8.11365 2.90456H5.83321C5.83321 2.53112 5.78937 2.28032 5.70171 2.15216C5.56618 1.96285 5.19164 1.8682 4.57807 1.8682C3.98218 1.8682 3.58812 1.92271 3.39587 2.03173C3.20362 2.14222 3.10638 2.37865 3.10638 2.74547C3.10638 3.07693 3.19257 3.29791 3.36272 3.39955C3.51207 3.48125 3.67869 3.52631 3.84886 3.53103L4.30958 3.56307C5.29513 3.62789 5.91055 3.67393 6.15583 3.70118C6.93513 3.77926 7.50007 3.98624 7.85068 4.32212C8.13218 4.59492 8.30697 4.95933 8.34347 5.34963C8.37616 5.63423 8.39165 5.92055 8.38987 6.20701C8.38987 6.94359 8.3199 7.48056 8.17995 7.81792C7.92583 8.4418 7.35498 8.8366 6.46741 9.00233C5.90312 9.08539 5.33281 9.1205 4.76259 9.10729C3.48536 9.10729 2.59557 9.03106 2.09323 8.87859C1.47671 8.69076 1.07159 8.31142 0.877874 7.74057C0.76886 7.4231 0.714355 6.89387 0.714355 6.15287H2.9948V6.34182C2.9948 6.73736 3.10823 6.99184 3.3351 7.10527C3.51359 7.18833 3.70835 7.23061 3.90521 7.22901H4.7438C5.17102 7.22901 5.44391 7.20692 5.5625 7.16272C5.65676 7.1316 5.74284 7.07969 5.81436 7.01085C5.88588 6.942 5.94102 6.85798 5.97572 6.76498C6.01424 6.62093 6.03173 6.47208 6.02765 6.32303C6.02765 5.92159 5.88033 5.67742 5.5857 5.5905C5.47595 5.55662 4.96772 5.50874 4.06099 5.44686C3.33178 5.39457 2.82538 5.34448 2.5418 5.2966C1.79491 5.15592 1.29735 4.86829 1.04912 4.43371C0.828147 4.06542 0.71766 3.50487 0.71766 2.75209C0.702859 2.2878 0.762553 1.82415 0.894449 1.37875C0.993084 1.0614 1.19391 0.785591 1.46566 0.594295C1.85015 0.320288 2.34181 0.158977 2.94065 0.110363C3.43858 0.0669048 3.99101 0.045166 4.59795 0.045166C5.55551 0.045166 6.23721 0.0996841 6.64306 0.208698C7.63597 0.476076 8.13205 1.22296 8.13132 2.44936C8.13463 2.55322 8.12801 2.70348 8.11365 2.90456Z"
      fill="#0054A5"
    />
    <Path
      d="M18.1392 9.10741V0H22.7056C23.3324 0 23.8112 0.0511938 24.1419 0.153578C24.4933 0.25176 24.8151 0.434962 25.0789 0.687008C25.3427 0.939054 25.5404 1.25218 25.6545 1.59874C25.7885 1.98102 25.8552 2.55629 25.8545 3.32454C25.8545 4.24821 25.7808 4.91113 25.6335 5.3133C25.3389 6.11249 24.7367 6.57211 23.827 6.69217C23.7165 6.70985 23.2647 6.72643 22.4603 6.73858L22.0537 6.75295H20.592V9.10411L18.1392 9.10741ZM20.5897 4.64375H22.1167C22.6013 4.62607 22.896 4.58924 23.0006 4.53326C23.1479 4.45371 23.2447 4.29424 23.2911 4.05486C23.3276 3.82025 23.3431 3.58288 23.3376 3.34553C23.3492 3.05672 23.318 2.76778 23.2447 2.48816C23.1564 2.22594 22.945 2.06646 22.6106 2.00975C22.5443 2.00091 22.3896 1.99649 22.1355 1.99649H20.5886L20.5897 4.64375Z"
      fill="#0054A5"
    />
    <Path
      d="M31.085 7.53298H27.8079L27.366 9.10741H24.8303L27.5671 0H31.264L34.0339 9.10741H31.5523L31.085 7.53298ZM30.5977 5.75857L29.4498 1.81088L28.335 5.75857H30.5977Z"
      fill="#0054A5"
    />
    <Path
      d="M14.7571 1.28173C15.2375 1.28143 15.712 1.38853 16.1457 1.59517C16.5795 1.80182 16.9616 2.10278 17.264 2.47608L17.7922 1.3436C17.2483 0.830462 16.5885 0.456356 15.8689 0.253105C15.1494 0.049855 14.3914 0.0234879 13.6594 0.176256C12.9275 0.329024 12.2433 0.656402 11.6651 1.13051C11.0869 1.60462 10.6319 2.21142 10.3387 2.89926H9.30898L8.7002 4.20299H10.026C10.0161 4.32453 10.0094 4.44496 10.0094 4.56871C10.0094 4.71787 10.0172 4.86592 10.0316 5.01066H9.36865L8.75986 6.3155H10.373C10.7348 7.1342 11.3277 7.82949 12.079 8.31603C12.8303 8.80258 13.7073 9.05922 14.6024 9.05447C15.521 9.05804 16.4201 8.78887 17.1856 8.28106V6.68232C16.8576 7.05716 16.4472 7.35094 15.9867 7.54063C15.5262 7.73032 15.028 7.81076 14.5311 7.77566C14.0343 7.74055 13.5523 7.59085 13.123 7.33828C12.6937 7.08572 12.3288 6.73716 12.0568 6.31992H15.4344L16.0431 5.01508H11.5607C11.5368 4.85599 11.5246 4.69534 11.5242 4.53445C11.5242 4.42397 11.5309 4.31348 11.5408 4.20299H16.4199L17.0287 2.89926H11.9629C12.2458 2.40826 12.653 2.00032 13.1434 1.71641C13.6339 1.43249 14.1904 1.28259 14.7571 1.28173Z"
      fill="#FFC10E"
    />
    <Path
      d="M14.7573 1.32028C15.232 1.31985 15.7008 1.42571 16.1292 1.63009C16.5577 1.83447 16.9349 2.13219 17.2333 2.50139L17.2731 2.55L17.2996 2.49365L17.8277 1.36005L17.8399 1.33464L17.8189 1.31476C17.0424 0.587189 16.0424 0.144048 14.9818 0.0575729C13.9212 -0.028902 12.8626 0.246382 11.9786 0.83856C11.2297 1.33902 10.6467 2.05091 10.3036 2.88367L10.3389 2.85937H9.28379L9.27384 2.88256L8.66506 4.18631L8.63965 4.24266H10.0263L9.98758 4.19957C9.97543 4.33547 9.97102 4.4559 9.97102 4.56859C9.97096 4.71619 9.97833 4.86369 9.99311 5.01054L10.0318 4.96745H9.34125L9.3313 4.98954L8.72251 6.29439L8.6971 6.34964H10.371L10.3345 6.32644C10.6987 7.15272 11.2966 7.85444 12.0545 8.34522C12.8125 8.836 13.6974 9.09441 14.6004 9.08861C15.5272 9.09102 16.4339 8.81839 17.2057 8.30525L17.2222 8.2942V6.56951L17.1549 6.64795C16.8307 7.01817 16.4253 7.30829 15.9702 7.49557C15.5152 7.68286 15.023 7.76223 14.5322 7.72744C14.0414 7.69266 13.5652 7.54467 13.1412 7.29509C12.7171 7.0455 12.3566 6.70109 12.0879 6.28886L12.0548 6.34964H15.4578L15.4677 6.32755L16.0765 5.02269L16.103 4.96745H11.5587L11.5974 5.0006C11.5741 4.8433 11.5623 4.68451 11.562 4.5255C11.562 4.41738 11.5676 4.30933 11.5786 4.20177L11.5388 4.23713H16.4433L16.4533 4.21393L17.062 2.91019L17.0875 2.85384H11.9609L11.9951 2.9124C12.2765 2.42902 12.6795 2.02772 13.1641 1.7484C13.6487 1.46909 14.198 1.32149 14.7573 1.32028ZM11.9609 2.93781H17.0267L16.9913 2.88256L16.3826 4.18631L16.4179 4.16421H11.5035V4.19957C11.4924 4.30971 11.4869 4.42034 11.4869 4.53103C11.4871 4.69371 11.4989 4.85616 11.5223 5.01716L11.5278 5.05142H16.04L16.0047 4.99507L15.3959 6.29992L15.4313 6.27671H11.9819L12.0216 6.33749C12.2969 6.76009 12.6663 7.11317 13.101 7.36905C13.5356 7.62493 14.0235 7.77663 14.5266 7.81228C15.0297 7.84792 15.5342 7.76653 16.0006 7.57449C16.4669 7.38245 16.8824 7.08497 17.2145 6.7054L17.146 6.67889V8.27763L17.1626 8.24559C16.4042 8.75115 15.5129 9.02032 14.6015 9.019C13.7138 9.02497 12.8438 8.771 12.0987 8.28842C11.3536 7.80583 10.7661 7.11574 10.4085 6.30323L10.3975 6.27892H8.75898L8.79432 6.33527L9.4031 5.03042L9.36777 5.05363H10.0738V5.00943C10.0583 4.86263 10.0506 4.71511 10.0506 4.56749C10.0506 4.457 10.0561 4.33767 10.0671 4.20509V4.1631H8.69932L8.73465 4.21834L9.34343 2.91461L9.3081 2.9367H10.3643L10.3743 2.9124C10.7114 2.09394 11.2845 1.39431 12.0206 0.902637C12.8901 0.319774 13.9316 0.0487788 14.975 0.133856C16.0184 0.218934 17.0022 0.655061 17.7659 1.3711L17.757 1.32581L17.23 2.4594L17.2952 2.45056C16.9615 2.03859 16.5325 1.71409 16.0453 1.50508C15.5581 1.29607 15.0273 1.20884 14.4989 1.25094C13.9704 1.29304 13.4601 1.46319 13.0122 1.7467C12.5642 2.03021 12.192 2.41855 11.9277 2.87814L11.8935 2.9367L11.9609 2.93781Z"
      fill="#0054A5"
    />
  </Svg>
);

export default memo(Sepa);
