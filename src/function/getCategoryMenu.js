export const getCategoryMenu = (param) => {
  
  const menuId = param.substring(0,3)

  switch (param) {
    case '001' : 
      return '채소'
    case '002' :
      return '과일·견과·쌀'
    case '003' :
      return '수산·해산·건어물'
    case '004' :
      return '정육·계란'
    case '005' :
      return '국·반찬·메인요리'
    case '006' :      
    return '샐러드·간편식'
    case '007' :
      return '면·양념·오일'
    case '008' :
      return '생수·음료·우유·커피'
    case '009' :
      return '간식·과자·떡'
    case '010' :
      return '베이커리·치즈·델리'
    default :
      return '신상품'
  }
}