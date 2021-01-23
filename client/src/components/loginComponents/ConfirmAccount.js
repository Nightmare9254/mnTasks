import React,{useState} from 'react'
import {useParams,Link,useHistory} from 'react-router-dom';
import Popup from './Popup';
import Warning from './Warning';

const ConfirmAccount = () => {

    const [message,setMessage] = useState("");
    const {token} = useParams();
    const history = useHistory();

    const confirm = () => {
        fetch('/api/confirm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
          })
            .then((response) => response.json())
            .then((json) => {
                setMessage(json)
            });
    }


    setTimeout(() => {
        confirm();
    },200)

    if(message.correct){
        setTimeout(() => {
            history.push("/login")
        }, 3000)
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
      <div className="popup-relative">
      <div style={{textAlign: 'center'}} className="main__signIn">
        <h2 className="heading-2" style={{color: '#1db95e', fontSize: '4rem'}}>Confrim account</h2>
        <p style={{fontSize: '1.8rem', width: '80%', color: '#2d3748'}}>Thank you for confirm your account and for your trust</p>
        <div>
        <svg width="222" height="215" viewBox="0 0 222 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g opacity="0.5">
<path opacity="0.5" d="M135.813 0.00278996L18.8451 53.3657L92.5645 215.004L209.532 161.641L135.813 0.00278996Z" fill="url(#paint0_linear)"/>
</g>
<path d="M134.866 1.87274L20.8748 53.8779L92.965 211.944L206.957 159.939L134.866 1.87274Z" fill="white"/>
<path d="M104.392 10.7312L47.8423 36.5303L54.0906 50.2305L110.64 24.4314L104.392 10.7312Z" fill="url(#paint1_linear)"/>
<path d="M70.009 10.2413C65.6443 12.2333 63.7579 17.4719 65.7973 21.9427C67.8367 26.4135 73.0292 28.4231 77.394 26.431C81.7587 24.439 83.6451 19.2005 81.6057 14.7297C79.5663 10.2589 74.3738 8.24927 70.009 10.2413ZM75.8312 23.0064C74.9128 23.4521 73.8824 23.6138 72.8716 23.471C71.8609 23.3282 70.9156 22.8873 70.1566 22.2047C69.3975 21.522 68.8591 20.6286 68.6101 19.6385C68.3611 18.6484 68.4129 17.6065 68.7587 16.6459C69.1045 15.6853 69.7288 14.8496 70.5517 14.2456C71.3747 13.6415 72.359 13.2965 73.3789 13.2545C74.3988 13.2126 75.4081 13.4756 76.2779 14.0101C77.1476 14.5445 77.8384 15.3261 78.2619 16.2551C78.5457 16.8581 78.708 17.5112 78.7395 18.1771C78.7709 18.8429 78.6709 19.5084 78.4452 20.1355C78.2195 20.7627 77.8725 21.3392 77.4239 21.8323C76.9754 22.3253 76.4342 22.7251 75.8312 23.0089V23.0064Z" fill="url(#paint2_linear)"/>
<path d="M103.799 11.0133L48.4407 36.2688L54.4142 49.3664L109.772 24.1109L103.799 11.0133Z" fill="#1DB95E"/>
<path d="M70.2799 10.8383C68.7491 11.5364 67.4597 12.6728 66.5747 14.1039C65.6897 15.535 65.2489 17.1965 65.308 18.8781C65.3671 20.5598 65.9235 22.1861 66.9069 23.5515C67.8902 24.9169 69.2563 25.9599 70.8323 26.5488C72.4084 27.1376 74.1237 27.2458 75.7612 26.8596C77.3987 26.4734 78.885 25.6102 80.032 24.3792C81.179 23.1481 81.9352 21.6046 82.2051 19.9436C82.4749 18.2827 82.2463 16.5791 81.548 15.0481C80.6118 12.9955 78.8987 11.3989 76.7856 10.6094C74.6725 9.81995 72.3324 9.90226 70.2799 10.8383V10.8383ZM75.8462 23.0439C74.9633 23.4465 73.9809 23.5782 73.0231 23.4224C72.0654 23.2666 71.1753 22.8303 70.4655 22.1686C69.7557 21.5069 69.258 20.6496 69.0353 19.705C68.8126 18.7604 68.8749 17.771 69.2144 16.8618C69.5539 15.9527 70.1552 15.1646 70.9425 14.5973C71.7297 14.0299 72.6675 13.7088 73.6372 13.6744C74.6069 13.6401 75.5651 13.8941 76.3905 14.4043C77.2159 14.9145 77.8715 15.6581 78.2744 16.5409C78.8142 17.725 78.8616 19.075 78.4062 20.2941C77.9508 21.5131 77.03 22.5013 75.8462 23.0414V23.0439Z" fill="#1DB95E"/>
<path d="M62.3152 65.8995L37.9088 77.0342L49.0417 101.444L73.4481 90.3097L62.3152 65.8995Z" fill="url(#paint3_linear)"/>
<path d="M84.4601 114.235L60.0537 125.37L71.1866 149.78L95.593 138.645L84.4601 114.235Z" fill="url(#paint4_linear)"/>
<path d="M61.8275 67.2004L39.2081 77.5198L49.5259 100.143L72.1453 89.8233L61.8275 67.2004Z" fill="#69F0AE"/>
<path d="M83.6857 115.124L61.0663 125.444L71.3841 148.067L94.0035 137.747L83.6857 115.124Z" fill="#1DB95E"/>
<path d="M110.898 53.2505L79.894 67.3953L80.881 69.5592L111.885 55.4144L110.898 53.2505Z" fill="#E0E0E0"/>
<path d="M132.569 47.2856L81.3762 70.6409L82.3631 72.8048L133.556 49.4495L132.569 47.2856Z" fill="#E0E0E0"/>
<path d="M130.441 52.1758L82.854 73.886L83.8409 76.0499L131.428 54.3397L130.441 52.1758Z" fill="#E0E0E0"/>
<path d="M132.758 101.177L101.753 115.322L102.74 117.486L133.744 103.341L132.758 101.177Z" fill="#E0E0E0"/>
<path d="M154.427 95.2096L103.234 118.565L104.221 120.729L155.414 97.3735L154.427 95.2096Z" fill="#E0E0E0"/>
<path d="M152.3 100.102L104.713 121.812L105.7 123.976L153.287 102.266L152.3 100.102Z" fill="#E0E0E0"/>
<path d="M49.9287 84.6642L55.7534 86.5559L57.6699 75.3438L60.5044 76.119L57.3162 89.9805L48.5315 86.1294L49.9287 84.6642Z" fill="url(#paint5_linear)"/>
<path d="M50.6712 84.5163L55.7358 86.1596L57.4014 76.4102L59.8648 77.085L57.0929 89.1376L49.4546 85.7908L50.6712 84.5163Z" fill="white"/>
<path d="M72.6655 132.739L77.7301 134.383L79.3957 124.633L81.859 125.308L79.0872 137.361L71.4489 134.014L72.6655 132.739Z" fill="white"/>
<path d="M169.901 133.87L97.5763 166.866L108.573 190.977L180.897 157.982L169.901 133.87Z" fill="#E0E0E0"/>
<path d="M159.416 153.086C156.637 152.293 153.792 152.444 152.907 155.623C152.608 156.694 152.573 158.357 151.424 158.909C149.733 159.722 147.694 158.096 146.227 157.434C143.492 156.2 140.685 157.04 139.103 159.634C138.3 160.949 137.956 162.462 137.683 163.96C137.565 164.609 137.55 165.412 137.276 166.024C136.752 167.196 135.112 167.091 134.035 167.045C133.8 167.045 133.559 167.018 133.318 166.993C134.169 165.821 134.594 164.393 134.522 162.946C134.452 160.57 132.909 157.971 130.212 158.262C127.797 158.513 126.096 160.846 126.367 163.207C126.598 165.214 127.905 166.769 129.58 167.723C128.758 168.087 127.88 168.37 127.102 168.746C126.739 168.922 126.386 169.119 126.046 169.336C123.695 168.202 120.608 167.989 118.493 169.145C117.469 169.705 118.217 171.368 119.245 170.804C120.856 169.923 122.632 170.144 124.315 170.703L124.456 170.754C124.289 170.967 124.142 171.194 124.017 171.433C123.066 173.28 124.017 176.2 126.329 176.401C129.59 176.68 129.743 172.369 127.972 170.653C127.897 170.58 127.822 170.51 127.742 170.442C128.474 170.089 129.267 169.823 129.967 169.524C130.576 169.266 131.157 168.943 131.697 168.561L131.823 168.593C134.314 169.158 138.202 169.334 139.097 166.315C139.865 163.696 139.938 158.134 144.077 158.648C145.765 158.857 147.15 160.154 148.755 160.623C150.192 161.052 151.856 161.069 153.035 160.011C154.008 159.138 154.226 157.848 154.525 156.644C154.678 156.022 154.828 155.279 155.335 154.835C156.25 154.034 157.763 154.506 158.784 154.797C159.9 155.113 160.547 153.407 159.416 153.086ZM127.057 174.309C126.507 174.853 125.925 174.422 125.632 173.852C125.276 173.16 125.429 172.477 125.883 171.868C125.957 171.768 126.037 171.672 126.121 171.581C127.207 172.284 128.095 173.29 127.067 174.309H127.057ZM128.983 160.761C130.112 159.712 131.685 159.943 132.357 161.383C133.029 162.823 132.733 164.855 131.79 166.125C131.665 166.291 131.527 166.447 131.376 166.591C130.719 166.372 130.111 166.025 129.588 165.57C128.253 164.366 127.498 162.141 128.993 160.753L128.983 160.761Z" fill="#1DB95E"/>
<path d="M174.459 55.6242L154.211 63.5196C150.403 63.2361 142.391 62.2024 134.439 58.4517C125.587 54.2769 115.445 54.287 106.846 58.6599C87.029 59.1341 76.1222 56.5951 70.3025 54.1916L71.8377 51.0405L51.3134 43.0372L0 20.0359V114.309L17.9582 122.312L27.5907 99.2007L48.7447 108.985L52.8059 98.6638L66.6953 108.973L67.641 109.768L66.3391 111.12C65.1454 112.381 64.4802 114.052 64.4802 115.788C64.4802 117.525 65.1454 119.195 66.3391 120.456C66.9168 121.067 67.6129 121.553 68.3849 121.886C69.157 122.218 69.9887 122.389 70.8293 122.389C71.6699 122.389 72.5016 122.218 73.2736 121.886C74.0457 121.553 74.7418 121.067 75.3195 120.456L74.6071 121.209C73.4134 122.469 72.7481 124.14 72.7481 125.876C72.7481 127.613 73.4134 129.283 74.6071 130.544V130.544C75.1847 131.155 75.8808 131.641 76.6529 131.974C77.4249 132.306 78.2567 132.478 79.0972 132.478C79.9378 132.478 80.7695 132.306 81.5416 131.974C82.3136 131.641 83.0097 131.155 83.5874 130.544L87.7013 126.266L84.8768 129.202C83.6831 130.463 83.0178 132.133 83.0178 133.87C83.0178 135.606 83.6831 137.276 84.8768 138.537V138.537C85.4544 139.148 86.1505 139.634 86.9226 139.967C87.6946 140.299 88.5263 140.471 89.3669 140.471C90.2075 140.471 91.0392 140.299 91.8113 139.967C92.5833 139.634 93.2794 139.148 93.8571 138.537L97.9183 134.315L96.21 136.091C95.3755 136.972 94.9104 138.139 94.9104 139.353C94.9104 140.566 95.3755 141.733 96.21 142.614C96.6135 143.041 97.0996 143.38 97.6388 143.612C98.1779 143.844 98.7587 143.964 99.3456 143.964C99.9326 143.964 100.513 143.844 101.052 143.612C101.592 143.38 102.078 143.041 102.481 142.614L105.19 139.799C109.844 143.199 113.609 145.68 115.453 146.322C123.136 148.987 123.136 143.65 123.136 143.65C133.398 148.984 138.531 138.316 138.531 138.316C151.359 143.65 151.359 130.313 151.359 130.313C154.565 132.536 156.877 131.517 158.493 129.561C160.693 126.906 160.961 123.16 159.451 120.155L171.713 108.822L177.016 119.666L198.169 109.881L207.802 131.239L221.987 124.904V31.6168L174.459 55.6242Z" fill="url(#paint6_linear)"/>
<path d="M171.053 104.991L148.722 124.841L131.356 92.5823L171.053 82.6572V104.991Z" fill="#BE7C5E"/>
<path d="M64.3675 52.8794C64.3675 52.8794 71.5342 62.8045 113.988 60.3232L138.799 97.5448L155.425 116.253C158.036 119.194 158.184 123.652 155.621 126.633C154.063 128.441 151.823 129.392 148.722 127.323C148.722 127.323 148.722 139.729 136.318 134.766C136.318 134.766 131.356 144.691 121.433 139.729C121.433 139.729 121.433 144.691 113.99 142.21C106.547 139.729 66.8483 107.472 66.8483 107.472L49.4822 95.066L64.3675 52.8794Z" fill="#FDA57D"/>
<path d="M153.684 65.2884C153.684 65.2884 142.963 65.2884 132.362 60.4739C122.722 56.1009 111.497 56.6579 102.602 62.3982C95.3521 67.0772 89.0709 74.8246 89.1888 87.6198C89.1888 87.6198 98.8364 97.5449 109.036 77.6947H116.478C116.478 77.6947 123.645 102.51 143.771 100.024C163.896 97.5374 168.582 95.0611 168.582 95.0611L153.684 65.2884Z" fill="#BE7C5E"/>
<path d="M88.5489 114.286L87.7436 113.48C85.5679 111.304 82.0403 111.304 79.8646 113.48L74.0981 119.248C71.9223 121.424 71.9223 124.952 74.0981 127.128L74.9033 127.933C77.0791 130.109 80.6067 130.109 82.7824 127.933L88.5489 122.166C90.7246 119.99 90.7246 116.462 88.5489 114.286Z" fill="#BE7C5E"/>
<path d="M80.5525 104.912L79.7473 104.106C77.5715 101.93 74.044 101.93 71.8682 104.106L66.1017 109.874C63.926 112.05 63.926 115.578 66.1017 117.754L66.907 118.559C69.0827 120.735 72.6103 120.735 74.7861 118.559L80.5525 112.792C82.7283 110.616 82.7283 107.088 80.5525 104.912Z" fill="#BE7C5E"/>
<path d="M99.712 120.487L98.9067 119.682C96.7309 117.506 93.2034 117.506 91.0276 119.682L84.0213 126.689C81.8456 128.865 81.8456 132.393 84.0213 134.569L84.8266 135.375C87.0023 137.551 90.5299 137.551 92.7056 135.375L99.712 128.367C101.888 126.191 101.888 122.663 99.712 120.487Z" fill="#BE7C5E"/>
<path d="M105.587 129.121L105.025 128.558C103.506 127.039 101.042 127.039 99.5229 128.558L95.101 132.981C93.5816 134.501 93.5816 136.964 95.101 138.484L95.6632 139.046C97.1826 140.566 99.6461 140.566 101.165 139.046L105.587 134.624C107.107 133.104 107.107 130.64 105.587 129.121Z" fill="#BE7C5E"/>
<path d="M195.862 109.954L173.534 119.879L151.203 65.2883L171.053 57.8445L195.862 109.954Z" fill="white"/>
<path d="M27.1543 97.5472L49.4822 107.472L71.8127 52.8819L51.9631 45.4355L27.1543 97.5472Z" fill="white"/>
<path d="M2.3429 23.1042L51.963 45.4357L19.7116 119.879L2.3429 112.435V23.1042Z" fill="#333333"/>
<path d="M220.673 35.5105L171.053 57.8444L203.307 132.285L220.673 124.841V35.5105Z" fill="#4D8AF0"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="151.05" y1="188.322" x2="77.3109" y2="26.6925" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="35683.2" y1="-13691.2" x2="35308.1" y2="-14513.4" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="10545.1" y1="-2720.12" x2="10023.1" y2="-3864.3" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="14453" y1="3249.72" x2="13262.3" y2="639.673" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="16861.3" y1="8453.5" x2="15670.5" y2="5843.21" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="6633.35" y1="1947.85" x2="6314.47" y2="1248.89" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="133108" y1="77141" x2="133108" y2="12822.3" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080" stop-opacity="0.25"/>
<stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
<stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
</linearGradient>
<clipPath id="clip0">
<rect width="222" height="215" fill="white"/>
</clipPath>
</defs>
</svg>


        </div>
        </div>
        {!message.correct && <Warning errorMessage={message.message}/>}
        {message.correct && <Popup title="You ssuccessful confrim account" message="You will be redirect to login"/>}
        </div>
        </>
    )
}

export default ConfirmAccount;