function Contact(props){
    return (
        <>
            <div style={{ overflow: "none",height: "30px", width: "400px", padding:"20px", borderBottom:"1px grey solid" }}>
            <img
                src={props.image}
                alt="Avatar"
                height="50px"
                style={{ float: "left", borderRadius: "50%", marginTop:"-10px" }}
            />
            <div style={{ marginTop: "-5px", marginLeft: "60px" }}>
                <h3 style={{"color":"Blue","margin":"0px","padding":"0px"}}>{props.name}</h3>
                <p style={{marginTop: "-3px","margin":"0px","padding":"0px"}}>{props.description}</p>
            </div>
            </div>
        </>
    )
}

export default Contact;