// eslint-disable-next-line react/prop-types
export default function Input({ type="text", placeholder, handeChange, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e)=>handeChange(e)}
      value={value}
      style={{
        width:400,
        borderRadius:5,
        padding:"15px 30px",
        fontSize:16,
        borderColor: "gray",
        backgroundColor:"#FFFFFF",
        color:"#000000",
        border:"solid 1px black"
      }}
    />
  );
}
