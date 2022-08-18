import { brand, font } from "../../../theme/native/custom-variables";
import { Platform }                          from "react-native";

export const circleDaySelector = {
    container:{
        borderRadius: 50,
        width: 62,
        height: 62,
        padding: 2,
        backgroundColor: brand.primary,
        marginBottom:5
    }
}
export const dayContainer = {
    container:{
        backgroundColor: "#efefef",
        borderRadius: 50,
        height:"100%",
        width:null,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#fff",
        justifyContent:"center",
        alignItems: "center"
    }
}
export const day = {
    text:{
        color: "#FFF"
    }
}

export const running = {
    container:{
        backgroundColor: brand.inverse,
    }
}
export const upcoming = {
    container:{
        backgroundColor: brand.info,
    }
}

export const complete = {
    container:{
        backgroundColor: brand.success,
    }
}

export const stats = {
    container:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#eee'
    }
}
export const textCenter = {
    text:{
        textAlign: "center"
    }
}

export const mainCardImage = {
    width:"100%",
    maxHeight:300,
    height:200,
    backgroundColor:"#eee",
    resizeMode: "cover"

}

export const imgCircle ={
    image:{
        borderRadius:40/2,
        resizeMode: "cover"
    }

}
export const imgLocation={
    image:{
        width:40,
        height:40,
        marginLeft:10,
        marginRight:10
    }

}
export const header = {
    container:{
        height:60,
        paddingTop:10,
        paddingBottom:10,
        shadowOffset:{ width:2, height:4},
        shadowColor: "#000",
        shadowOpacity: 0.2,
        width:"100%"
    }
}
export const inpsectionDate= {
    container:{
        
    }
}

export const actions = {
    container:{
        backgroundColor: "#eee",
        borderTopWidth: 1,
        // borderBottomWidth:1,
        // marginTop:20,
        borderStyle: "solid",
        borderColor: "rgba(160,160,160,0.2)",
        width:"100%",
        flex:1,
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10
    }
}
export const flex50 = {
    container:{
        flex:0.5
    }
}


export const btnIcon ={
    container:{
        padding:0,
        borderRadius:0,
        borderColor: "transparent",
        backgroundColor:"transparent",
        shadowColor: "#000",
        width:25,
        height:25,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        marginRight:15,
        elevation: 0,
    },
    caption:{
        color: "#747474"
    },
    icon:{
        color:"#747474",
        size:25
    }

}
export const btnStart={

    container:{
        width: 80,
        height:50,
        borderRadius:50
        
    },
    caption:{
        fontSize:18
    }
}

export const btnSwipe ={
    container:{
        flexDirection: 'row',
        borderRadius:0,
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingLeft:0,
        paddingRight:0,
        paddingBottom:0,
        height:50,
        width:'50%'
    },
    caption:{
        color: "#fff",
        justifyContent: 'center',
        alignContent:'center',
        lineHeight:0,
        height:0,
        flex:0,
        width: 0
        },
    icon:{
        color:"#fff",
        size:18,
        justifyContent: 'center',
        alignContent:'center',
        flexDirection: 'row',
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center',
        padding:0
        // flex:1
    }

}
export const question = {
    text:{
        fontSize: 25,
        lineHeight: 25,
        marginTop:20,
        marginBottom:20

    }
}


export const questionNumber = {
    text:{
        fontSize:45,
        fontWeight:"bold",
        lineHeight:45,
        textDecorationLine:"underline"
    }
}

export const questionOf = {
    text:{
        fontSize:16
    }
}

export const iconSelected = {
    container:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DADADA",
        borderStyle: "solid",
        position:"relative",
        width:30,
        height:30,
        margin: 10,
        padding:2

    }
}
export const rounded = {
    container:{
        borderRadius: 50
    }
}
export const iconCenter = {
    container:{
        backgroundColor:brand.primary,
        borderRadius: 5,
        height:"100%",
        width:"100%"
    }
}
export const btnOverlay = {
    container:{
        position:"absolute",
        width:"100%",
        height:"100%"
    }
}

export const btnTransparent = {
    container:{
        backgroundColor:"transparent",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        
        elevation: 0,
    }
}
export const answerWrapper = {
    container:{
        position:"relative"
    }
}
export const questionContent = {
    container:{
        borderTopWidth: 1,
        borderColor: "#D7D7D7",
        borderStyle: "solid",
        marginTop:10
    }
}
// export const dropdownContainer = {
//     container:{
//         borderWidth: 1,
//         borderColor: "#D7D7D7",
//         borderStyle: "solid",
//         marginTop:10,
//         borderRadius:5,
//         padding:5
//     }
// }

export const topLine = {
    container:{
        borderTopWidth: 1,
        borderColor: "#D7D7D7",
        borderStyle: "solid",
    }
}

export const imgFull = {
    image:{
        width:"100%",
        height:"100%",
        resizeMode: "cover"
    }    
}

export const textClientName ={
    text:{
        fontSize:12
    }
}

export const textTime = {
    container:{
        margin:0
    },
    text:{
        paddingRight:0,
        marginRight:0
    }
}

export const btnBlock = {
    container:{
        width:"100%"
    },
}
export const width60 ={
    container:{
        width:"60%",
        borderRadius:4
    },
    inputDisabled:{
        borderRadius:10
    }
}
export const backgroundContrast = {
    container:{
        backgroundColor:'#ececec'
    }
}
export const btnSync = {
    container:{
        width:50,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor:null,
        elevation: 0
    },
    caption:{
        color:Platform.select({ ios: '#000', android: '#fff' }), 
    },
    icon:{
        color:Platform.select({ ios: '#000', android: '#fff' }), 
    }
}
export const floatingHeader={
    container:{
        position: 'absolute',
        top: 10,
        left:5,
        right:5,
        width:'97%',
    }
}
export const cardTitle={
    container:{
        marginTop:0
    }
}
export const headerNoMargin= {
    container:{
        marginBottom:0
    }
}
