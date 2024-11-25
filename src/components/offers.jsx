
export default function Offers(props) {
  return (
   <>
   
   <div className={props.MainclassName}>
                    <div className={props.className}>
                       <img width="48" height="48" src={props.imgSrc} alt="coco-tree"/>                    
                    </div>
                    <div className="offerText1">
                        <div> <p style={{fontWeight: "bold"}} className="cityText1"> {props.title} </p></div>
                        <div>
                          <h6 className="cityText2">{props.title2}</h6>

                        </div>
                    </div>
    </div>
   
   </>
  )
}

