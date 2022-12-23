import Button from "./Button";
import Buttons from "./Buttons";

const DonateButtons = () => (
  <Buttons justify="space-evenly" mb="1rem .5rem">
    <a href="https://fnd.us/523mC5" target="_blank" rel="noreferrer noopener">
      <Button
        padding=".5rem 2rem"
        text="FundRazr"
        primary
        themed
        fz="var(--fz-6)"
        icon={
          <svg
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.373 4.51A9.962 9.962 0 0 1 12 2c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715L17.5 12H20A8 8 0 0 0 6.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0 0 13.726 5.587l.9 1.902zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"></path>
          </svg>
        }
      />
    </a>
    <a
      href="https://www.patreon.com/XeroLinux/membership"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button
        text="Patreon"
        padding=".5rem 2rem"
        primary
        themed
        fz="var(--fz-6)"
        icon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 13.0086C28 17.9601 24.1375 21.9927 19.3844 21.9927C14.6172 21.9927 10.7406 17.965 10.7406 13.0086C10.7406 8.04237 14.6172 4 19.3844 4C24.1375 4 28 8.04237 28 13.0086ZM4 28H8.21875V4H4V28Z"
              fill="white"
            />
          </svg>
        }
      />
    </a>
  </Buttons>
);

export default DonateButtons;
