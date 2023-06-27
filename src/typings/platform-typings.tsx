export interface DialogInterface  {
      openPopup?:()=>void; closePopup?:()=>void; PopupComponent?:any | HTMLAllCollection;
      children?:any
}