import {CARTSURL} from "../common/AjaxUrlSchema"
import {SCHOOL} from "../common/AjaxUrlSchema"
export default  {

    getCarts(cb){
            fetch(CARTSURL).then(res=>{
              res.json().then(data=>{
                cb(data)
              })
            })
          },
          getSchools(cb){
            fetch(SCHOOL).then(res=>{
              res.json().then(data=>{
                cb(data)
              })
            })
          }
    }