import React from 'react'
function Card(props){
    return <div style = {{border : "2px solid gray",width : "500px",height : "500px" ,marginLeft : "30%",backgroundColor : "gray",marginTop : "3%",borderRadius : "5px"}}>
        <div style = {{width : "400px",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center",marginLeft : "10%",marginTop : "6%", backgroundColor : "white",borderRadius : "5px"}}>
            <img src ={props.img} width = "400px" height = "300px" alt='img'/>
            <div style = {{display : "flex",justifyContent : "center",alignItems: "center"}}>
                <h1 style = {{margin : "5px",padding : "0px"}}>Sachin Kumar Biswal</h1>
            </div>
            <div style = {{display : "flex",justifyContent : "center",alignItems: "center",}}>
                <p>UI/UX Designer</p>
            </div>
            <div style = {{width : "350px",display : "flex",justifyContent : "space-between", flexDirection : "row",alignItems : "center",fontSize : "800",fontWeight : "800"}}>
                <p style = {{margin : "0px",padding : "0px"}}>20</p>
                <p style = {{margin : "0px",padding : "0px"}}>10</p>
                <p style = {{margin : "0px",padding : "0px"}}>10k</p>

            </div>
            <div style = {{width : "380px",display : "flex",justifyContent : "space-between", flexDirection : "row",alignItems : "center",fontSize : "800",fontWeight : "800"}}>
            <p style = {{margin : "0px",padding : "0px"}}>Posts</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followings</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followers</p>

            </div>

        </div>

    </div>
    // return (
    //     <div style={{border : "2px solid gray",width : "300px",height : "300px" ,marginLeft : "30%",backgroundColor : "gray",marginTop : "3%",borderRadius : "5px"}}>
    //         <div style = {{width : "400px",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center",marginLeft : "10%",marginTop : "6%", backgroundColor : "white",borderRadius : "5px"}}>

    //         <img src={props.img} width="100%" height="100%"/>
    //         <h3>{props.name}</h3>
    //         <h3>{props.gender}</h3>
    //         </div>
    //     </div>
    // )
 
}
export default Card