import "./index.css";

const SearchInput = () => {
  return (
    <div className="input_component">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.55533 5.44442C1.55533 4.413 1.96506 3.42383 2.69438 2.69451C3.4237 1.96519 4.41287 1.55546 5.44429 1.55546C6.4757 1.55546 7.46487 1.96519 8.19419 2.69451C8.92351 3.42383 9.33324 4.413 9.33324 5.44442C9.33324 6.47583 8.92351 7.465 8.19419 8.19432C7.46487 8.92364 6.4757 9.33337 5.44429 9.33337C4.41287 9.33337 3.4237 8.92364 2.69438 8.19432C1.96506 7.465 1.55533 6.47583 1.55533 5.44442ZM5.44429 -0.000121899C4.58192 -0.000120429 3.73188 0.204729 2.96418 0.597557C2.19648 0.990386 1.53307 1.55996 1.02859 2.25937C0.524105 2.95878 0.192975 3.76802 0.062466 4.62045C-0.0680427 5.47289 0.00580373 6.34413 0.277924 7.16244C0.550045 7.98075 1.01266 8.72271 1.62766 9.32724C2.24267 9.93176 2.99247 10.3815 3.81534 10.6396C4.63821 10.8976 5.51059 10.9564 6.36066 10.8113C7.21072 10.6661 8.01415 10.3211 8.70479 9.80471L12.6715 13.7722C12.8174 13.9182 13.0152 14.0002 13.2215 14.0003C13.4279 14.0003 13.6258 13.9185 13.7717 13.7726C13.9177 13.6268 13.9997 13.4289 13.9998 13.2226C13.9998 13.0163 13.9179 12.8184 13.7721 12.6724L9.80536 8.70569C10.4107 7.89641 10.7789 6.93461 10.8687 5.92794C10.9584 4.92128 10.7662 3.90951 10.3136 3.00589C9.86091 2.10227 9.16568 1.34248 8.3057 0.811583C7.44572 0.280681 6.45494 -0.000375572 5.44429 -0.000121899Z"
          fill="#C0C0C0"
        />
      </svg>

      <input type="text" className="input" placeholder="Найти..." />
    </div>
  );
};

export default SearchInput;