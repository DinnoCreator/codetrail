import Image from "next/image";

const Learn = () => {
    const hCJ = `https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png`
    const cSharp = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR995zTLAtqO0KVoWuYucjgW2Xq1KWNzz0BZ37ZAVJIcg&s`
    const python = `https://us.123rf.com/450wm/get4net/get4net2112/get4net211227603/179640021-python-an-interpreted-high-level-general-purpose-programming-language.jpg?ver=6`
    return (
        <>
        <div className="containerct">
          <h2 className=" marg-t2 marg-b1">Learn The Stack And Language Of Your Choice</h2>
        </div>
        <div className="containerct">
            <Image  loader={() => hCJ} src={hCJ} alt="Logo of the brand" width={250} height={100} /> 
            <Image  loader={() => cSharp} src={cSharp} alt="Logo of the brand" width={125} height={100} /> 
            <Image  loader={() => python} src={python} alt="Logo of the brand" width={125} height={100} /> 
        </div>
        </>
    )
}

export default Learn;