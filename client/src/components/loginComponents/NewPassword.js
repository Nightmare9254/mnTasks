import React, { useState } from 'react'
import {Link,useParams} from 'react-router-dom';
import Warning from './Warning'; 
const NewPassword = () => {

    const [newPassword,setNewPassword] = useState('');
    const [confrimNewPassword,setConfirmNewPassword] = useState('');
    const [message,setMessage] = useState('');
    const {token} = useParams();

    const password = () => {
        fetch('/api/newPassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({newPassword,confrimNewPassword,token}),
          })
            .then((response) => response.json())
            .then((json) => {
                setMessage(json)
              if (json.correct) {
                setNewPassword("");
                setConfirmNewPassword("")
              }
            });
    }

    return (
        <>
        <div style={{ marginTop: '2rem' }} className="link__back">
        <Link style={{ margin: '2rem' }} to="/login">
          <svg
            width="40"
            height="40"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24.0475"
              cy="24.0475"
              r="23.0475"
              stroke="#4A5568"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.344 25.55L24.56 33.4523L23.202 35L11 24.5L23.224 14L24.556 15.5813L15.348 23.45H39V25.55H15.344Z"
              fill="#4A5568"
            />
          </svg>
        </Link>
      </div>
      <main className="main__reset" style={{display: 'block',textAlign: 'center'}}>
        <h2 className="heading-2" style={{color: '#1db95e', marginTop: '4rem'}}>Forgot password?</h2>
        <form className="section__formWrapper" name="reset password form" style={{display: 'inline-block',marginTop: '4rem'}}>
          <label className="passwordForm__email form__label" style={{display:'block',marginTop: '3rem'}}>
            <p className="label__paragraph" style={{textAlign: 'left'}}>New password: </p>
            <input
              className="label__input label__input--email"
              type="password"
              placeholder="New password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label className="passwordForm__email form__label" style={{display: 'block',marginTop: '3rem'}}>
            <p className="label__paragraph" style={{textAlign: 'left'}}>Confirm new password: </p>
            <input
              className="label__input label__input--email"
              type="password"
              placeholder="Confirm new password"
              required
              value={confrimNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </label>
        </form>
      <div style={{marginTop: '3rem'}}>
      <svg width="289" height="272" viewBox="0 0 389 272" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3269 104.383C17.6989 127.355 26.2818 129.842 36.8219 127.446C48.8628 124.709 58.7455 116.13 63.6164 104.78L66.9755 96.9516C69.2088 91.7475 69.2839 85.8691 67.1845 80.6096C65.0851 75.35 60.9831 71.1402 55.7809 68.9062H55.7808C53.205 67.8 50.4365 67.2122 47.6335 67.1763C44.8305 67.1404 42.048 67.6572 39.4446 68.6971C36.8413 69.737 34.4682 71.2796 32.4608 73.237C30.4535 75.1943 28.8512 77.528 27.7454 80.1048C16.936 84.3526 14.8011 93.1465 17.3269 104.383Z" fill="#2F2E41"/>
<path d="M85.1011 58.1478L88.3362 52.6715C88.7312 52.0027 88.9698 51.2532 89.0339 50.4791C89.098 49.705 88.9861 48.9264 88.7065 48.2017C88.4269 47.477 87.9869 46.8251 87.4194 46.2949C86.852 45.7646 86.1719 45.3698 85.4302 45.14V45.14C84.6473 44.8974 83.8178 44.8456 83.0108 44.9888C82.2038 45.132 81.4427 45.466 80.791 45.9631C80.1392 46.4602 79.6156 47.1059 79.2639 47.8464C78.9122 48.587 78.7425 49.4009 78.7689 50.2203L78.9591 56.1069L63.7556 97.7869L72.0463 99.5184L85.1011 58.1478Z" fill="#9F616A"/>
<path d="M5.1164 160.896L1.13441 165.856C0.648157 166.461 0.305305 167.169 0.13158 167.926C-0.042145 168.683 -0.0422333 169.47 0.131321 170.227C0.304875 170.984 0.647567 171.692 1.13368 172.298C1.6198 172.904 2.23673 173.391 2.93817 173.724V173.724C3.67854 174.076 4.4922 174.246 5.31134 174.219C6.13049 174.192 6.93139 173.97 7.6473 173.571C8.3632 173.172 8.97338 172.607 9.42698 171.924C9.88059 171.242 10.1645 170.46 10.255 169.645L10.9052 163.792L31.8894 124.704L23.9299 121.808L5.1164 160.896Z" fill="#9F616A"/>
<path d="M29.7186 202.156L30.3047 209.199L30.4422 210.842L69.415 207.093C70.7584 206.941 72.0471 206.475 73.1764 205.731C74.3057 204.988 75.2437 203.988 75.9142 202.814C76.5847 201.64 76.9687 200.324 77.0351 198.973C77.1016 197.622 76.8485 196.275 76.2964 195.04L63.7276 168.048L59.386 158.725L40.5726 154.382C25.0587 166.26 39.0168 179.369 56.5785 192.63C57.2659 193.151 57.9606 193.672 58.6624 194.194L29.7186 202.156Z" fill="#2F2E41"/>
<path d="M16.5865 226.545C17.0613 226.613 17.5457 226.557 17.993 226.384C18.4403 226.211 18.8357 225.926 19.1412 225.556L31.8894 210.118L31.1658 202.88L26.819 200.271C26.4635 200.057 26.0657 199.924 25.6534 199.88C25.2411 199.836 24.8241 199.882 24.4315 200.015C24.0388 200.149 23.6799 200.366 23.3796 200.652C23.0793 200.938 22.8449 201.286 22.6927 201.672L14.3779 222.743C14.2227 223.137 14.1585 223.561 14.1903 223.983C14.2221 224.404 14.349 224.814 14.5615 225.179C14.7741 225.545 15.0667 225.858 15.4174 226.095C15.7681 226.331 16.1678 226.485 16.5865 226.545V226.545Z" fill="#2F2E41"/>
<path opacity="0.2" d="M27.5479 200.708L28.2714 209.394L30.3047 209.199L67.2443 205.645C68.5876 205.493 69.8763 205.027 71.0056 204.284C72.1349 203.54 73.0729 202.541 73.7434 201.366C74.4139 200.192 74.798 198.876 74.8644 197.525C74.9308 196.175 74.6777 194.827 74.1257 193.593L63.7276 170.306V168.048L59.386 158.725L40.5726 154.382C25.0587 166.26 39.0168 179.369 56.5785 192.63L56.4917 192.746L27.5479 200.708Z" fill="black"/>
<path d="M12.9685 223.649C13.4434 223.717 13.9277 223.662 14.3751 223.489C14.8224 223.315 15.2178 223.03 15.5233 222.66L28.2715 207.223L27.5479 199.984L23.2011 197.375C22.8455 197.162 22.4478 197.028 22.0355 196.984C21.6232 196.94 21.2062 196.986 20.8135 197.12C20.4209 197.253 20.062 197.47 19.7617 197.756C19.4614 198.042 19.227 198.391 19.0748 198.776L10.76 219.848C10.6047 220.241 10.5406 220.665 10.5724 221.087C10.6042 221.509 10.7311 221.918 10.9436 222.284C11.1561 222.65 11.4487 222.963 11.7994 223.199C12.1502 223.436 12.5499 223.589 12.9685 223.649V223.649Z" fill="#2F2E41"/>
<path d="M26.1007 199.26L26.8243 207.947L65.7971 204.196C67.1404 204.045 68.4291 203.578 69.5584 202.835C70.6877 202.092 71.6259 201.093 72.2966 199.919C72.9673 198.745 73.3518 197.429 73.4187 196.078C73.4856 194.728 73.233 193.38 72.6816 192.146L62.2805 168.859V155.829L36.9546 151.486C20.8303 163.831 36.5409 177.506 55.0445 191.298L26.1007 199.26Z" fill="#2F2E41"/>
<path d="M50.7029 97.1971C56.6974 97.1971 61.5568 92.3359 61.5568 86.3393C61.5568 80.3427 56.6974 75.4814 50.7029 75.4814C44.7085 75.4814 39.849 80.3427 39.849 86.3393C39.849 92.3359 44.7085 97.1971 50.7029 97.1971Z" fill="#9F616A"/>
<path d="M36.231 104.436L51.4265 114.57L64.4512 111.674L57.2152 104.436V93.5779L45.6377 92.854C45.3946 97.1899 42.911 101.158 36.231 104.436Z" fill="#9F616A"/>
<path d="M34.0603 155.105L62.2805 158.725L68.7928 128.323C71.8183 120.253 70.0824 113.123 64.4811 106.756C64.2669 105.685 63.6962 104.718 62.8621 104.012C62.0279 103.307 60.9795 102.905 59.8878 102.872L57.2153 102.988C57.5176 112.588 50.4471 110.276 39.849 102.264L38.5693 102.648C36.915 103.145 35.4947 104.22 34.5682 105.679C33.6418 107.137 33.2713 108.88 33.5244 110.589L34.6913 118.469C35.1861 121.593 35.9548 124.667 36.9884 127.656C39.8817 136.306 38.8477 145.463 34.0603 155.105Z" fill="#1DB95E"/>
<path d="M21.0355 122.532L34.0602 126.875L39.849 105.883L37.8879 104.992C36.262 104.252 34.4158 104.159 32.7239 104.732C31.0321 105.304 29.6214 106.499 28.778 108.074L21.0355 122.532Z" fill="#1DB95E"/>
<path d="M59.386 102.988L66.6221 110.95L75.305 97.197L64.451 91.4063L59.386 102.988Z" fill="#1DB95E"/>
<path d="M38.04 83.0819C44.8606 85.6548 52.1396 85.388 59.7479 83.0819V74.3957H38.04V83.0819Z" fill="#2F2E41"/>
<path d="M376.557 232.19L369.074 235.309L319.188 167.316L283.022 236.557L273.668 234.685L301.105 139.245H332.907L376.557 232.19Z" fill="#2F2E41"/>
<path d="M386.595 248.051C386.181 248.164 385.747 248.194 385.321 248.139C384.895 248.084 384.483 247.946 384.111 247.731L368.33 238.642C367.904 238.397 367.54 238.057 367.267 237.648C366.993 237.239 366.818 236.773 366.753 236.286C366.689 235.798 366.737 235.303 366.895 234.837C367.053 234.371 367.316 233.948 367.663 233.601L369.074 232.19L376.557 231.566L387.996 242.551C388.412 242.951 388.714 243.454 388.873 244.009C389.031 244.563 389.04 245.15 388.897 245.709C388.755 246.268 388.467 246.78 388.062 247.191C387.658 247.603 387.152 247.899 386.595 248.051Z" fill="#2F2E41"/>
<path d="M264.253 250.546C264.668 250.66 265.101 250.69 265.527 250.635C265.954 250.58 266.365 250.441 266.738 250.226L282.519 241.137C282.944 240.892 283.308 240.552 283.582 240.143C283.855 239.735 284.031 239.269 284.095 238.781C284.16 238.294 284.111 237.798 283.953 237.332C283.795 236.867 283.533 236.444 283.185 236.096L281.775 234.685L274.292 234.061L262.853 245.047C262.437 245.446 262.134 245.949 261.976 246.504C261.817 247.059 261.809 247.646 261.951 248.205C262.094 248.764 262.382 249.275 262.786 249.687C263.19 250.098 263.697 250.395 264.253 250.546V250.546Z" fill="#2F2E41"/>
<path d="M279.904 40.0632L276.786 41.9345L270.325 31.4315C269.928 30.7864 269.692 30.0554 269.637 29.3C269.582 28.5446 269.709 27.787 270.008 27.0911C270.307 26.3952 270.769 25.7814 271.355 25.3014C271.94 24.8215 272.633 24.4895 273.374 24.3335C274.033 24.1948 274.713 24.1985 275.371 24.3446C276.028 24.4906 276.646 24.7756 277.184 25.1803C277.722 25.585 278.168 26.1001 278.49 26.6911C278.813 27.2821 279.006 27.9353 279.056 28.6069L279.904 40.0632Z" fill="#FFB9B9"/>
<path d="M366.272 121.834L367.565 118.435L379.135 122.693C379.846 122.954 380.483 123.383 380.994 123.942C381.504 124.502 381.872 125.176 382.067 125.908C382.263 126.64 382.279 127.408 382.115 128.147C381.952 128.887 381.613 129.576 381.127 130.157V130.157C380.695 130.673 380.158 131.092 379.551 131.383C378.944 131.675 378.282 131.834 377.609 131.848C376.936 131.863 376.267 131.734 375.648 131.469C375.029 131.204 374.474 130.81 374.02 130.313L366.272 121.834Z" fill="#FFB9B9"/>
<path d="M317.318 77.4904C322.484 77.4904 326.671 73.3012 326.671 68.1336C326.671 62.966 322.484 58.7768 317.318 58.7768C312.152 58.7768 307.964 62.966 307.964 68.1336C307.964 73.3012 312.152 77.4904 317.318 77.4904Z" fill="#FFB9B9"/>
<path d="M325.424 88.0947H312.329V73.7478L323.554 72.5001L325.424 88.0947Z" fill="#FFB9B9"/>
<path d="M334.778 142.988H299.234C300.488 123.15 301.48 103.978 299.234 93.0851L301.301 83.1613C301.588 81.7863 302.381 80.5695 303.523 79.7528C304.665 78.9361 306.073 78.5794 307.466 78.7536L312.329 79.3617C315.623 85.1538 319.603 85.0979 324.177 79.9855H330.035C330.816 79.9855 331.589 80.1414 332.309 80.4439C333.029 80.7464 333.682 81.1896 334.228 81.7475C334.775 82.3054 335.205 82.9667 335.493 83.6929C335.781 84.419 335.922 85.1953 335.906 85.9764C337.432 92.966 337.94 100.14 337.413 107.275L334.778 142.988Z" fill="#3F3D56"/>
<path d="M274.915 40.063L279.904 37.5681L306.717 81.8571L299.235 93.0851L274.915 40.063Z" fill="#3F3D56"/>
<path d="M366.343 123.609L370.606 120.012L347.953 88.2581C345.737 85.1515 342.682 82.7409 339.145 81.3087C335.609 79.8765 331.738 79.4818 327.986 80.171L327.271 80.3023L335.837 95.2975L347.118 103.842L366.343 123.609Z" fill="#3F3D56"/>
<path d="M328.135 62.6101C328.135 62.6101 329.883 58.7636 325.339 57.0151C325.339 57.0151 321.494 50.7208 313.803 54.917C313.803 54.917 308.56 57.0151 308.56 62.6101C308.56 68.205 306.812 69.2541 306.812 69.2541C306.812 69.2541 309.415 66.5829 310.114 64.4848C310.813 62.3867 316.25 61.9107 318.348 64.0088C320.445 66.1069 325.688 65.7572 325.688 65.7572L325.339 73.4503C325.339 73.4503 327.087 68.9044 327.786 68.9044C328.485 68.9044 329.184 62.6101 328.135 62.6101Z" fill="#2F2E41"/>
<path d="M327.272 272C358.88 272 384.503 270.665 384.503 269.018C384.503 267.371 358.88 266.036 327.272 266.036C295.663 266.036 270.04 267.371 270.04 269.018C270.04 270.665 295.663 272 327.272 272Z" fill="#E6E6E6"/>
<path d="M41.522 270.594C58.2292 270.594 71.7731 269.889 71.7731 269.018C71.7731 268.148 58.2292 267.442 41.522 267.442C24.8148 267.442 11.271 268.148 11.271 269.018C11.271 269.889 24.8148 270.594 41.522 270.594Z" fill="#E6E6E6"/>
<path d="M272.649 52.4629L88.7441 68.9511C87.8411 69.0309 86.9433 68.7493 86.2476 68.1678C85.552 67.5864 85.1152 66.7527 85.0333 65.8495L80.9447 20.2142C80.8649 19.3109 81.1464 18.4127 81.7277 17.7168C82.3089 17.0209 83.1423 16.584 84.0451 16.502L267.95 0.0138117C268.853 -0.066077 269.751 0.215593 270.447 0.797034C271.143 1.37847 271.579 2.21221 271.661 3.11534L275.75 48.7507C275.83 49.654 275.548 50.5522 274.967 51.2481C274.386 51.944 273.552 52.3809 272.649 52.4629V52.4629Z" fill="#1DB95E"/>
<path d="M110.234 54.9551C118.166 54.9551 124.595 48.5232 124.595 40.589C124.595 32.6547 118.166 26.2228 110.234 26.2228C102.303 26.2228 95.8732 32.6547 95.8732 40.589C95.8732 48.5232 102.303 54.9551 110.234 54.9551Z" fill="white"/>
<path d="M142.414 28.088C141.783 28.1458 141.2 28.4519 140.794 28.939C140.388 29.4261 140.192 30.0545 140.249 30.6862C140.305 31.3179 140.61 31.9013 141.096 32.3084C141.582 32.7155 142.21 32.913 142.842 32.8576L255.228 22.7816C255.541 22.7539 255.846 22.6647 256.125 22.5191C256.404 22.3735 256.652 22.1743 256.853 21.9329C257.055 21.6916 257.208 21.4127 257.302 21.1124C257.396 20.8121 257.43 20.4962 257.402 20.1827C257.374 19.8692 257.284 19.5644 257.138 19.2856C256.992 19.0068 256.793 18.7595 256.551 18.5579C256.309 18.3563 256.031 18.2043 255.73 18.1106C255.43 18.0169 255.114 17.9834 254.801 18.0119L142.414 28.088Z" fill="white"/>
<path d="M143.696 42.3968C143.383 42.4243 143.078 42.5134 142.799 42.659C142.52 42.8045 142.272 43.0037 142.07 43.2451C141.868 43.4865 141.716 43.7654 141.621 44.0658C141.527 44.3662 141.493 44.6822 141.521 44.9958C141.549 45.3094 141.639 45.6143 141.785 45.8932C141.931 46.1721 142.131 46.4194 142.372 46.621C142.614 46.8226 142.893 46.9746 143.194 47.0682C143.494 47.1618 143.81 47.1952 144.124 47.1664L256.51 37.0904C256.823 37.0627 257.128 36.9736 257.407 36.8279C257.686 36.6823 257.933 36.4831 258.135 36.2418C258.337 36.0004 258.49 35.7216 258.584 35.4213C258.678 35.1209 258.712 34.805 258.684 34.4915C258.656 34.1781 258.566 33.8732 258.42 33.5944C258.274 33.3156 258.075 33.0684 257.833 32.8667C257.591 32.6651 257.312 32.5131 257.012 32.4194C256.712 32.3258 256.396 32.2922 256.083 32.3208L143.696 42.3968Z" fill="white"/>
</svg>

      </div>
      <div style={{margin: '0rem'}}>
        <Warning position={true} errorMessage={message.message}/>
      </div>
        <section className="section__buttons">
          <button className="btn__main--full" onClick={password}>
            Set new password
          </button>
        </section>
      </main>
    </>
    )
}

export default NewPassword;