export default function NumberDisplay (props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            width: "80px",
            borderRadius: "40px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "3rem",
            margin: "35px"
        }}>
                {props.numero}
        </div>
    )
}