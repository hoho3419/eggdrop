import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import ItemInfo from "../components/ItemInfo";
import { ITEMS } from "../util/itemlist";
import { scrollToTop } from "../App";

const Deal = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    let targetItem;
    let targetNextItem;
    let targetPrevItem;
    for(let i =0;i<ITEMS.length; i++){
        targetItem = ITEMS[i].filter((el) => parseInt(el.item_no) === parseInt(id))
        if(targetItem.length){
            targetNextItem = ITEMS[i].filter((el) => parseInt(el.item_no) === parseInt(+id + 1))
            targetPrevItem = ITEMS[i].filter((el) => parseInt(el.item_no) === parseInt(+id - 1))
            break
        }
    }
    useEffect(() =>{
        if(!id || +id > 56){
            alert('잘못된 접근입니다.')
            navigate('/')
        }
    },[navigate,id])
    useEffect(() =>{
        scrollToTop()
    },[])
    

    return (
        <div className="deal">
            {targetItem.map((el) => (
                <ItemInfo 
                key={el.item_no}
                id={el.item_no}
                desc={el.desc}
                title={el.title}
                title_img={el.title_img}
                price={el.price}
                src={[el.src,el.sub_src]}
                cir_img={el.cir_img}
                color={el.opt_color}
                nextText={targetNextItem.length ? targetNextItem[0].title : null}
                nextId={targetNextItem.length ? targetNextItem[0].item_no :null }
                PrevText={targetPrevItem.length ? targetPrevItem[0].title : null}
                PrevId={targetPrevItem.length ? targetPrevItem[0].item_no :null }
                />
            ))}
        </div>
    )
}
export default Deal;