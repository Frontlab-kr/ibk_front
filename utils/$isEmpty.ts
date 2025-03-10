import empty from "just-is-empty";

export default (value: any) => {

  
    
  // 숫자는 무조건 true 이므로 따로 처리.
  if (typeof value === "number") {
    return false;
  }

	return empty(value);
};
