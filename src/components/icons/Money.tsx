import { TSVGProps } from './types'

const Money = (props: TSVGProps) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C12.4183 7 16 5.433 16 3.5C16 1.567 12.4183 0 8 0C3.58172 0 0 1.567 0 3.5C0 5.433 3.58172 7 8 7ZM16 7C16 8.933 12.4183 10.5 8 10.5C3.58172 10.5 0 8.933 0 7V7C0 6.67575 0.834723 6.5464 1.0944 6.74057C2.08028 7.47774 4.14714 8.5 8 8.5C11.8453 8.5 13.9116 7.47315 14.8998 6.73565C15.3095 6.42985 16 6.48873 16 7V7ZM16 11C16 12.933 12.4183 14.5 8 14.5C3.58172 14.5 0 12.933 0 11V11C0 10.6758 0.834723 10.5464 1.0944 10.7406C2.08028 11.4777 4.14714 12.5 8 12.5C11.8453 12.5 13.9116 11.4732 14.8998 10.7356C15.3095 10.4298 16 10.4887 16 11V11Z"
        fill="url(#paint0_linear_4_1686)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_4_1686"
          x1="-1.70096e-08"
          y1="7"
          x2="16"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f1c552"></stop>
          <stop offset="1" stopColor="#fdac3d"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Money
