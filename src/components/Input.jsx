import { IoIosAlert } from "react-icons/io";

export default function Input({
  type = "text",
  placeholder,
  handeChange,
  value,
  showError,
  errorMessage,
}) {
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <input
          className={`input ${showError && "errorInput"}`}
          type={type}
          placeholder={placeholder}
          onChange={(e) => handeChange(e)}
          value={value}
        />
        {!!showError && (
          <div
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translate(0, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoIosAlert size="2em" color="hsl(0, 100%, 74%) " />
          </div>
        )}
      </div>
      {!!showError && (
        <p
          style={{
            color: "hsl(0, 100%, 74%) ",
            fontStyle: "italic",
            textAlign: "right",
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
