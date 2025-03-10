import Utility from '~/lib/Utility';


export default (value: any, format: string = "YYYY-MM-DD") => {
	if (value === undefined || value === null || value === "") {
		return "";
	}

  return Utility.getDateToString(value, format);
};
