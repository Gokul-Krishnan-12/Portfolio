import Header from "@components/Header";


export default function ClientWrapper({children}){
    return(
       <>
            <Header/>
            {children}
       </>
    )
}
