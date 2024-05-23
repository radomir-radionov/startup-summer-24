const NoPosterIcon = ({ color = '#ACADB9' }: ReactTagProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <g clipPath="url(#clip0_18128_981)">
        <path
          d="M15.5 8H15.51"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 21H6.5C5.70435 21 4.94129 20.6839 4.37868 20.1213C3.81607 19.5587 3.5 18.7956 3.5 18V6C3.5 5.20435 3.81607 4.44129 4.37868 3.87868C4.94129 3.31607 5.70435 3 6.5 3H18.5C19.2956 3 20.0587 3.31607 20.6213 3.87868C21.1839 4.44129 21.5 5.20435 21.5 6V13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 16L8.5 11C9.428 10.107 10.572 10.107 11.5 11L14.5 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 14L15.5 13C16.428 12.107 17.572 12.107 18.5 13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 22L17.5 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 22L22.5 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_18128_981">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NoPosterIcon;
