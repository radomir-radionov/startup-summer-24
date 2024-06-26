const ChevronDownIcon = ({ stroke = '#ACADB9' }: ReactTagProps<'svg'>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 10L8.52071 6.44626C8.22112 6.18946 7.77904 6.18946 7.47945 6.44626L3.33341 10"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
