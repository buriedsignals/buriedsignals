// Styles
import { LogoStyle } from "./index.style"

export default function Logo({ type, ...props }) {
  return (
    <>
      {(() => {
        switch (type) {
          case 'long':
            return  <LogoStyle className="logo-long" { ...props } width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="icon" d="M21.2165 3.41464C25.1069 -0.475203 31.2902 -0.550379 35.1927 3.35145L37.5706 5.72907C37.696 5.85441 37.696 6.05764 37.5706 6.18298L23.9852 19.7664C23.8599 19.8917 23.6567 19.8917 23.5314 19.7664L21.1533 17.3887C17.2509 13.4869 17.3261 7.30448 21.2165 3.41464Z"/>
              <path className="icon" d="M13.9639 15.2725C13.909 15.2464 13.9006 15.1709 13.9486 15.1335C15.8503 13.6497 17.0552 11.3196 17.0552 8.68889C17.0552 4.18329 13.5207 0.559227 9.00443 0.559227H0.321205C0.143954 0.559227 0.000263728 0.702917 0.000263718 0.880168L0.000262944 14.4391H7.77309e-07L0 31.3689C-8.13823e-09 31.5462 0.14369 31.6899 0.320941 31.6899H10.2273C15.0587 31.6899 18.8398 27.8448 18.8398 23.0645C18.8398 19.6168 16.873 16.6556 13.9639 15.2725Z"/>
              <path className="icon" d="M32.4384 13.1731C32.5637 13.0478 32.7669 13.0478 32.8922 13.1731L33.7545 14.0352C33.8798 14.1606 33.8798 14.3638 33.7545 14.4891L21.7968 26.4451C21.671 26.5709 21.4669 26.5704 21.3417 26.4439L20.484 25.5773C20.3597 25.4518 20.3602 25.2495 20.4851 25.1246L32.4384 13.1731Z"/>
              <path className="icon" d="M24.0241 28.6954C23.8983 28.8211 23.6942 28.8206 23.5691 28.6942L22.7061 27.8224C22.5819 27.6968 22.5824 27.4945 22.7073 27.3696L28.6904 21.3766L34.6721 15.4066C34.7975 15.2812 35.0007 15.2812 35.126 15.4066L35.9934 16.2739C36.1188 16.3992 36.1188 16.6024 35.9934 16.7278L24.0241 28.6954Z"/>
              <path className="icon" d="M24.9346 29.6199C24.8097 29.7448 24.8092 29.9471 24.9335 30.0726L25.7964 30.9444C25.9215 31.0709 26.1256 31.0714 26.2514 30.9456L38.2324 18.9664C38.3577 18.8411 38.3577 18.6378 38.2324 18.5125L37.3649 17.6452C37.2396 17.5199 37.0364 17.5199 36.9111 17.6452L24.9346 29.6199Z"/>
              <path className="icon" d="M30.0729 31.6019C30.0128 31.6621 29.9311 31.6959 29.846 31.6959H27.7237C27.5807 31.6959 27.5091 31.523 27.6102 31.4219L38.6944 20.3394C38.7956 20.2382 38.9687 20.3102 38.9683 20.4534L38.9618 22.5824C38.9615 22.6672 38.9277 22.7484 38.8678 22.8084L30.0729 31.6019Z"/>
              <path className="icon" d="M38.9544 24.9446C38.9549 24.8014 38.7817 24.7293 38.6804 24.8306L32.0881 31.4219C31.987 31.523 32.0586 31.6959 32.2016 31.6959L35.76 31.6959C35.8456 31.6959 35.9277 31.6616 35.988 31.6008L38.8492 28.7126C38.9085 28.6528 38.9419 28.572 38.9421 28.4878L38.9544 24.9446Z"/>
              <path className="text" d="M113.593 12.1965C114.119 11.535 115.405 12.0082 116.426 13.3644L119.563 12.1965C118.877 9.8606 117.298 8.44238 114.473 8.44238C111.481 8.44238 109.674 10.5697 109.674 12.8847C109.674 15.4083 111.149 16.326 112.354 17.056L114.909 18.6202C114.909 18.6202 117.037 19.9178 115.405 21.1438C114.473 21.8436 113.226 20.2678 112.354 19.0373L109.175 20.2678C109.57 22.7288 111.19 24.7519 114.494 24.7519C117.527 24.7519 119.667 22.9165 119.667 20.1218C119.667 17.8694 118.399 16.5971 117.132 15.8255L114.203 14.0318C113.176 13.4207 113.068 12.8579 113.593 12.1965Z"/>
              <path className="text" fillRule="evenodd" clipRule="evenodd" d="M56.6919 16.326C58.437 17.056 59.1226 18.6619 59.1226 20.1635C59.1226 22.5203 57.1282 24.4182 54.2197 24.4182H47.9248V8.77608H53.9288C56.8374 8.77608 58.7902 10.4237 58.7902 12.989C58.7902 14.2821 58.1877 15.6795 56.6919 16.326ZM53.5133 11.9254H51.5812V15.0746H53.4926C54.5521 15.0746 55.113 14.3655 55.113 13.4896C55.113 12.5928 54.5521 11.9254 53.5133 11.9254ZM51.5812 21.2272H53.8042C54.8429 21.2272 55.4246 20.5181 55.4246 19.6421C55.4246 18.787 54.8429 18.0571 53.7834 18.0571H51.5812V21.2272Z"/>
              <path className="text" d="M69.8986 13.5521V24.4182H60.2589V13.5521H63.8738V21.2689H66.2837V13.5521H69.8986Z"/>
              <path className="text" d="M71.6245 13.5521V24.4182H75.2394V16.7431H77.0676V13.5521H71.6245Z"/>
              <path className="text" d="M81.8708 13.5521V24.4182H78.256V13.5521H81.8708Z"/>
              <path className="text" fillRule="evenodd" clipRule="evenodd" d="M93.2564 22.708L91.1997 20.5181C90.5972 21.2898 89.9324 21.5818 88.9352 21.5818C87.7094 21.5818 86.9823 21.0395 86.733 19.9967H93.9835C94.0459 19.6838 94.0666 19.3084 94.0666 18.9539C94.0666 15.5752 91.9683 13.2184 88.7897 13.2184C85.3618 13.2184 82.9935 15.5752 82.9935 18.9956C82.9935 22.3534 85.3411 24.7519 88.8313 24.7519C90.6803 24.7519 92.1345 24.1679 93.2564 22.708ZM88.7066 16.2634C89.7246 16.2634 90.3894 16.91 90.5349 17.8902H86.7122C86.9615 16.8474 87.6263 16.2634 88.7066 16.2634Z"/>
              <path className="text" fillRule="evenodd" clipRule="evenodd" d="M99.8082 24.7519C96.8373 24.7519 94.6975 22.416 94.6975 18.9956C94.6975 15.5543 96.9412 13.2184 99.9744 13.2184C101.179 13.2184 102.239 13.6147 102.758 14.2612H102.841C102.841 14.2387 102.84 14.2115 102.838 14.1719C102.832 14.0651 102.821 13.868 102.821 13.427V9.40597H106.394V24.4182H103.07V24.0845C103.07 23.7716 103.091 23.5214 103.111 23.3754H103.028C102.343 24.2722 101.179 24.7519 99.8082 24.7519ZM98.3332 18.933C98.3332 20.4972 99.2888 21.5192 100.618 21.5192C101.969 21.5192 102.945 20.4972 102.945 18.933C102.945 17.3897 101.969 16.3886 100.618 16.3886C99.2888 16.3886 98.3332 17.3897 98.3332 18.933Z"/>
              <path className="text" d="M124.514 13.5521V24.4182H120.899V13.5521H124.514Z"/>
              <path className="text" fillRule="evenodd" clipRule="evenodd" d="M125.657 18.787C125.657 22.0823 127.818 24.3139 130.789 24.3139C132.035 24.3139 133.116 23.8759 133.593 23.2294H133.676C133.656 23.438 133.656 23.5631 133.656 24.0011V25.7957H128.285V28.945H135.057L137.208 26.7938V13.5521H133.905V13.9693C133.905 14.2612 133.926 14.449 133.947 14.5949H133.863C133.199 13.719 132.077 13.2184 130.685 13.2184C127.776 13.2184 125.657 15.45 125.657 18.787ZM131.516 16.3677C132.845 16.3677 133.78 17.3062 133.78 18.7453C133.78 20.1844 132.845 21.1438 131.516 21.1438C130.207 21.1438 129.272 20.2052 129.272 18.7453C129.272 17.3062 130.207 16.3677 131.516 16.3677Z"/>
              <path className="text" d="M138.923 24.4182V13.5521H148.646V24.4182H145.031V16.6597H142.538V24.4182H138.923Z"/>
              <path className="text" fillRule="evenodd" clipRule="evenodd" d="M149.788 18.9956C149.788 22.416 151.928 24.7519 154.899 24.7519C156.312 24.7519 157.454 24.2513 158.119 23.3754H158.202C158.181 23.5214 158.161 23.7299 158.161 24.0219V24.4182H161.464V13.5521H158.161V13.9067C158.161 14.2404 158.181 14.3864 158.202 14.4907H158.119C157.517 13.6981 156.457 13.2184 155.065 13.2184C152.053 13.2184 149.788 15.5543 149.788 18.9956ZM155.709 21.5609C154.38 21.5609 153.424 20.5181 153.424 18.933C153.424 17.3897 154.38 16.3677 155.709 16.3677C157.06 16.3677 158.036 17.3897 158.036 18.933C158.036 20.5181 157.06 21.5609 155.709 21.5609Z"/>
              <path className="text" d="M166.766 24.4182H163.151L163.326 9.40597H166.941L166.766 24.4182Z"/>
              <path className="text" d="M171.367 16.4094C171.367 16.0757 171.616 15.8463 171.99 15.8463C172.697 15.8463 173.361 16.4303 173.694 16.9934L175.979 15.5335C175.314 14.303 174.151 13.2184 171.907 13.2184C169.746 13.2184 168.147 14.7827 168.147 16.5346C168.147 18.5368 169.352 19.2042 170.557 19.8716L171.824 20.6015C172.385 20.8935 172.551 21.1021 172.551 21.3732C172.551 21.7277 172.281 21.9572 171.865 21.9572C170.91 21.9572 170.287 21.1229 170.141 20.6641L167.71 22.0614C168.147 23.4171 169.352 24.7519 171.865 24.7519C174.483 24.7519 176 23.3128 176 21.2689C176 19.4127 174.878 18.6619 173.756 18.0571L172.406 17.3271C171.616 16.91 171.367 16.7431 171.367 16.4094Z"/>
              <path className="text" d="M78.3295 9.85101H81.8282V12.2419H78.3295V9.85101Z"/>
              <path className="text" d="M124.306 9.85101H120.807V12.2419H124.306V9.85101Z"/>
            </LogoStyle>
          case 'large':
            return  <LogoStyle className="logo-large" { ...props } width="108" height="74" viewBox="0 0 108 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M55.9465 3.61219C60.7042 -1.14484 68.266 -1.23678 73.0384 3.53492L75.9465 6.44259C76.0998 6.59587 76.0998 6.84442 75.9465 6.9977L59.3324 23.6093C59.1791 23.7626 58.9307 23.7626 58.7774 23.6093L55.8692 20.7016C51.0968 15.9299 51.1888 8.36922 55.9465 3.61219Z"/>
              <path d="M47.077 18.1137C47.0098 18.0817 46.9996 17.9894 47.0582 17.9436C49.3839 16.1291 50.8575 13.2794 50.8575 10.0623C50.8575 4.55221 46.535 0.120201 41.0118 0.120201H30.3928C30.176 0.120201 30.0003 0.295926 30.0003 0.512693L30.0003 17.0944H30L30 37.7985C30 38.0153 30.1757 38.191 30.3925 38.191H42.5074C48.4158 38.191 53.0399 33.4888 53.0399 27.6427C53.0399 23.4264 50.6346 19.8051 47.077 18.1137Z"/>
              <path d="M69.6725 15.5463C69.8258 15.393 70.0742 15.393 70.2275 15.5463L71.282 16.6006C71.4353 16.7539 71.4353 17.0025 71.282 17.1557L56.6585 31.7771C56.5046 31.9309 56.2551 31.9303 56.102 31.7757L55.053 30.7159C54.901 30.5623 54.9017 30.3149 55.0544 30.1622L69.6725 15.5463Z"/>
              <path d="M59.3823 34.529C59.2285 34.6828 58.9789 34.6822 58.8259 34.5276L57.7706 33.4614C57.6186 33.3079 57.6193 33.0605 57.772 32.9078L65.089 25.5786L72.4043 18.2777C72.5575 18.1244 72.806 18.1244 72.9593 18.2777L74.0201 19.3383C74.1734 19.4916 74.1734 19.7402 74.0201 19.8934L59.3823 34.529Z"/>
              <path d="M60.4959 35.6597C60.3431 35.8124 60.3425 36.0598 60.4945 36.2133L61.5498 37.2795C61.7028 37.4341 61.9524 37.4348 62.1062 37.2809L76.7582 22.6311C76.9115 22.4779 76.9115 22.2293 76.7582 22.076L75.6974 21.0154C75.5441 20.8621 75.2956 20.8621 75.1423 21.0154L60.4959 35.6597Z"/>
              <path d="M66.7797 38.0835C66.7061 38.1571 66.6063 38.1985 66.5022 38.1985H63.9067C63.7319 38.1985 63.6443 37.9871 63.768 37.8634L77.3232 24.3102C77.447 24.1864 77.6587 24.2745 77.6582 24.4496L77.6502 27.0532C77.6499 27.1569 77.6085 27.2563 77.5352 27.3296L66.7797 38.0835Z"/>
              <path d="M77.6412 29.9421C77.6418 29.7669 77.43 29.6788 77.3061 29.8026L69.2442 37.8634C69.1205 37.9871 69.2081 38.1985 69.3829 38.1985L73.7346 38.1984C73.8393 38.1984 73.9397 38.1566 74.0134 38.0822L77.5125 34.5501C77.585 34.4769 77.6258 34.3782 77.6262 34.2752L77.6412 29.9421Z"/>
              <path d="M55.0758 59.6453C55.5168 59.0905 56.595 59.4874 57.4513 60.6248L60.0823 59.6453C59.5073 57.6862 58.1831 56.4968 55.8134 56.4968C53.3044 56.4968 51.7885 58.2809 51.7885 60.2225C51.7885 62.3391 53.0256 63.1087 54.0362 63.7209L56.1793 65.0328C56.1793 65.0328 57.9642 66.1211 56.595 67.1493C55.8134 67.7363 54.768 66.4147 54.0362 65.3826L51.3703 66.4147C51.7014 68.4787 53.0604 70.1754 55.8308 70.1754C58.3747 70.1754 60.1694 68.6361 60.1694 66.2922C60.1694 64.4031 59.1066 63.3361 58.0437 62.6889L55.5869 61.1846C54.7253 60.672 54.6347 60.2001 55.0758 59.6453Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.35292 63.1087C8.81654 63.7209 9.39153 65.0678 9.39153 66.3272C9.39153 68.3038 7.71883 69.8955 5.27947 69.8955H0V56.7766H5.03553C7.47489 56.7766 9.11275 58.1585 9.11275 60.31C9.11275 61.3945 8.60745 62.5664 7.35292 63.1087ZM4.68705 59.4179H3.06662V62.0592H4.66963C5.55825 62.0592 6.0287 61.4645 6.0287 60.7298C6.0287 59.9776 5.55825 59.4179 4.68705 59.4179ZM3.06662 67.2193H4.93099C5.80219 67.2193 6.29006 66.6246 6.29006 65.8899C6.29006 65.1727 5.80219 64.5605 4.91357 64.5605H3.06662V67.2193Z"/>
              <path d="M18.4292 60.7823V69.8955H10.3445V60.7823H13.3763V67.2543H15.3975V60.7823H18.4292Z"/>
              <path d="M19.8767 60.7823V69.8955H22.9085V63.4585H24.4418V60.7823H19.8767Z"/>
              <path d="M28.4703 60.7823V69.8955H25.4385V60.7823H28.4703Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M38.0193 68.4612L36.2943 66.6246C35.789 67.2718 35.2314 67.5167 34.3951 67.5167C33.3671 67.5167 32.7572 67.0619 32.5481 66.1873H38.6291C38.6814 65.9249 38.6988 65.61 38.6988 65.3127C38.6988 62.479 36.939 60.5024 34.2731 60.5024C31.3981 60.5024 29.4118 62.479 29.4118 65.3477C29.4118 68.1639 31.3807 70.1754 34.308 70.1754C35.8587 70.1754 37.0784 69.6856 38.0193 68.4612ZM34.2034 63.0562C35.0572 63.0562 35.6147 63.5985 35.7367 64.4206H32.5307C32.7398 63.546 33.2974 63.0562 34.2034 63.0562Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M43.5142 70.1754C41.0226 70.1754 39.2279 68.2163 39.2279 65.3477C39.2279 62.4615 41.1097 60.5024 43.6536 60.5024C44.6642 60.5024 45.5528 60.8348 45.9884 61.377H46.0581C46.0581 61.3581 46.0568 61.3353 46.055 61.302C46.0499 61.2125 46.0407 61.0472 46.0407 60.6773V57.3049H49.0376V69.8955H46.2498V69.6157C46.2498 69.3533 46.2672 69.1434 46.2846 69.021H46.2149C45.6399 69.7731 44.6642 70.1754 43.5142 70.1754ZM42.2771 65.2952C42.2771 66.6071 43.0786 67.4642 44.1937 67.4642C45.3263 67.4642 46.1452 66.6071 46.1452 65.2952C46.1452 64.0008 45.3263 63.1612 44.1937 63.1612C43.0786 63.1612 42.2771 64.0008 42.2771 65.2952Z"/>
              <path d="M64.2346 60.7823V69.8955H61.2028V60.7823H64.2346Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M65.1936 65.1727C65.1936 67.9365 67.0056 69.8081 69.4973 69.8081C70.5427 69.8081 71.4488 69.4408 71.8495 68.8985H71.9192C71.9018 69.0734 71.9018 69.1784 71.9018 69.5457V71.0509H67.3975V73.6921H73.0771L74.8813 71.8879V60.7823H72.1109V61.1321C72.1109 61.377 72.1283 61.5344 72.1457 61.6569H72.076C71.5185 60.9222 70.5776 60.5024 69.4102 60.5024C66.9708 60.5024 65.1936 62.374 65.1936 65.1727ZM70.1071 63.1437C71.2223 63.1437 72.0063 63.9308 72.0063 65.1378C72.0063 66.3447 71.2223 67.1493 70.1071 67.1493C69.0094 67.1493 68.2253 66.3622 68.2253 65.1378C68.2253 63.9308 69.0094 63.1437 70.1071 63.1437Z"/>
              <path d="M76.3197 69.8955V60.7823H84.4741V69.8955H81.4423V63.3886H79.3515V69.8955H76.3197Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M85.4321 65.3477C85.4321 68.2163 87.2268 70.1754 89.7184 70.1754C90.9033 70.1754 91.8616 69.7556 92.4191 69.021H92.4888C92.4714 69.1434 92.454 69.3183 92.454 69.5632V69.8955H95.2244V60.7823H92.454V61.0796C92.454 61.3595 92.4714 61.482 92.4888 61.5694H92.4191C91.9138 60.9047 91.0252 60.5024 89.8578 60.5024C87.3313 60.5024 85.4321 62.4615 85.4321 65.3477ZM90.3979 67.4992C89.2828 67.4992 88.4813 66.6246 88.4813 65.2952C88.4813 64.0008 89.2828 63.1437 90.3979 63.1437C91.5305 63.1437 92.3494 64.0008 92.3494 65.2952C92.3494 66.6246 91.5305 67.4992 90.3979 67.4992Z"/>
              <path d="M99.6709 69.8955H96.6391L96.7858 57.3049H99.8176L99.6709 69.8955Z"/>
              <path d="M103.53 63.1787C103.53 62.8988 103.739 62.7064 104.053 62.7064C104.645 62.7064 105.203 63.1962 105.481 63.6684L107.398 62.444C106.84 61.412 105.865 60.5024 103.983 60.5024C102.171 60.5024 100.829 61.8143 100.829 63.2836C100.829 64.9628 101.84 65.5226 102.85 66.0823L103.913 66.6945C104.384 66.9394 104.523 67.1143 104.523 67.3417C104.523 67.6391 104.297 67.8315 103.948 67.8315C103.147 67.8315 102.624 67.1318 102.502 66.747L100.463 67.919C100.829 69.0559 101.84 70.1754 103.948 70.1754C106.143 70.1754 107.415 68.9685 107.415 67.2543C107.415 65.6975 106.475 65.0678 105.534 64.5605L104.401 63.9483C103.739 63.5985 103.53 63.4585 103.53 63.1787Z"/>
              <path d="M25.5002 57.6782H28.4345V59.6834H25.5002V57.6782Z"/>
              <path d="M64.0602 57.6782H61.1259V59.6834H64.0602V57.6782Z"/>
            </LogoStyle>
          default:
            return <LogoStyle className="logo-default" { ...props } width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8905 2.80381C23.5377 -0.84748 29.3346 -0.918046 32.9931 2.7445L35.2224 4.9763C35.3399 5.09395 35.3399 5.28472 35.2224 5.40237L22.4861 18.1527C22.3686 18.2704 22.1781 18.2704 22.0606 18.1527L19.8312 15.9209C16.1727 12.2583 16.2432 6.4551 19.8905 2.80381Z" fill="#A0FFCC"/>
              <path d="M13.0911 13.9345C13.0396 13.91 13.0318 13.8391 13.0768 13.804C14.8597 12.4112 15.9893 10.224 15.9893 7.75461C15.9893 3.52532 12.6757 0.123511 8.44165 0.123511H0.30113C0.134957 0.123511 0.000247245 0.25839 0.000247235 0.42477L0.00024651 13.1522H7.28726e-07L0 29.0437C-7.62959e-09 29.2101 0.13471 29.345 0.300882 29.345H9.58809C14.1175 29.345 17.6623 25.7358 17.6623 21.2486C17.6623 18.0123 15.8184 15.2327 13.0911 13.9345Z" fill="#A0FFCC"/>
              <path d="M30.4115 11.9632C30.529 11.8456 30.7195 11.8456 30.837 11.9632L31.6453 12.7725C31.7629 12.8902 31.7629 13.0809 31.6453 13.1986L20.435 24.4213C20.3171 24.5394 20.1257 24.5389 20.0084 24.4202L19.2042 23.6067C19.0877 23.4889 19.0882 23.299 19.2053 23.1818L30.4115 11.9632Z" fill="#A0FFCC"/>
              <path d="M22.5231 26.5336C22.4052 26.6516 22.2138 26.6511 22.0965 26.5324L21.2875 25.7141C21.171 25.5963 21.1715 25.4064 21.2886 25.2891L26.8978 19.6636L32.5056 14.0597C32.6231 13.9421 32.8136 13.9421 32.9311 14.0597L33.7443 14.8738C33.8619 14.9915 33.8619 15.1823 33.7443 15.2999L22.5231 26.5336Z" fill="#A0FFCC"/>
              <path d="M23.3767 27.4014C23.2596 27.5186 23.2591 27.7085 23.3756 27.8263L24.1846 28.6447C24.3019 28.7634 24.4933 28.7639 24.6112 28.6458L35.8433 17.4013C35.9609 17.2836 35.9609 17.0928 35.8433 16.9752L35.0301 16.1611C34.9126 16.0434 34.7221 16.0434 34.6046 16.1611L23.3767 27.4014Z" fill="#A0FFCC"/>
              <path d="M28.1939 29.2618C28.1375 29.3183 28.0609 29.35 27.9812 29.35H25.9915C25.8574 29.35 25.7903 29.1878 25.8851 29.0929L36.2765 18.69C36.3714 18.595 36.5337 18.6626 36.5333 18.797L36.5272 20.7955C36.5269 20.8751 36.4952 20.9513 36.439 21.0076L28.1939 29.2618Z" fill="#A0FFCC"/>
              <path d="M36.5202 23.0128C36.5207 22.8784 36.3584 22.8107 36.2634 22.9058L30.0831 29.0929C29.9884 29.1878 30.0555 29.35 30.1895 29.35L33.5255 29.35C33.6058 29.35 33.6827 29.3179 33.7392 29.2608L36.4216 26.5497C36.4772 26.4936 36.5085 26.4178 36.5088 26.3387L36.5202 23.0128Z" fill="#A0FFCC"/>
            </LogoStyle>
        }
      })()}
    </>
  )
}