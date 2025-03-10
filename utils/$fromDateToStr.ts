import moment from "moment";
export default (value: string|Date, format = "YYYY-MM-DD HH:mm:ss", seconds = '') => {
  if (!value) {
		return "";
	}
	return seconds ? moment(value).seconds(Number(seconds)).format(format) : moment(value).format(format);
};
